"use client";

import * as React from "react";
import {
  Calendar,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  H1,
  H3,
  Lead,
  Badge,
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function CalendarDoc() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-24 pb-32">
      <div className="space-y-6">
        <H1>Calendar</H1>
        <Lead>
          A high-fidelity chronological tracker. Optimized for temporal logs,
          system scheduling, and alchemical timelines.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>Execution</H3>
          </div>
          <Badge variant="outline" size="xs">
            Chronos_Core
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <Calendar
              selected={date}
              onSelect={setDate}
              className="mx-auto md:mx-0 border-border"
            />
            <div className="p-4 rounded-sm border border-border bg-foreground/[0.02] font-mono text-[10px] text-muted uppercase tracking-widest text-center">
              Selected_Date: {date?.toLocaleDateString() || "None"}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest italic">
                Technical_Blueprint
              </h4>
              <p className="text-sm text-muted/80 leading-relaxed">
                The calendar artifact is built with zero external dependencies,
                leveraging native JS Date logic combined with a high-density
                industrial grid layout.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">
                Technical Variant
              </h4>
              <Calendar
                variant="technical"
                className="scale-90 origin-top-left opacity-80"
              />
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

        <Card className="p-0 overflow-hidden border-border bg-foreground/[0.02]">
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
                  selected
                </TableCell>
                <TableCell className="text-[10px] font-mono text-accent">
                  Date
                </TableCell>
                <TableCell className="text-muted">—</TableCell>
                <TableCell className="text-muted/70">
                  The currently focused/selected date artifact.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  onSelect
                </TableCell>
                <TableCell className="text-[10px] font-mono text-accent">
                  (date: Date) =&gt; void
                </TableCell>
                <TableCell className="text-muted">—</TableCell>
                <TableCell className="text-muted/70">
                  Catalyst function triggered upon date selection.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  variant
                </TableCell>
                <TableCell className="text-[10px] font-mono text-accent">
                  &quot;default&quot; | &quot;technical&quot;
                </TableCell>
                <TableCell className="text-muted">
                  &quot;default&quot;
                </TableCell>
                <TableCell className="text-muted/70">
                  Visual protocol for the grid architecture.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  className
                </TableCell>
                <TableCell className="text-[10px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="text-muted">—</TableCell>
                <TableCell className="text-muted/70">
                  Additional CSS overrides for the container.
                </TableCell>
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
          code={`const [date, setDate] = React.useState(new Date())\n\n<Calendar\n  selected={date}\n  onSelect={setDate}\n  variant="technical"\n/>`}
        />
      </section>
    </div>
  );
}
