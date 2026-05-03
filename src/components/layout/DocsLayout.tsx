"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { sidebarData } from "@/config/docs";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<string[]>([
    "General",
    "Form",
    "Artifacts",
  ]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const getBreadcrumbs = () => {
    if (pathname === "/components") return [];

    for (const system of sidebarData) {
      for (const group of system.groups) {
        const item = group.items.find((i) => i.href === pathname);
        if (item) {
          return [
            { label: system.label.replace("_", " "), href: "#" },
            { label: group.title, href: "#" },
            { label: item.name.replace("_", " "), href: pathname },
          ];
        }
      }
    }
    return [];
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed top-16 left-0 z-40 w-72 h-[calc(100vh-64px)] border-r border-white/5 bg-background/50 backdrop-blur-xl px-8 overflow-y-auto hidden md:block pt-12">
        <div className="space-y-8 pb-12">
          <div className="space-y-12">
            {sidebarData.map((system) => (
              <div key={system.label} className="space-y-4">
                <div className="flex items-center gap-2 px-3">
                  <div
                    className={cn(
                      "w-1 h-3 rounded-full",
                      system.system === "alchemist"
                        ? "bg-accent shadow-glow"
                        : "bg-zinc-800"
                    )}
                  />
                  <span
                    className={cn(
                      "font-mono text-[9px] uppercase tracking-[0.3em] font-bold",
                      system.system === "alchemist"
                        ? "text-accent"
                        : "text-zinc-600"
                    )}
                  >
                    {system.label}
                  </span>
                </div>

                <div className="space-y-1">
                  {system.groups.map((group) => {
                    const isActive = group.items.some(
                      (item) => item.href === pathname
                    );
                    const isOpen = openGroups.includes(group.title);

                    return (
                      <div key={group.title} className="space-y-1">
                        <button
                          onClick={() => toggleGroup(group.title)}
                          className={cn(
                            "w-full flex items-center justify-between py-2 px-3 rounded-md transition-colors group/btn",
                            isActive
                              ? "bg-white/[0.04] text-white"
                              : "hover:bg-white/[0.02] text-zinc-500"
                          )}
                        >
                          <h4
                            className={cn(
                              "text-[11px] font-bold uppercase tracking-wider transition-colors",
                              isActive
                                ? "text-white"
                                : system.system === "alchemist"
                                  ? "text-accent/40 group-hover/btn:text-accent/80"
                                  : "group-hover/btn:text-zinc-200"
                            )}
                          >
                            {group.title}
                          </h4>
                          <ChevronRight
                            size={10}
                            className={cn(
                              "text-zinc-800 transition-transform duration-300",
                              isOpen && "rotate-90",
                              isActive &&
                                (system.system === "alchemist"
                                  ? "text-accent"
                                  : "text-white")
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className={cn(
                                "space-y-0.5 overflow-hidden border-l ml-px pl-4",
                                system.system === "alchemist"
                                  ? "border-accent/10"
                                  : "border-white/5"
                              )}
                            >
                              {group.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "group flex items-center justify-between py-2 px-3 -ml-3 rounded-[2px] text-[13px] font-medium tracking-tight transition-all",
                                      pathname === item.href
                                        ? system.system === "alchemist"
                                          ? "bg-accent/5 text-accent"
                                          : "bg-white/5 text-white"
                                        : "text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.03]"
                                    )}
                                  >
                                    <span>{item.name}</span>
                                    {pathname === item.href && (
                                      <motion.div layoutId="active-indicator">
                                        <div
                                          className={cn(
                                            "w-1 h-1 rounded-full shadow-glow",
                                            system.system === "alchemist"
                                              ? "bg-accent"
                                              : "bg-white"
                                          )}
                                        />
                                      </motion.div>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <main className="md:pl-72 w-full relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 pt-10 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
          {/* Breadcrumb Area */}
          <div className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] mb-12 border-b border-white/5 pb-8 min-h-[40px]">
            {breadcrumbs.length > 0 ? (
              breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={crumb.label}>
                  {idx > 0 && (
                    <ChevronRight size={10} className="text-zinc-800" />
                  )}
                  <span
                    className={cn(
                      "transition-colors",
                      idx === breadcrumbs.length - 1
                        ? "text-accent font-bold text-glow italic"
                        : "text-zinc-600"
                    )}
                  >
                    {crumb.label.toUpperCase()}
                  </span>
                </React.Fragment>
              ))
            ) : (
              <span className="text-zinc-600">Library Index</span>
            )}
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
