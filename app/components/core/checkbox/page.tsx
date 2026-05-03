"use client";

import * as React from "react";
import {
  Checkbox,
  Label,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/docs/CopyButton";
import { ShieldCheck, Activity, Database, Lock } from "lucide-react";

export default function CheckboxDoc() {
  const [selectedProtocols, setSelectedProtocols] = React.useState<string[]>([
    "P-01",
  ]);

  const protocols = [
    { id: "P-01", label: "Encryption_Module_X8", icon: <Lock size={12} /> },
    {
      id: "P-02",
      label: "Realtime_Data_Ingestion",
      icon: <Activity size={12} />,
    },
    {
      id: "P-03",
      label: "Structural_Backup_Sync",
      icon: <Database size={12} />,
    },
    {
      id: "P-04",
      label: "Hardened_Kernel_Protection",
      icon: <ShieldCheck size={12} />,
    },
  ];

  const toggleProtocol = (id: string) => {
    setSelectedProtocols((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const scalingExamples = [
    { size: "xs", label: "EXTREME_DENSITY" },
    { size: "sm", label: "COMPACT_LOGIC" },
    { size: "md", label: "STANDARD_VIEW" },
    { size: "lg", label: "FOCUS_MODE" },
    { size: "xl", label: "HIGH_FIDELITY" },
  ] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Checkbox</H1>
        <Lead>
          A binary logic gate for multi-state selection. Engineered for
          mechanical precision and structural clarity.
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

        <div className="p-12 rounded-sm border border-white/5 bg-zinc-900/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px]" />

          <div className="relative z-10 w-full max-w-md mx-auto space-y-6">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Active_Protocols
                </Muted>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-accent shadow-glow rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-accent shadow-glow rounded-full animate-pulse delay-75" />
              </div>
            </div>

            <Card className="p-6 space-y-4 bg-black/40 border-white/10">
              {protocols.map((protocol) => (
                <div
                  key={protocol.id}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-sm border transition-all duration-500 cursor-pointer group",
                    selectedProtocols.includes(protocol.id)
                      ? "bg-white/[0.03] border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                      : "bg-transparent border-transparent hover:bg-white/[0.01]"
                  )}
                  onClick={() => toggleProtocol(protocol.id)}
                >
                  <div className="flex items-center gap-4">
                    <Checkbox
                      id={protocol.id}
                      checked={selectedProtocols.includes(protocol.id)}
                    />
                    <Label
                      htmlFor={protocol.id}
                      className={cn(
                        "transition-colors duration-500",
                        selectedProtocols.includes(protocol.id)
                          ? "text-white"
                          : "text-zinc-500"
                      )}
                    >
                      {protocol.label}
                    </Label>
                  </div>
                  <div
                    className={cn(
                      "transition-colors duration-500",
                      selectedProtocols.includes(protocol.id)
                        ? "text-white/40"
                        : "text-zinc-800"
                    )}
                  >
                    {protocol.icon}
                  </div>
                </div>
              ))}
            </Card>
            <Muted className="text-center text-[10px] italic opacity-40">
              Select protocols to synchronize the architectural kernel.
            </Muted>
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
                Scaling
              </Muted>
            </div>

            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-col gap-8">
              {scalingExamples.map((item) => (
                <div key={item.size} className="flex items-center gap-4">
                  <Checkbox
                    id={`size-${item.size}`}
                    size={item.size}
                    defaultChecked
                  />
                  <Label htmlFor={`size-${item.size}`} size={item.size}>
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States_Unchecked
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex items-center gap-4">
                <Checkbox id="un-1" />
                <Label htmlFor="un-1">Inactive_Module</Label>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States_Disabled
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex items-center gap-4">
                <Checkbox id="dis-1" disabled defaultChecked />
                <Label htmlFor="dis-1" className="opacity-50">
                  Hardened_Protection
                </Label>
              </div>
            </div>
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
                <TableCell className="font-mono text-white">size</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  Dimensional scale for industrial alignment.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">checked</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>The controlled selection state.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  onCheckedChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  (checked: boolean) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>Protocol triggered upon selection change.</TableCell>
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
              {`<div className="flex items-center gap-2">
  <Checkbox id="id" size="sm" />
  <Label htmlFor="id" size="sm">Accept_Logic</Label>
</div>`}
            </code>
            <CopyButton
              value={`<div className="flex items-center gap-2">\n  <Checkbox id="id" size="sm" />\n  <Label htmlFor="id" size="sm">Accept_Logic</Label>\n</div>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
