import { Card } from "@/components/ui";
import { Cpu, Terminal, Layers, Type } from "lucide-react";
import Link from "next/link";

export default function ComponentsPage() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Library_Index
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light leading-relaxed">
          Welcome to the 8eyond UI Component Library. A collection of
          high-performance digital artifacts designed for industrial logic and
          alchemical magic.
        </p>
      </div>

      <div className="space-y-12">
        <div className="space-y-6">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-600 border-b border-white/5 pb-4">
            Foundations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/components/typography">
              <Card className="p-6 h-full group hover:border-accent/30 transition-all duration-500">
                <Type
                  className="mb-4 text-zinc-600 group-hover:text-accent transition-colors"
                  size={20}
                />
                <h3 className="text-sm font-bold uppercase italic mb-1">
                  Typography
                </h3>
                <p className="text-zinc-500 text-[11px] leading-relaxed">
                  Standardized font scales and hierarchies for the system.
                </p>
              </Card>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-600 border-b border-white/5 pb-4">
            Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/components/button">
              <Card className="p-6 h-full group hover:border-accent/30 transition-all duration-500">
                <Cpu
                  className="mb-4 text-zinc-600 group-hover:text-accent transition-colors"
                  size={20}
                />
                <h3 className="text-sm font-bold uppercase italic mb-1">
                  Button
                </h3>
                <p className="text-zinc-500 text-[11px] leading-relaxed">
                  Atomic interactive elements with multiple logical states.
                </p>
              </Card>
            </Link>
            <Link href="/components/input">
              <Card className="p-6 h-full group hover:border-accent/30 transition-all duration-500">
                <Terminal
                  className="mb-4 text-zinc-600 group-hover:text-accent transition-colors"
                  size={20}
                />
                <h3 className="text-sm font-bold uppercase italic mb-1">
                  Input
                </h3>
                <p className="text-zinc-500 text-[11px] leading-relaxed">
                  Fields for data inscriptions and technical entry.
                </p>
              </Card>
            </Link>
            <Link href="/components/card">
              <Card
                variant="artifact"
                className="p-6 h-full group hover:border-accent/30 transition-all duration-500"
              >
                <Layers className="mb-4 text-accent" size={20} />
                <h3 className="text-sm font-bold uppercase italic mb-1 text-glow">
                  Card
                </h3>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Containers for organizing information with depth.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
