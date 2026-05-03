"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import {
  MoveRight,
  Shield,
  Repeat,
  Layers,
  Code,
  Eye,
  Copy,
  Check,
  Terminal,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(
      `<Button variant="alchemist" size="lg">\n  Transmute Artifact\n</Button>`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-void-1000 overflow-x-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-secondary/5 rounded-full blur-[140px] animate-pulse-slow" />
      </div>

      <div className="relative z-10">
        <nav className="sticky top-0 w-full border-b border-white/5 bg-background/50 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border border-accent rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-accent" />
            </div>
            <span className="font-mono text-xs tracking-[0.4em] uppercase font-bold">
              8eyond_UI
            </span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Components
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Lab
            </a>
          </div>
          <Button variant="alchemist" size="sm" className="h-8">
            Initialize_System
          </Button>
        </nav>

        <section className="max-w-6xl mx-auto px-6 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center space-y-10 mb-40"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[9px] font-mono text-accent uppercase tracking-widest">
              <Sparkles size={10} className="animate-pulse" />{" "}
              Experimental_Build_v0.1
            </div>
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.75]">
              Architectural <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
              >
                Entropy.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl font-light leading-relaxed">
              The catalyst for digital excellence. A modular UI system bridging
              the gap between{" "}
              <span className="text-white italic">industrial efficiency</span>{" "}
              and <span className="text-accent italic">alchemical wonder</span>.
            </p>
            <div className="flex justify-center gap-6">
              <Button size="lg" variant="alchemist">
                Browse Artifacts
              </Button>
              <Button size="lg" variant="secondary">
                View Source
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-40">
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-accent font-mono text-[10px] tracking-[0.4em] uppercase opacity-60">
                    <Cpu size={14} /> Artifact_01 // ATOMIC
                  </div>
                  <h2 className="text-5xl font-black tracking-tight uppercase italic">
                    The Button
                  </h2>
                  <p className="text-zinc-500 max-w-md text-sm leading-relaxed">
                    A polymorphic interactive element supporting logical states
                    and artistic expressions.
                  </p>
                </div>

                <div className="flex bg-white/5 p-1 rounded-[2px] border border-white/5 h-fit">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={cn(
                      "flex items-center gap-2 px-6 py-2 text-[10px] font-mono uppercase tracking-widest transition-all duration-300",
                      activeTab === "preview"
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    <Eye size={12} /> Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={cn(
                      "flex items-center gap-2 px-6 py-2 text-[10px] font-mono uppercase tracking-widest transition-all duration-300",
                      activeTab === "code"
                        ? "bg-white/10 text-white shadow-lg"
                        : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    <Code size={12} /> Code
                  </button>
                </div>
              </div>

              <Card
                variant="artifact"
                className="min-h-[500px] flex items-center justify-center relative overflow-hidden bg-white/[0.01]"
              >
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)]" />

                <AnimatePresence mode="wait">
                  {activeTab === "preview" ? (
                    <motion.div
                      key="preview"
                      initial={{
                        opacity: 0,
                        scale: 0.98,
                        filter: "blur(10px)",
                      }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-wrap gap-12 justify-center items-center z-10"
                    >
                      <Button variant="primary">Core_Logic</Button>
                      <Button variant="secondary">System_Static</Button>
                      <Button variant="alchemist" size="lg" className="group">
                        Transmute Now
                        <MoveRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="w-full max-w-2xl bg-black/40 backdrop-blur-md rounded-lg border border-white/5 p-8 font-mono text-sm relative group"
                    >
                      <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        </div>
                        <button
                          onClick={copyCode}
                          className="text-zinc-500 hover:text-white transition-all p-2 hover:bg-white/5 rounded-md"
                        >
                          {copied ? (
                            <Check size={16} className="text-accent" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                      <pre className="text-zinc-300 leading-loose overflow-x-auto">
                        <code className="block">
                          <span className="text-zinc-600">import</span>{" "}
                          {"{ Button }"}{" "}
                          <span className="text-zinc-600">from</span>{" "}
                          <span className="text-accent">
                            &quot;@/components/ui&quot;
                          </span>
                          ;{"\n\n"}
                          {"<Button "}
                          <span className="text-accent">variant</span>
                          =&quot;alchemist&quot;{" "}
                          <span className="text-accent">size</span>
                          =&quot;lg&quot;{">"}
                          {"\n"}
                          {"  Transmute Artifact"}
                          {"\n"}
                          {"</Button>"}
                        </code>
                      </pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 space-y-4 group">
                <Terminal
                  size={24}
                  className="text-zinc-600 group-hover:text-accent transition-colors"
                />
                <h3 className="font-bold uppercase italic">Command_Driven</h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Built for technical users who demand precision and
                  keyboard-first accessibility.
                </p>
              </Card>
              <Card variant="artifact" className="p-8 space-y-4 group">
                <Layers
                  size={24}
                  className="text-accent group-hover:text-accent shadow-glow"
                />
                <h3 className="font-bold uppercase italic text-glow">
                  Multi_Layered
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Dual-layer design system that scales from minimalist admin
                  panels to high-end landing pages.
                </p>
              </Card>
              <Card className="p-8 space-y-4 group">
                <Shield
                  size={24}
                  className="text-zinc-600 group-hover:text-accent transition-colors"
                />
                <h3 className="font-bold uppercase italic">
                  Architect_Hardened
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Enterprise-grade security and performance optimization at
                  every atomic level.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <footer className="mt-40 border-t border-white/5 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-12 font-mono text-[9px] text-zinc-700 uppercase tracking-[0.4em]">
              <div>Kernel: v1.0.0-catalyst</div>
              <div>Protocol: Alchemical_Standard</div>
            </div>
            <div className="text-[10px] font-mono text-zinc-600 italic">
              &quot;The lead of logic, the gold of mastery.&quot;
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
