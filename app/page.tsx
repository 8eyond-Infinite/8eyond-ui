"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui";
import { Footer } from "@/components/layout";
import {
  MoveRight,
  Shield,
  Layers,
  Code,
  Terminal,
  Sparkles,
  Activity,
  Lock,
  Database,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    // System Initialization Logic
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background overflow-x-hidden">
      {/* Background System */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 w-full h-[1px] bg-accent/20 z-10"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-[9px] font-mono text-accent uppercase tracking-widest">
                <Sparkles size={10} className="animate-pulse" /> 8eyond
                Protocols {" // "}
                Dual-Path_v1.0.4
              </div>
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85]">
                  8EYOND <br />
                  <span
                    className="text-transparent"
                    style={{
                      WebkitTextStroke: "1px hsla(var(--foreground-raw), 0.3)",
                    }}
                  >
                    CATALYST.
                  </span>
                </h1>
                <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-accent font-bold uppercase">
                  <span>Framer</span>
                  <span className="text-muted/40">/</span>
                  <span>React</span>
                  <span className="text-muted/40">/</span>
                  <span>Tailwind</span>
                </div>
                <p className="max-w-xl text-muted text-lg font-light leading-relaxed">
                  The dual-path ecosystem for digital architects. Bridging the{" "}
                  <span className="text-foreground italic font-medium">
                    raw precision
                  </span>{" "}
                  of Industrial Core with the{" "}
                  <span className="text-accent italic font-medium">
                    metaphysical soul
                  </span>{" "}
                  of the Alchemist Sanctum — serving as the ultimate catalyst
                  for motion-driven, high-fidelity logic.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href="/components">
                  <Button size="lg" className="px-10 h-14">
                    Browse Artifacts
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-10 h-14 border-border"
                >
                  <Code size={16} className="mr-3" />
                  Documentation
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
                <div className="space-y-1">
                  <div className="text-2xl font-black italic text-foreground">
                    17+
                  </div>
                  <div className="text-[9px] font-mono text-muted uppercase tracking-widest">
                    Core Nodes
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black italic text-foreground">
                    60FPS
                  </div>
                  <div className="text-[9px] font-mono text-muted uppercase tracking-widest">
                    Motion Engine
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black italic text-foreground">
                    0.4kb
                  </div>
                  <div className="text-[9px] font-mono text-muted uppercase tracking-widest">
                    Atomic Payload
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full opacity-30 pointer-events-none" />
              <Card
                variant="technical"
                className="p-1 border-border bg-background/40 backdrop-blur-2xl overflow-hidden shadow-2xl"
              >
                <div className="bg-background/50 rounded-[1px] p-6 space-y-6">
                  {/* Mock Header */}
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                        System Monitor v2
                      </span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/20" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/20" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/20" />
                    </div>
                  </div>

                  {/* Mock Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-4 bg-foreground/[0.02] space-y-3">
                      <div className="flex justify-between items-center">
                        <Activity size={12} className="text-muted" />
                        <Badge variant="success" size="xs" dot pulse>
                          Live
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-black italic text-foreground leading-none">
                          84.2%
                        </div>
                        <div className="text-[8px] font-mono text-muted uppercase tracking-tighter">
                          Memory Efficiency
                        </div>
                      </div>
                    </Card>
                    <Card className="p-4 bg-foreground/[0.02] space-y-3">
                      <div className="flex justify-between items-center">
                        <Database size={12} className="text-muted" />
                        <Badge variant="secondary" size="xs">
                          Stable
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-black italic text-foreground leading-none">
                          12ms
                        </div>
                        <div className="text-[8px] font-mono text-muted uppercase tracking-tighter">
                          Query Latency
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Mock Table */}
                  <div className="border border-border rounded-sm overflow-hidden">
                    <Table variant="technical">
                      <TableHeader className="bg-foreground/[0.02]">
                        <TableRow className="hover:bg-transparent border-border">
                          <TableHead className="h-8 text-[8px] uppercase tracking-widest text-muted">
                            Artifact
                          </TableHead>
                          <TableHead className="h-8 text-[8px] uppercase tracking-widest text-muted">
                            Status
                          </TableHead>
                          <TableHead className="h-8 text-[8px] uppercase tracking-widest text-muted text-right">
                            Node
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow className="border-border hover:bg-foreground/[0.01]">
                          <TableCell className="py-2 text-[9px] font-mono text-foreground">
                            Kernel_X1
                          </TableCell>
                          <TableCell className="py-2">
                            <Badge variant="outline" size="xs">
                              Active
                            </Badge>
                          </TableCell>
                          <TableCell className="py-2 text-[9px] font-mono text-muted text-right">
                            0x9F
                          </TableCell>
                        </TableRow>
                        <TableRow className="border-border hover:bg-foreground/[0.01]">
                          <TableCell className="py-2 text-[9px] font-mono text-foreground">
                            Proxy_A2
                          </TableCell>
                          <TableCell className="py-2">
                            <Badge variant="outline" size="xs">
                              Idle
                            </Badge>
                          </TableCell>
                          <TableCell className="py-2 text-[9px] font-mono text-muted text-right">
                            0x12
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  {/* Mock Accordion */}
                  <Accordion type="single" defaultValue="i1">
                    <AccordionItem
                      value="i1"
                      className="border-border bg-transparent"
                    >
                      <AccordionTrigger className="p-3 text-[9px] py-2">
                        Security Protocol
                      </AccordionTrigger>
                      <AccordionContent className="p-3 pt-0 text-[10px] text-muted italic">
                        RSA-4096 Encryption Active. All streams verified.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </Card>

              {/* Floating Accents */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 p-4 rounded-sm bg-background/80 backdrop-blur-md border border-border shadow-2xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center">
                    <Lock size={12} className="text-accent" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-black italic text-foreground uppercase">
                      Encrypted
                    </div>
                    <div className="text-[8px] font-mono text-muted uppercase tracking-widest">
                      Level_04
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="max-w-7xl mx-auto px-6 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-10 space-y-6 group hover:bg-foreground/[0.02] transition-all duration-700">
              <div className="w-12 h-12 rounded-sm bg-foreground/[0.05] border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <Terminal
                  size={20}
                  className="text-muted group-hover:text-accent transition-colors"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-black uppercase italic tracking-tight text-foreground">
                  Technical Precision
                </h3>
                <p className="text-muted text-sm leading-relaxed font-light">
                  Every component is engineered with mathematical precision,
                  prioritizing monospace readability and industrial clarity.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-accent font-mono text-[9px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Explore Logic <MoveRight size={10} />
              </div>
            </Card>

            <Card className="p-10 space-y-6 group hover:bg-foreground/[0.02] transition-all duration-700">
              <div className="w-12 h-12 rounded-sm bg-foreground/[0.05] border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <Layers
                  size={20}
                  className="text-muted group-hover:text-accent transition-colors"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-black uppercase italic tracking-tight text-foreground">
                  Multi Layer Depth
                </h3>
                <p className="text-muted text-sm leading-relaxed font-light">
                  A dual-layer design system that seamlessly blends minimal
                  industrial utility with high-end glassmorphic artifacts.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-accent font-mono text-[9px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                View Hierarchy <MoveRight size={10} />
              </div>
            </Card>

            <Card className="p-10 space-y-6 group hover:bg-foreground/[0.02] transition-all duration-700">
              <div className="w-12 h-12 rounded-sm bg-foreground/[0.05] border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors">
                <Shield
                  size={20}
                  className="text-muted group-hover:text-accent transition-colors"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-black uppercase italic tracking-tight text-foreground">
                  System Hardened
                </h3>
                <p className="text-muted text-sm leading-relaxed font-light">
                  Optimized for enterprise-grade performance and uncompromising
                  security at every atomic level of the framework.
                </p>
              </div>
              <div className="pt-4 flex items-center gap-2 text-accent font-mono text-[9px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                Audit Protocol <MoveRight size={10} />
              </div>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-7xl mx-auto px-6 pb-40">
          <Card
            variant="technical"
            className="p-20 text-center space-y-10 relative overflow-hidden border-accent/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-foreground">
                Ready to Build?
              </h2>
              <p className="max-w-xl mx-auto text-muted text-lg font-light leading-relaxed">
                Initialize the system today and start building the future of
                industrial digital interfaces.
              </p>
              <div className="pt-8 flex justify-center gap-6">
                <Link href="/components">
                  <Button size="lg" className="px-12 h-16">
                    Get Started Now
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-12 h-16 border-border"
                >
                  View GitHub
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <Footer />
      </div>
    </main>
  );
}
