"use client";

import * as React from "react";
import Link from "next/link";
import { Search, GitBranch, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui";
import { CommandPalette } from "./CommandPalette";
import { useTheme } from "next-themes";

export function Header() {
  const [systemStatus] = React.useState("DEVELOPMENT_SESSION");
  const [searchOpen, setSearchOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="sticky top-0 w-full h-16 border-b border-border bg-background/60 backdrop-blur-xl px-8 flex justify-between items-center z-50 transition-colors duration-300">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-6 h-6 border border-accent rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
              <div className="w-2.5 h-2.5 bg-accent shadow-glow" />
            </div>
            <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold text-foreground group-hover:text-accent transition-colors">
              8eyond_Catalyst
            </span>
          </Link>
          <div className="h-5 w-[1px] bg-border hidden sm:block" />
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-glow-sm" />
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest font-medium">
              {systemStatus}
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-12 font-mono text-xs uppercase tracking-[0.2em] text-muted items-center">
          <Link
            href="/components"
            className="hover:text-foreground transition-colors relative group py-2"
          >
            Library Index
            <span className="absolute -bottom-[22px] left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/components/core/button"
            className="hover:text-foreground transition-colors py-2"
          >
            Components
          </Link>
          <a
            href="https://github.com/8eyond-Infinite/8eyond-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2.5 py-2"
          >
            <GitBranch size={14} className="text-muted" />
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-foreground/5 text-muted hover:text-foreground transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {mounted &&
              (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />)}
          </button>

          <button
            onClick={() => setSearchOpen(true)}
            className="relative group hidden xl:flex items-center w-64 h-9 bg-foreground/5 border border-border hover:border-accent/30 rounded-full px-4 transition-all duration-300"
          >
            <Search
              size={12}
              className="text-muted group-hover:text-accent transition-colors mr-3"
            />
            <span className="text-xs font-mono text-muted group-hover:text-foreground transition-colors flex-1 text-left">
              Search System...
            </span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-border bg-foreground/5">
              <span className="text-[10px] font-mono text-muted">⌘</span>
              <span className="text-[10px] font-mono text-muted">K</span>
            </div>
          </button>
          <Link href="/components">
            <Button
              size="sm"
              className="h-9 px-6 text-[11px] tracking-[0.15em] uppercase italic font-bold"
            >
              Initialize System
            </Button>
          </Link>
        </div>
      </header>
      <CommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
