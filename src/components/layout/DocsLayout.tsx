"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui";

const sidebarData = [
  {
    system: "core",
    label: "Industrial_Core",
    groups: [
      {
        title: "General",
        items: [
          { name: "Typography", href: "/components/core/typography" },
          { name: "Button", href: "/components/core/button" },
        ],
      },
      {
        title: "Form",
        items: [
          { name: "Input", href: "/components/core/input" },
          { name: "Label", href: "/components/core/label" },
          { name: "Checkbox", href: "/components/core/checkbox" },
          { name: "Switch", href: "/components/core/switch" },
        ],
      },
      {
        title: "Data_Display",
        items: [{ name: "Table", href: "/components/core/table" }],
      },
      {
        title: "Navigation",
        items: [
          { name: "Tabs", href: "/components/core/tabs" },
          { name: "Breadcrumb", href: "/components/core/breadcrumb" },
        ],
      },
      {
        title: "Overlays",
        items: [{ name: "Dialog", href: "/components/core/dialog" }],
      },
    ],
  },
  {
    system: "alchemist",
    label: "Alchemist_Sanctum",
    groups: [
      {
        title: "Artifacts",
        items: [
          { name: "Alchemist_Button", href: "/components/alchemist/button" },
        ],
      },
    ],
  },
];

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

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-72 h-screen border-r border-white/5 bg-background/50 backdrop-blur-xl pt-20 px-8 overflow-y-auto hidden md:block">
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-5 h-5 border border-accent rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-accent" />
            </div>
            <span className="font-mono text-[11px] tracking-[0.4em] uppercase font-bold text-white">
              8eyond_UI
            </span>
          </div>

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

      {/* Main Content */}
      <main className="md:pl-72 w-full relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <nav className="sticky top-0 z-30 h-20 border-b border-white/5 bg-background/50 backdrop-blur-xl px-12 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[11px] font-mono uppercase tracking-[0.3em]">
            <Link
              href="/"
              className="text-zinc-600 hover:text-accent transition-colors"
            >
              System_Home
            </Link>
            <ChevronRight size={12} className="text-zinc-800" />
            <Link
              href="/components"
              className="text-zinc-600 hover:text-accent transition-colors"
            >
              Library
            </Link>
            {pathname !== "/components" && (
              <>
                <ChevronRight size={12} className="text-zinc-800" />
                <span className="text-accent font-bold text-glow italic">
                  {pathname.split("/").pop()?.toUpperCase()}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group hidden sm:block">
              <Search
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-accent transition-colors"
              />
              <input
                placeholder="Search artifacts..."
                className="bg-white/5 border border-white/5 rounded-full py-1.5 pl-10 pr-4 text-[10px] font-mono w-40 focus:w-60 focus:border-accent/30 focus:outline-none transition-all duration-500"
              />
            </div>
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 text-[9px] uppercase tracking-widest px-4 border border-white/5"
              >
                Exit_System
              </Button>
            </Link>
          </div>
        </nav>

        <div className="relative z-10 pt-16 pb-32 px-8 md:px-24 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
