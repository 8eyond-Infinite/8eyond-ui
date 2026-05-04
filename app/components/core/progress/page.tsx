"use client";

import * as React from "react";
import {
  Progress,
  Gauge,
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
  Button,
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function ProgressDoc() {
  const [val, setVal] = React.useState(33);

  React.useEffect(() => {
    const timer = setTimeout(() => setVal(66), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Progress & Gauge</H1>
        <Lead>
          System telemetry artifacts for real-time process monitoring. Designed
          with high-density readouts and responsive motion profiles.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>Execution</H3>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setVal(Math.floor(Math.random() * 100))}
          >
            Re-simulate Signal
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Linear Progress */}
          <Card className="p-8 space-y-10 bg-foreground/[0.02]">
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Linear Telemetry
              </div>
              <Progress value={val} showLabel label="Core Processor Load" />
              <Progress
                value={82}
                variant="danger"
                showLabel
                label="Memory Saturation"
              />
              <Progress
                value={45}
                variant="success"
                showLabel
                label="Coolant Integrity"
              />
              <Progress
                value={95}
                variant="technical"
                showLabel
                label="System Stability"
              />
            </div>
          </Card>

          {/* Circular Gauges */}
          <Card className="p-8 flex items-center justify-center bg-foreground/[0.02]">
            <div className="grid grid-cols-2 gap-12">
              <Gauge value={val} label="Primary Output" variant="default" />
              <Gauge value={78} label="Flux Density" variant="technical" />
              <Gauge value={12} label="Thermal Warning" variant="danger" />
              <Gauge value={100} label="Network Sync" variant="success" />
            </div>
          </Card>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-muted" />
          <H3>API Reference</H3>
        </div>
        <Card className="overflow-hidden border-border bg-foreground/[0.02]">
          <div className="p-6 border-b border-border/50 bg-foreground/[0.03]">
            <span className="text-xs font-mono font-bold uppercase tracking-widest">
              Progress_Props
            </span>
          </div>
          <Table variant="technical">
            <TableHeader>
              <TableRow className="bg-foreground/[0.03] hover:bg-foreground/[0.03]">
                <TableHead className="text-foreground uppercase tracking-widest">
                  Prop
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Type
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Default
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  value
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  number
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  0
                </TableCell>
                <TableCell className="text-muted/70">
                  Current progress value.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  variant
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "default" | "technical" | "danger" | "success"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "default"
                </TableCell>
                <TableCell className="text-muted/70">
                  Visual mapping of the telemetry status.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-muted" />
          <H3>Usage</H3>
        </div>
        <UsageBlock
          code={`<Progress value={65} label="System Load" showLabel variant="technical" />\n\n<Gauge value={42} size={150} variant="success" label="Signal Strength" />`}
        />
      </section>
    </div>
  );
}
