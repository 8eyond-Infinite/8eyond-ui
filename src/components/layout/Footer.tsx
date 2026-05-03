"use client";

import * as React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-8 bg-zinc-950/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-white/10 rotate-45 flex items-center justify-center group transition-transform hover:rotate-90 duration-700">
                <div className="w-2 h-2 bg-accent shadow-glow" />
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs tracking-[0.3em] uppercase font-bold text-white">
                  8eyond_Catalyst
                </div>
                <div className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
                  © 2026 Architectural Entropy
                </div>
              </div>
            </div>
            <p className="max-w-xs text-[10px] font-mono text-zinc-500 leading-relaxed uppercase tracking-wider">
              Designing the metaphysical through industrial precision. The
              ultimate catalyst for the modern architect.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-24 font-mono text-[9px] uppercase tracking-[0.3em]">
            <div className="space-y-4">
              <div className="text-white font-bold">Protocols</div>
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/components"
                  className="text-zinc-500 hover:text-accent transition-colors"
                >
                  Library Index
                </Link>
                <Link
                  href="/components/core/button"
                  className="text-zinc-500 hover:text-accent transition-colors"
                >
                  Core Components
                </Link>
                <Link
                  href="/components/alchemist/button"
                  className="text-zinc-500 hover:text-accent transition-colors"
                >
                  Alchemist Sanctum
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-white font-bold">Connect</div>
              <div className="flex flex-col gap-2.5">
                <a
                  href="https://github.com/8eyond-Infinite/8eyond-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Discord Server
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  Twitter / X
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-[8px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Cookie Policy
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-mono text-zinc-600 italic mr-2">
              &quot;The lead of logic, the gold of mastery.&quot;
            </div>
            <Badge variant="secondary" size="xs" className="opacity-30">
              Build v1.0.4 // Development
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
}
