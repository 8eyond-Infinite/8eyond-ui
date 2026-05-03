"use client";

import * as React from "react";
import {
  Switch,
  Label,
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
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/docs/CopyButton";
import { Zap, Radio, Globe } from "lucide-react";

export default function SwitchDoc() {
  const [protocols, setProtocols] = React.useState({
    overclock: true,
    telemetry: false,
    encryption: true,
    global_sync: false,
  });

  const toggle = (key: keyof typeof protocols) => {
    setProtocols((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const scalingExamples = [
    { size: "xs", label: "EXTREME_DENSITY" },
    { size: "sm", label: "COMPACT_VIEW" },
    { size: "md", label: "STANDARD_PROTOCOL" },
    { size: "lg", label: "FOCUS_MODE" },
    { size: "xl", label: "HIGH_FIDELITY" },
  ] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Switch</H1>
        <Lead>
          A binary toggle artifact for immediate system state transitions.
          Engineered for mechanical feedback and technical clarity.
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

          <div className="relative z-10 w-full max-w-md mx-auto space-y-6">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Kernel_State:{" "}
                {protocols.overclock ? "STABLE_OVERCLOCK" : "NOMINAL"}
              </span>
              <div className="flex gap-1">
                <div
                  className={cn(
                    "w-1 h-1 rounded-full animate-pulse",
                    protocols.overclock
                      ? "bg-accent shadow-glow"
                      : "bg-zinc-800"
                  )}
                />
              </div>
            </div>

            <Card className="p-6 space-y-4 bg-black/40 border-white/10">
              <div className="flex items-center justify-between p-4 rounded-sm border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-zinc-500">
                    <Zap size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <Label htmlFor="overclock">Neural_Overclocking</Label>
                    <Muted className="text-[10px]">
                      Increase processing throughput by 40%.
                    </Muted>
                  </div>
                </div>
                <Switch
                  id="overclock"
                  checked={protocols.overclock}
                  onCheckedChange={() => toggle("overclock")}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-sm border border-transparent hover:bg-white/[0.01] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-zinc-500">
                    <Radio size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <Label htmlFor="telemetry">Active_Telemetry</Label>
                    <Muted className="text-[10px]">
                      Stream operational logs to the core.
                    </Muted>
                  </div>
                </div>
                <Switch
                  id="telemetry"
                  checked={protocols.telemetry}
                  onCheckedChange={() => toggle("telemetry")}
                />
              </div>

              <div className="flex items-center justify-between p-4 rounded-sm border border-transparent hover:bg-white/[0.01] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-zinc-500">
                    <Globe size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <Label htmlFor="sync">Global_Architecture_Sync</Label>
                    <Muted className="text-[10px]">
                      Synchronize state across distributed nodes.
                    </Muted>
                  </div>
                </div>
                <Switch
                  id="sync"
                  checked={protocols.global_sync}
                  onCheckedChange={() => toggle("global_sync")}
                />
              </div>
            </Card>
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
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-zinc-800" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scaling
              </Muted>
            </div>

            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-col gap-8">
              {scalingExamples.map((item) => (
                <div
                  key={item.size}
                  className="flex items-center justify-between max-w-sm"
                >
                  <Label htmlFor={`size-${item.size}`} size={item.size}>
                    {item.label}
                  </Label>
                  <Switch
                    id={`size-${item.size}`}
                    size={item.size}
                    defaultChecked
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States_Inactive
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex items-center justify-between">
                <Label htmlFor="s-off">Decommissioned_Module</Label>
                <Switch id="s-off" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States_Disabled
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex items-center justify-between">
                <Label htmlFor="s-dis" className="opacity-50">
                  Hardened_Protection
                </Label>
                <Switch id="s-dis" disabled defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-800" />
            <H3>API_Reference</H3>
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
                <TableCell>Dimensional scale for physical alignment.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">checked</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>The controlled activation state.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  onCheckedChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  (checked: boolean) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>Callback triggered upon state transition.</TableCell>
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
              {`<div className="flex items-center justify-between">
  <Label htmlFor="id" size="sm">Enable_System</Label>
  <Switch id="id" size="sm" />
</div>`}
            </code>
            <CopyButton
              value={`<div className="flex items-center justify-between">\n  <Label htmlFor="id" size="sm">Enable_System</Label>\n  <Switch id="id" size="sm" />\n</div>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
