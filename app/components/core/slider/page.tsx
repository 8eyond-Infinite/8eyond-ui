"use client";

import * as React from "react";
import {
  Slider,
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
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function SliderDoc() {
  const [power, setPower] = React.useState(45);
  const [flow, setFlow] = React.useState(72);

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Slider</H1>
        <Lead>
          Precision mixing valves for parameter control. Built with a heavy
          industrial aesthetic, featuring integrated tick marks and
          high-fidelity dragging telemetry.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-accent" />
          <H3>Execution</H3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Interactive Demo */}
          <Card className="p-10 space-y-12">
            <Slider
              label="Core Power Output"
              unit="KW"
              value={power}
              onChange={setPower}
              min={0}
              max={100}
            />

            <Slider
              label="Liquid Coolant Flow"
              unit="L/s"
              value={flow}
              onChange={setFlow}
              min={0}
              max={250}
              step={0.5}
            />
          </Card>

          {/* Visual States */}
          <Card className="p-10 space-y-8 bg-foreground/[0.02]">
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                State Verification
              </div>
              <Slider label="Active State" defaultValue={30} />
              <Slider label="Disabled State" defaultValue={60} disabled />
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
                  null
                </TableCell>
                <TableCell className="text-muted/70">
                  Controlled value of the valve.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  label
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  null
                </TableCell>
                <TableCell className="text-muted/70">
                  Technical descriptor for the parameter.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  unit
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  ""
                </TableCell>
                <TableCell className="text-muted/70">
                  Measurement unit for value display.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  step
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  number
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  1
                </TableCell>
                <TableCell className="text-muted/70">
                  Granularity of value transition.
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
          code={`const [value, setValue] = React.useState(50);\n\n<Slider \n  label="Input Gain" \n  unit="dB" \n  value={value} \n  onChange={setValue} \n  min={-60} \n  max={12} \n  step={0.1} \n/>`}
        />
      </section>
    </div>
  );
}
