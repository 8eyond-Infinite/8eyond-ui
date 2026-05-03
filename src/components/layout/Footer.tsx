"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-8 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 border border-white/10 rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white/20" />
          </div>
          <div className="space-y-1">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase font-bold text-white">
              8eyond UI
            </div>
            <div className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">
              © 2026 Architectural Entropy
            </div>
          </div>
        </div>

        <div className="flex gap-12 font-mono text-[9px] text-zinc-500 uppercase tracking-[0.4em]">
          <div className="space-y-3">
            <div className="text-zinc-400">Resources</div>
            <div className="flex flex-col gap-2">
              <Link href="/components" className="hover:text-accent">
                Library Index
              </Link>
              <a href="#" className="hover:text-accent">
                Documentation
              </a>
              <a href="#" className="hover:text-accent">
                Changelog
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <div className="text-zinc-400">Social</div>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-accent">
                GitHub
              </a>
              <a href="#" className="hover:text-accent">
                Twitter X
              </a>
              <a href="#" className="hover:text-accent">
                Discord
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 text-right">
          <div className="text-[10px] font-mono text-zinc-600 italic">
            &quot;The lead of logic, the gold of mastery.&quot;
          </div>
          <Badge variant="secondary" size="xs" className="opacity-40">
            System V1.0.4 Stable
          </Badge>
        </div>
      </div>
    </footer>
  );
}
