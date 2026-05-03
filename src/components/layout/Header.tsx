"use client";

import * as React from "react";
import Link from "next/link";
import { Search, GitBranch } from "lucide-react";
import { Button } from "@/components/ui";
import { CommandPalette } from "./CommandPalette";

export function Header() {
  const [systemStatus] = React.useState("DEVELOPMENT_SESSION");
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 w-full h-16 border-b border-white/5 bg-background/60 backdrop-blur-xl px-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-6 h-6 border border-accent rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
              <div className="w-2.5 h-2.5 bg-accent shadow-glow" />
            </div>
            <span className="font-mono text-sm tracking-[0.3em] uppercase font-bold text-white group-hover:text-accent transition-colors">
              8eyond_Catalyst
            </span>
          </Link>
          <div className="h-5 w-[1px] bg-white/10 hidden sm:block" />
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest font-medium">
              {systemStatus}
            </span>
          </div>
        </div>

        <div className="hidden md:flex gap-12 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 items-center">
          <Link
            href="/components"
            className="hover:text-white transition-colors relative group py-2"
          >
            Library Index
            <span className="absolute -bottom-[22px] left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full" />
          </Link>
          <Link
            href="/components/core/button"
            className="hover:text-white transition-colors py-2"
          >
            Components
          </Link>
          <a
            href="https://github.com/8eyond-Infinite/8eyond-ui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2.5 py-2"
          >
            <GitBranch size={14} className="text-zinc-500" />
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setSearchOpen(true)}
            className="relative group hidden xl:flex items-center w-64 h-9 bg-white/5 border border-white/5 hover:border-accent/30 rounded-full px-4 transition-all duration-300"
          >
            <Search
              size={12}
              className="text-zinc-500 group-hover:text-accent transition-colors mr-3"
            />
            <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors flex-1 text-left">
              Search System...
            </span>
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-white/10 bg-white/5">
              <span className="text-[10px] font-mono text-zinc-500">⌘</span>
              <span className="text-[10px] font-mono text-zinc-500">K</span>
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
