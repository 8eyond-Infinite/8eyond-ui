import { Card } from "@/components/ui";
import { Cpu, Terminal, Layers, Type, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ComponentsPage() {
  return (
    <div className="space-y-24">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
          Library_Index
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl font-normal leading-relaxed">
          The complete inventory of 8eyond UI artifacts. High-performance
          building blocks for the modern digital architect.
        </p>
      </div>

      <div className="space-y-20">
        {/* Foundations */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-[12px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-600">
              Foundations
            </h2>
            <span className="text-[10px] font-mono text-zinc-800 italic">
              Core_Protocols
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/components/typography">
              <Card className="p-6 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <Type
                    className="text-zinc-600 group-hover:text-accent transition-colors"
                    size={24}
                  />
                  <ArrowRight
                    size={14}
                    className="text-zinc-800 group-hover:text-accent transition-all group-hover:translate-x-1"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-md font-bold uppercase italic mb-2">
                    Typography
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Font scales, hierarchies and readability standards.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Components */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h2 className="text-[12px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-600">
              Components
            </h2>
            <span className="text-[10px] font-mono text-zinc-800 italic">
              Atomic_Artifacts
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/components/button">
              <Card className="p-6 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <Cpu
                    className="text-zinc-600 group-hover:text-accent transition-colors"
                    size={24}
                  />
                  <ArrowRight
                    size={14}
                    className="text-zinc-800 group-hover:text-accent transition-all group-hover:translate-x-1"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-md font-bold uppercase italic mb-2">
                    Button
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Interactive catalysts with logical state management.
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/components/input">
              <Card className="p-6 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <Terminal
                    className="text-zinc-600 group-hover:text-accent transition-colors"
                    size={24}
                  />
                  <ArrowRight
                    size={14}
                    className="text-zinc-800 group-hover:text-accent transition-all group-hover:translate-x-1"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-md font-bold uppercase italic mb-2">
                    Input
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Terminal fields for precise data inscriptions.
                  </p>
                </div>
              </Card>
            </Link>
            <Link href="/components/card">
              <Card
                variant="artifact"
                className="p-6 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-start justify-between">
                  <Layers className="text-accent" size={24} />
                  <ArrowRight
                    size={14}
                    className="text-accent/40 group-hover:text-accent transition-all group-hover:translate-x-1"
                  />
                </div>
                <div className="mt-8">
                  <h3 className="text-md font-bold uppercase italic mb-2 text-glow">
                    Card
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Structural containers for organized data display.
                  </p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
