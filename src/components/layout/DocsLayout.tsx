"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
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
    ],
  },
  {
    title: "Data Display",
    items: [{ name: "Card", href: "/components/card" }],
  },
];

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-screen border-r border-white/5 bg-background/50 backdrop-blur-xl pt-20 px-8 overflow-y-auto hidden md:block">
        <div className="space-y-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-5 h-5 border border-accent rotate-45 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-accent" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
              8eyond_UI
            </span>
          </div>

          {sidebarData.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-[9px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-600">
                {group.title}
              </h4>
              <ul className="space-y-1">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center justify-between py-2 text-[13px] font-medium tracking-tight transition-all",
                        pathname === item.href
                          ? "text-accent"
                          : "text-zinc-500 hover:text-zinc-200"
                      )}
                    >
                      <span>{item.name}</span>
                      {pathname === item.href && (
                        <motion.div layoutId="active-indicator">
                          <ChevronRight size={12} className="text-accent" />
                        </motion.div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:pl-64 w-full relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <nav className="sticky top-0 z-30 h-16 border-b border-white/5 bg-background/50 backdrop-blur-xl px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight size={10} className="opacity-30" />
            <span className="text-zinc-300">
              {pathname.split("/").pop() || "Library"}
            </span>
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
