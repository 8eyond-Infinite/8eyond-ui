"use client";

import * as React from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button,
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
import { UsageBlock } from "@/components/docs/UsageBlock";
import { Info, Cpu, Shield, Zap, Terminal } from "lucide-react";

export default function TooltipDoc() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Tooltip</H1>
        <Lead>
          A precision intelligence artifact for micro-data disclosure.
          Engineered for contextual clarity without architectural interruption.
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

        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden min-h-[400px] flex items-center justify-center transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Top_Node
                </Muted>
              </div>
              <Tooltip position="top">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-border bg-background/40 hover:bg-background/60 transition-colors">
                    <Cpu size={20} className="text-muted" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>KERNEL_VERSION: 0.9.8.ALPHA</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Right_Link
                </Muted>
              </div>
              <Tooltip position="right">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-border bg-background/40 hover:bg-background/60 transition-colors">
                    <Zap size={20} className="text-accent" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>POWER_SYNC: ACTIVE_99%</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Bottom_Sec
                </Muted>
              </div>
              <Tooltip position="bottom">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-border bg-background/40 hover:bg-background/60 transition-colors">
                    <Shield size={20} className="text-blue-500" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>FIREWALL: ENFORCED</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Left_Access
                </Muted>
              </div>
              <Tooltip position="left">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-border bg-background/40 hover:bg-background/60 transition-colors">
                    <Terminal size={20} className="text-foreground/70" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>CMD_ACCESS: GRANTED</TooltipContent>
              </Tooltip>
            </div>
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

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-border" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Variants
              </Muted>
            </div>
            <Card className="p-8 border-border bg-foreground/[0.02] flex items-center justify-center gap-8">
              <Tooltip position="top">
                <TooltipTrigger>
                  <Button variant="secondary" size="sm">
                    Hover_For_Status
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="bg-accent text-black border-accent">
                  SYSTEM_READY_FOR_DEPLOYMENT
                </TooltipContent>
              </Tooltip>

              <Tooltip position="top" delay={0}>
                <TooltipTrigger>
                  <div className="flex items-center gap-2 text-muted hover:text-foreground transition-colors cursor-help">
                    <Info size={14} />
                    <span className="text-xs font-mono">Instant_Feedback</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Zero delay protocol initialized.
                </TooltipContent>
              </Tooltip>
            </Card>
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
                  position
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "top" | "bottom" | "left" | "right"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "top"
                </TableCell>
                <TableCell className="text-muted/70">
                  Anchor orientation relative to the trigger element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  delay
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  number
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  200
                </TableCell>
                <TableCell className="text-muted/70">
                  Milliseconds to wait before revealing intelligence.
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
          code={`<TooltipProvider>\n  <Tooltip position="top" delay={300}>\n    <TooltipTrigger>\n      <Button>Trigger_Link</Button>\n    </TooltipTrigger>\n    <TooltipContent>\n      Data disclosure payload here.\n    </TooltipContent>\n  </Tooltip>\n</TooltipProvider>`}
        />
      </section>
    </div>
  );
}
