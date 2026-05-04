"use client";

import * as React from "react";
import {
  ScrollArea,
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
  Separator,
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function ScrollAreaDoc() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Scroll Area</H1>
        <Lead>
          Custom-styled viewport artifacts for industrial data containment.
          Engineered for high-fidelity aesthetics with minimal visual friction.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-accent" />
          <H3>Execution</H3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vertical Scroll */}
          <Card className="p-8 space-y-4 bg-foreground/[0.02]">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
              Vertical Scrolling
            </div>
            <ScrollArea className="h-72 w-full rounded-sm border border-border bg-background p-4">
              <div className="space-y-4">
                <H3>System Protocols</H3>
                <Muted className="text-[11px] leading-relaxed uppercase font-mono">
                  Initializing secure terminal link... Link established.
                  clearance level archon confirmed. Retrieving architectural
                  schematics for sector 7g. Warning: containment breach detected
                  in cooling manifold 02. Automated suppression system
                  initialized. Pressure stabilizing... System stable. awaiting
                  operator instruction.
                </Muted>
                <Separator />
                {tags.map((tag) => (
                  <div
                    key={tag}
                    className="text-[11px] font-mono py-2 border-b border-border/30 last:border-0 flex justify-between"
                  >
                    <span>{tag}</span>
                    <span className="text-emerald-500/50">STABLE</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Horizontal Scroll */}
          <Card className="p-8 space-y-4 bg-foreground/[0.02]">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
              Horizontal Scrolling
            </div>
            <ScrollArea
              orientation="horizontal"
              className="w-full rounded-sm border border-border bg-background p-4"
            >
              <div className="flex gap-4 pb-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div
                    key={i}
                    className="shrink-0 w-40 h-40 rounded-sm border border-border bg-foreground/[0.02] flex items-center justify-center relative group"
                  >
                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-mono text-muted uppercase">
                      Sector 0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollArea>
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
                  orientation
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "vertical" | "horizontal" | "both"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "vertical"
                </TableCell>
                <TableCell className="text-muted/70">
                  Axis of allowable content overflow.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  scrollbarSize
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  number
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  4
                </TableCell>
                <TableCell className="text-muted/70">
                  Dimension of the scrollbar in pixels.
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
          code={`<ScrollArea className="h-72 w-full border border-border p-4">\n  {/* High-density content here */}\n</ScrollArea>`}
        />
      </section>
    </div>
  );
}
