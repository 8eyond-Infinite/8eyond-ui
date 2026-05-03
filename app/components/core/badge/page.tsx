"use client";

import * as React from "react";
import {
  Badge,
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
import { Shield, Zap, Info, AlertTriangle, CheckCircle } from "lucide-react";

export default function BadgeDoc() {
  const scalingSizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const variants = [
    "default",
    "secondary",
    "outline",
    "destructive",
    "success",
    "warning",
  ] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Badge</H1>
        <Lead>
          A compact semantic indicator for state classification. Engineered for
          rapid visual parsing within high-density data environments.
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

        <div className="p-12 rounded-sm border border-white/5 bg-zinc-900/20 relative overflow-hidden min-h-[300px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 w-full max-w-2xl mx-auto">
            <Card className="p-8 bg-black/40 border-white/10 space-y-8">
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Badge variant="success" dot pulse>
                  System Stable
                </Badge>
                <Badge variant="destructive" dot pulse>
                  Critical Failure
                </Badge>
                <Badge variant="warning" dot pulse>
                  Thermal Alert
                </Badge>
                <Badge variant="outline">Unverified Node</Badge>
                <Badge variant="secondary">Archived Log</Badge>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-zinc-500">
                      <Shield size={14} />
                    </div>
                    <span className="text-xs font-mono">
                      Kernel Protection System
                    </span>
                  </div>
                  <Badge variant="success" size="sm">
                    Active
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-zinc-500">
                      <Zap size={14} />
                    </div>
                    <span className="text-xs font-mono">Energy Grid Sync</span>
                  </div>
                  <Badge variant="warning" size="sm">
                    98% Peak
                  </Badge>
                </div>
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
                Variants
              </Muted>
            </div>
            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-wrap gap-8">
              {variants.map((v) => (
                <div key={v} className="space-y-4">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-tighter opacity-50 block border-b border-white/5 pb-1">
                    {v}
                  </span>
                  <div className="flex items-center gap-3">
                    <Badge variant={v}>{v}</Badge>
                    <Badge
                      variant={v}
                      dot
                      pulse={v === "success" || v === "destructive"}
                    >
                      Status
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-zinc-800" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scaling
              </Muted>
            </div>
            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-wrap items-center justify-around gap-12">
              {scalingSizes.map((size) => (
                <div key={size} className="flex flex-col items-center gap-4">
                  <span className="text-[10px] font-mono text-zinc-400 font-bold">
                    {size.toUpperCase()}
                  </span>
                  <div className="flex items-center justify-center min-w-[80px]">
                    <Badge size={size}>Badge Label</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-zinc-800" />
            <H3>API Reference</H3>
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
                <TableCell className="font-mono text-white">variant</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "default" | "secondary" | "outline" | "destructive" |
                  "success" | "warning"
                </TableCell>
                <TableCell className="font-mono text-[12px]">
                  "default"
                </TableCell>
                <TableCell>
                  Semantic classification for visual encoding.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">size</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  Dimensional scale for information density.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">dot</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>
                  Injects a status indicator dot into the artifact.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">pulse</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>
                  Adds an operational pulse animation to the status dot.
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
          <div className="relative p-8 bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto flex items-center justify-between">
            <code className="text-zinc-400 group-hover:text-white transition-colors duration-500 whitespace-pre">
              {`<Badge variant="success" dot pulse>\n  System Stable\n</Badge>`}
            </code>
            <CopyButton
              value={`<Badge variant="success" dot pulse>\n  System Stable\n</Badge>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
