"use client";

import * as React from "react";
import {
  Avatar,
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

export default function AvatarDoc() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Avatar</H1>
        <Lead>
          Visual identifiers for system operators. Designed with industrial
          precision, featuring status telemetry and high-fidelity technical
          variants.
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
          <Card className="p-8 space-y-8 bg-foreground/[0.02]">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Structural Variants
              </div>
              <div className="flex items-center gap-8">
                <div className="space-y-2 text-center">
                  <Avatar variant="technical" status="online" size="lg" />
                  <div className="text-[9px] font-mono text-muted uppercase">
                    Technical
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <Avatar variant="circle" status="online" size="lg" />
                  <div className="text-[9px] font-mono text-muted uppercase">
                    Circle
                  </div>
                </div>
                <div className="space-y-2 text-center">
                  <Avatar variant="square" status="online" size="lg" />
                  <div className="text-[9px] font-mono text-muted uppercase">
                    Square
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Status Telemetry
              </div>
              <div className="flex items-center gap-6">
                <Avatar status="online" size="md" />
                <Avatar status="away" size="md" />
                <Avatar status="busy" size="md" />
                <Avatar status="offline" size="md" />
              </div>
            </div>
          </Card>

          {/* Sizes */}
          <Card className="p-8 space-y-8 bg-foreground/[0.02]">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Dimension Scales
              </div>
              <div className="flex items-end gap-6">
                <div className="space-y-2 text-center">
                  <Avatar size="xs" />
                  <div className="text-[8px] font-mono text-muted">XS</div>
                </div>
                <div className="space-y-2 text-center">
                  <Avatar size="sm" />
                  <div className="text-[8px] font-mono text-muted">SM</div>
                </div>
                <div className="space-y-2 text-center">
                  <Avatar size="md" />
                  <div className="text-[8px] font-mono text-muted">MD</div>
                </div>
                <div className="space-y-2 text-center">
                  <Avatar size="lg" />
                  <div className="text-[8px] font-mono text-muted">LG</div>
                </div>
                <div className="space-y-2 text-center">
                  <Avatar size="xl" />
                  <div className="text-[8px] font-mono text-muted">XL</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Fallback Logic
              </div>
              <div className="flex items-center gap-6">
                <Avatar fallback="AX" />
                <Avatar alt="Sentinel" />
                <Avatar src="invalid-path" fallback="ER" />
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
                <TableCell className="font-mono text-foreground">src</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  null
                </TableCell>
                <TableCell className="text-muted/70">
                  Source URL of the operator image.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  variant
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
                  "circle" | "square" | "technical"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "technical"
                </TableCell>
                <TableCell className="text-muted/70">
                  Structural shape of the container.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  status
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
                  "online" | "offline" | "away" | "busy"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  null
                </TableCell>
                <TableCell className="text-muted/70">
                  Operational telemetry status indicator.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  size
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "md"
                </TableCell>
                <TableCell className="text-muted/70">
                  Dimension scale of the identifier.
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
          code={`<Avatar \n  src="/path/to/op.jpg" \n  status="online" \n  variant="technical" \n  size="lg" \n/>`}
        />
      </section>
    </div>
  );
}
