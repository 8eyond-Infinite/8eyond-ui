"use client";

import * as React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";

import { CopyButton } from "@/components/docs/CopyButton";
import { Activity, ShieldAlert, Globe } from "lucide-react";

export default function TabsDoc() {
  const scalingSizes = ["xs", "sm", "md", "lg", "xl"] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Tabs</H1>
        <Lead>
          A high-performance interface for switching between architectural
          views. Engineered with spring-based motion and structural clarity.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="p-12 rounded-sm border border-white/5 bg-zinc-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px]" />

          <div className="relative z-10 w-full max-w-2xl mx-auto">
            <Tabs defaultValue="realtime" size="md">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="realtime" className="gap-2">
                    <Activity size={12} /> Realtime
                  </TabsTrigger>
                  <TabsTrigger value="security" className="gap-2">
                    <ShieldAlert size={12} /> Security
                  </TabsTrigger>
                  <TabsTrigger value="network" className="gap-2">
                    <Globe size={12} /> Network
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="realtime">
                <Card className="p-8 bg-black/40 border-white/10 space-y-6">
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <Muted className="text-[10px] uppercase tracking-widest">
                        CPU_Utilization
                      </Muted>
                      <div className="text-3xl font-black italic tracking-tighter text-white">
                        42.08%
                      </div>
                    </div>
                    <div className="flex gap-1 h-12 items-end">
                      {[40, 60, 45, 80, 50, 70, 30, 90, 40].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-white/20 rounded-t-[1px]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-sm bg-white/[0.02] border border-white/5">
                      <Muted className="text-[9px] uppercase tracking-widest block mb-1">
                        Node_ID
                      </Muted>
                      <span className="font-mono text-xs text-zinc-300 italic">
                        US-EAST-01
                      </span>
                    </div>
                    <div className="p-4 rounded-sm bg-white/[0.02] border border-white/5">
                      <Muted className="text-[9px] uppercase tracking-widest block mb-1">
                        Status
                      </Muted>
                      <span className="font-mono text-xs text-accent italic">
                        OPERATIONAL
                      </span>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="p-8 bg-black/40 border-white/10 space-y-6">
                  <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02]">
                      <ShieldAlert
                        className="text-accent shadow-glow"
                        size={20}
                      />
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-sm font-bold text-white uppercase italic">
                        Hardened_Protection_Active
                      </div>
                      <Muted className="text-[11px]">
                        All alchemical nodes are currently synchronized.
                      </Muted>
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-[10px] text-zinc-500">
                    <div className="flex justify-between border-b border-white/5 py-1">
                      <span>Encryption_v3</span>
                      <span className="text-white">ENABLED</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 py-1">
                      <span>Firewall_Filter</span>
                      <span className="text-white">REACTIVE</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 py-1">
                      <span>Auth_Protocol</span>
                      <span className="text-white">X_KEY_M7</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="network">
                <Card className="p-8 bg-black/40 border-white/10 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Globe size={14} className="text-zinc-600" />
                        <span className="text-[11px] font-bold uppercase tracking-widest">
                          Traffic_Flow
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-700 italic">
                        LATENCY: 14MS
                      </span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-white shadow-glow" />
                    </div>
                    <Muted className="text-[10px] italic">
                      Outbound transmission stabilized at 4.2GB/s
                    </Muted>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-500" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="space-y-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-zinc-800" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scaling
              </Muted>
            </div>

            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-col gap-12 items-center">
              {scalingSizes.map((size) => (
                <div
                  key={size}
                  className="w-full flex flex-col items-center gap-4 border-b border-white/5 pb-8 last:border-0 last:pb-0"
                >
                  <Muted className="text-[9px] uppercase tracking-[0.3em] font-bold">
                    {size.toUpperCase()}_VERSION
                  </Muted>
                  <Tabs defaultValue="1" size={size}>
                    <TabsList>
                      <TabsTrigger value="1">Core_A</TabsTrigger>
                      <TabsTrigger value="2">Core_B</TabsTrigger>
                      <TabsTrigger value="3">Core_C</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-800" />
            <H3>API Reference</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>
        <Card className="overflow-hidden border-white/5 bg-black/20">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-white">size</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  The overall dimensional scale of the tabs list.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  defaultValue
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  The value of the tab to be active by default.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  onValueChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  (value: string) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Callback triggered when a tab is selected.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-800" />
            <H3>Usage</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-sm blur-sm" />
          <div className="relative p-8 bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto flex items-center justify-between">
            <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
              {`<Tabs defaultValue="tab1" size="sm">
  <TabsList>
    <TabsTrigger value="tab1">Module_01</TabsTrigger>
    <TabsTrigger value="tab2">Module_02</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content_A</TabsContent>
  <TabsContent value="tab2">Content_B</TabsContent>
</Tabs>`}
            </code>
            <CopyButton
              value={`<Tabs defaultValue="tab1" size="sm">\n  <TabsList>\n    <TabsTrigger value="tab1">Module_01</TabsTrigger>\n    <TabsTrigger value="tab2">Module_02</TabsTrigger>\n  </TabsList>\n  <TabsContent value="tab1">Content_A</TabsContent>\n  <TabsContent value="tab2">Content_B</TabsContent>\n</Tabs>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
