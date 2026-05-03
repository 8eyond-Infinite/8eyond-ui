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
    title: "Foundations",
    items: [
      { name: "Introduction", href: "/components" },
      { name: "Typography", href: "/components/typography" },
    ],
  },
  {
    title: "General",
    items: [{ name: "Button", href: "/components/button" }],
  },
  {
    title: "Form",
    items: [
      { name: "Input", href: "/components/input" },
      { name: "Label", href: "/components/label" },
      { name: "Checkbox", href: "/components/checkbox" },
      { name: "Switch", href: "/components/switch" },
    ],
  },
  {
    title: "Data Display",
    items: [{ name: "Card", href: "/components/card" }],
  },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<string[]>([
    "Foundations",
    "General",
    "Form",
    "Data Display",
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

          <div className="space-y-4">
            {sidebarData.map((group) => {
              const isActive = group.items.some(
                (item) => item.href === pathname
              );
              const isOpen = openGroups.includes(group.title);

              return (
                <div key={group.title} className="space-y-1">
                  <button
                    onClick={() => toggleGroup(group.title)}
                    className={cn(
                      "w-full flex items-center justify-between py-2 px-3 -mx-3 rounded-md transition-colors group/btn",
                      isActive
                        ? "bg-white/[0.04] text-white"
                        : "hover:bg-white/[0.02] text-zinc-500"
                    )}
                  >
                    <h4
                      className={cn(
                        "text-[12px] font-bold uppercase tracking-wider transition-colors",
                        isActive
                          ? "text-white"
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
                        isActive && "text-accent"
                      )}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-0.5 overflow-hidden border-l border-white/5 ml-px pl-4"
                      >
                        {group.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "group flex items-center justify-between py-2 px-3 -ml-3 rounded-[2px] text-[13px] font-medium tracking-tight transition-all",
                                pathname === item.href
                                  ? "bg-accent/5 text-accent"
                                  : "text-zinc-500 hover:text-zinc-200 hover:bg-white/[0.03]"
                              )}
                            >
                              <span>{item.name}</span>
                              {pathname === item.href && (
                                <motion.div layoutId="active-indicator">
                                  <div className="w-1 h-1 rounded-full bg-accent shadow-glow" />
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

        <div className="relative z-10 pt-16 pb-32 px-6 md:px-16 max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
