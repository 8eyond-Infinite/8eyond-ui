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
      <aside className="fixed top-16 left-0 z-40 w-72 h-[calc(100vh-64px)] border-r border-border bg-background/20 backdrop-blur-3xl px-8 overflow-y-auto hidden md:block pt-12 transition-colors duration-300">
        <div className="space-y-12 pb-20">
          {sidebarData.map((system) => (
            <div key={system.label} className="space-y-8">
              {/* System Header */}
              <div className="flex items-center gap-3 px-2">
                <div
                  className={cn(
                    "w-1 h-3 rounded-full",
                    system.system === "alchemist"
                      ? "bg-accent shadow-glow"
                      : "bg-foreground/20"
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.2em] font-black italic",
                    system.system === "alchemist"
                      ? "text-accent"
                      : "text-foreground"
                  )}
                >
                  {system.label.replace("_", " ")}
                </span>
              </div>

              {/* Groups & Items */}
              <div className="space-y-4 pl-1">
                {system.groups.map((group) => {
                  const isOpen = openGroups.includes(group.title);
                  const hasActiveItem = group.items.some(
                    (item) => item.href === pathname
                  );

                  return (
                    <div key={group.title} className="space-y-1">
                      <button
                        onClick={() => toggleGroup(group.title)}
                        className="w-full flex items-center justify-between px-3 py-2 group/btn transition-colors hover:bg-foreground/[0.02] rounded-sm"
                      >
                        <h4
                          className={cn(
                            "text-sm font-bold uppercase tracking-wider transition-colors",
                            hasActiveItem
                              ? "text-foreground"
                              : "text-muted group-hover/btn:text-foreground/70"
                          )}
                        >
                          {group.title}
                        </h4>
                        <ChevronRight
                          size={12}
                          className={cn(
                            "text-muted transition-transform duration-300",
                            isOpen && "rotate-90",
                            hasActiveItem && "text-accent/60"
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
                            className="space-y-1 border-l border-border ml-4 pl-4 overflow-hidden"
                          >
                            {group.items.map((item) => {
                              const isActive = pathname === item.href;
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    className={cn(
                                      "group flex items-center justify-between py-1.5 px-3 -ml-4 rounded-sm text-[13px] transition-all duration-300 relative",
                                      isActive
                                        ? "text-foreground font-medium bg-foreground/[0.03]"
                                        : "text-muted hover:text-foreground"
                                    )}
                                  >
                                    <span className="relative z-10">
                                      {item.name}
                                    </span>
                                    {isActive && (
                                      <>
                                        <motion.div
                                          layoutId="active-pill"
                                          className={cn(
                                            "absolute left-0 w-0.5 h-full rounded-full z-20",
                                            system.system === "alchemist"
                                              ? "bg-accent shadow-glow"
                                              : "bg-foreground"
                                          )}
                                        />
                                        <div
                                          className={cn(
                                            "w-1 h-1 rounded-full",
                                            system.system === "alchemist"
                                              ? "bg-accent"
                                              : "bg-foreground"
                                          )}
                                        />
                                      </>
                                    )}
                                  </Link>
                                </li>
                              );
                            })}
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
