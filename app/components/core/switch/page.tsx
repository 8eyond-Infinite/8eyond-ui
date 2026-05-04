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
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { UsageBlock } from "@/components/docs/UsageBlock";
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
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-md mx-auto space-y-6">
            <div className="flex items-center justify-between px-2">
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Kernel_State:{" "}
                {protocols.overclock ? "STABLE_OVERCLOCK" : "NOMINAL"}
              </span>
              <div className="flex gap-1">
                <div
                  className={cn(
                    "w-1 h-1 rounded-full animate-pulse",
                    protocols.overclock ? "bg-accent" : "bg-border"
                  )}
                />
              </div>
            </div>

            <Card className="p-6 space-y-4 bg-background/40 border-border">
              <div className="flex items-center justify-between p-4 rounded-sm border border-border bg-foreground/[0.02]">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-background border border-border text-muted">
                    <Zap size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <Label htmlFor="overclock">Neural Overclocking</Label>
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

              <div className="flex items-center justify-between p-4 rounded-sm border border-transparent hover:bg-foreground/[0.01] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-background border border-border text-muted">
                    <Radio size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <Label htmlFor="telemetry">Active Telemetry</Label>
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

              <div className="flex items-center justify-between p-4 rounded-sm border border-transparent hover:bg-foreground/[0.01] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-background border border-border text-muted">
                    <Globe size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <Label htmlFor="sync">Global Architecture Sync</Label>
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
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-border" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scaling
              </Muted>
            </div>

            <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] flex flex-col gap-8 transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
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
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States Inactive
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] flex items-center justify-between transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
                <Label htmlFor="s-off">Decommissioned Module</Label>
                <Switch id="s-off" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States Disabled
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] flex items-center justify-between transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
                <Label htmlFor="s-dis" className="opacity-50">
                  Hardened Protection
                </Label>
                <Switch id="s-dis" disabled defaultChecked />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>API Reference</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>
        <Card className="overflow-hidden border-border bg-foreground/[0.02]">
          <Table variant="technical">
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
                <TableCell className="font-mono text-foreground">
                  size
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>Dimensional scale for physical alignment.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  checked
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>The controlled activation state.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  onCheckedChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
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
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Usage</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>
        <UsageBlock
          code={`<div className="flex items-center justify-between">\n  <Label htmlFor="id" size="sm">Enable System</Label>\n  <Switch id="id" size="sm" />\n</div>`}
        />
      </section>
    </div>
  );
}
