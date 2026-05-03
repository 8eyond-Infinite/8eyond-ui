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
import { CopyButton } from "@/components/docs/CopyButton";
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
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="p-12 rounded-sm border border-white/5 bg-zinc-900/20 relative overflow-hidden min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Top_Node
                </Muted>
              </div>
              <Tooltip position="top">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-white/10 bg-black/40 hover:bg-black/60 transition-colors">
                    <Cpu size={20} className="text-zinc-500" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>KERNEL_VERSION: 0.9.8.ALPHA</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Right_Link
                </Muted>
              </div>
              <Tooltip position="right">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-white/10 bg-black/40 hover:bg-black/60 transition-colors">
                    <Zap size={20} className="text-accent" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>POWER_SYNC: ACTIVE_99%</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Bottom_Sec
                </Muted>
              </div>
              <Tooltip position="bottom">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-white/10 bg-black/40 hover:bg-black/60 transition-colors">
                    <Shield size={20} className="text-blue-500" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>FIREWALL: ENFORCED</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Left_Access
                </Muted>
              </div>
              <Tooltip position="left">
                <TooltipTrigger>
                  <div className="p-4 rounded-sm border border-white/10 bg-black/40 hover:bg-black/60 transition-colors">
                    <Terminal size={20} className="text-zinc-300" />
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
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-500" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-zinc-800" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Variants
              </Muted>
            </div>
            <Card className="p-8 border-white/5 bg-black/20 flex items-center justify-center gap-8">
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
                  <div className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors cursor-help">
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
                <TableCell className="font-mono text-white">position</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "top" | "bottom" | "left" | "right"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"top"</TableCell>
                <TableCell>
                  Anchor orientation relative to the trigger element.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">delay</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  number
                </TableCell>
                <TableCell className="font-mono text-[12px]">200</TableCell>
                <TableCell>
                  Milliseconds to wait before revealing intelligence.
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
          <div className="relative p-8 bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto">
            <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
              {`<TooltipProvider>
  <Tooltip position="top" delay={300}>
    <TooltipTrigger>
      <Button>Trigger_Link</Button>
    </TooltipTrigger>
    <TooltipContent>
      Data disclosure payload here.
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
            </code>
            <div className="absolute top-8 right-8">
              <CopyButton
                value={`<TooltipProvider>\n  <Tooltip position="top" delay={300}>\n    <TooltipTrigger>\n      <Button>Trigger_Link</Button>\n    </TooltipTrigger>\n    <TooltipContent>\n      Data disclosure payload here.\n    </TooltipContent>\n  </Tooltip>\n</TooltipProvider>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
