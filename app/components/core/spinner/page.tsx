"use client";

import {
  Spinner,
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

export default function SpinnerDoc() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Spinner</H1>
        <Lead>
          Technical loading artifacts for real-time state indication. Engineered
          with hardware-inspired motion and high-fidelity variants.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-accent" />
          <H3>Execution</H3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Variants */}
          <Card className="p-10 space-y-8 bg-foreground/[0.02]">
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Motion Variants
              </div>
              <div className="flex items-center gap-12">
                <div className="flex flex-col items-center gap-3">
                  <Spinner variant="default" size="lg" />
                  <span className="text-[9px] font-mono text-muted uppercase">
                    Default
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Spinner variant="technical" size="lg" />
                  <span className="text-[9px] font-mono text-muted uppercase">
                    Technical
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Spinner variant="turbine" size="lg" />
                  <span className="text-[9px] font-mono text-muted uppercase">
                    Turbine
                  </span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Spinner variant="dots" size="lg" />
                  <span className="text-[9px] font-mono text-muted uppercase">
                    Dots
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Sizes */}
          <Card className="p-10 space-y-8 bg-foreground/[0.02]">
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Dimension Scales
              </div>
              <div className="flex items-center gap-8">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
              </div>
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
                  variant
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "default" | "technical" | "turbine" | "dots"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "default"
                </TableCell>
                <TableCell className="text-muted/70">
                  Visual animation protocol.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  size
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "md"
                </TableCell>
                <TableCell className="text-muted/70">
                  Dimension scale of the artifact.
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
          code={`<Spinner size="lg" variant="turbine" />\n<Spinner variant="dots" className="text-emerald-500" />`}
        />
      </section>
    </div>
  );
}
