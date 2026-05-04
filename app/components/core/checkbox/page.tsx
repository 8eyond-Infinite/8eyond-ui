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
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { UsageBlock } from "@/components/docs/UsageBlock";
import { ShieldCheck, Activity, Database, Lock } from "lucide-react";

export default function CheckboxDoc() {
  const [selectedProtocols, setSelectedProtocols] = React.useState<string[]>([
    "P-01",
  ]);

  const protocols = [
    { id: "P-01", label: "Encryption Module X8", icon: <Lock size={12} /> },
    {
      id: "P-02",
      label: "Realtime Data Ingestion",
      icon: <Activity size={12} />,
    },
    {
      id: "P-03",
      label: "Structural Backup Sync",
      icon: <Database size={12} />,
    },
    {
      id: "P-04",
      label: "Hardened Kernel Protection",
      icon: <ShieldCheck size={12} />,
    },
  ];

  const toggleProtocol = (id: string) => {
    setSelectedProtocols((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const scalingExamples = [
    { size: "xs", label: "EXTREME DENSITY" },
    { size: "sm", label: "COMPACT LOGIC" },
    { size: "md", label: "STANDARD VIEW" },
    { size: "lg", label: "FOCUS MODE" },
    { size: "xl", label: "HIGH FIDELITY" },
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
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-md mx-auto space-y-6">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Active Protocols
                </Muted>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
                <div className="w-1 h-1 bg-accent rounded-full animate-pulse delay-75" />
              </div>
            </div>

            <Card className="p-6 space-y-4 bg-background/40 border-border">
              {protocols.map((protocol) => (
                <div
                  key={protocol.id}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-sm border transition-all duration-500 cursor-pointer group",
                    selectedProtocols.includes(protocol.id)
                      ? "bg-foreground/[0.03] border-foreground/10"
                      : "bg-transparent border-transparent hover:bg-foreground/[0.01]"
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
                          ? "text-foreground"
                          : "text-muted"
                      )}
                    >
                      {protocol.label}
                    </Label>
                  </div>
                  <div
                    className={cn(
                      "transition-colors duration-500",
                      selectedProtocols.includes(protocol.id)
                        ? "text-foreground/40"
                        : "text-muted"
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
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Preview</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-border" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scaling
              </Muted>
            </div>

            <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] flex flex-col gap-8 transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
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
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] flex items-center gap-4 transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
                <Checkbox id="un-1" />
                <Label htmlFor="un-1">Inactive Module</Label>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  States Disabled
                </Muted>
              </div>
              <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] flex items-center gap-4 transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
                <Checkbox id="dis-1" disabled defaultChecked />
                <Label htmlFor="dis-1" className="opacity-50">
                  Hardened Protection
                </Label>
              </div>
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
                  size
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  Dimensional scale for industrial alignment.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  checked
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>The controlled selection state.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  onCheckedChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
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
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Usage</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>
        <UsageBlock
          code={`<div className="flex items-center gap-2">\n  <Checkbox id="id" size="sm" />\n  <Label htmlFor="id" size="sm">Accept_Logic</Label>\n</div>`}
        />
      </section>
    </div>
  );
}
