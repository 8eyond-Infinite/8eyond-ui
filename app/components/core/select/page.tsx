"use client";

import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectSeparator,
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
import { Cpu, Shield, Database, Globe, Layers } from "lucide-react";

export default function SelectDoc() {
  const [protocol, setProtocol] = React.useState("NEURAL_LINK");
  const [region, setRegion] = React.useState("NEO_TOKYO");

  const scalingSizes = ["xs", "sm", "md", "lg", "xl"] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Select</H1>
        <Lead>
          A high-fidelity selection artifact for navigating complex state
          matrices. Engineered for precision and rapid operational switching.
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

        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden min-h-[400px] transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-md mx-auto space-y-12">
            <div className="space-y-6">
              <div className="flex flex-col gap-2 px-1">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-border" />
                  <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                    Variants
                  </Muted>
                </div>
                <span className="text-[10px] font-mono text-accent">
                  ID: {protocol}
                </span>
              </div>
              <Select value={protocol} onValueChange={setProtocol}>
                <SelectTrigger placeholder="Choose Protocol" />
                <SelectContent>
                  <SelectItem value="NEURAL_LINK">Neural_Link_V4</SelectItem>
                  <SelectItem value="VOID_SIGNAL">
                    Void_Signal_Static
                  </SelectItem>
                  <SelectItem value="QUANTUM_CORE">
                    Quantum_Core_Alpha
                  </SelectItem>
                  <SelectSeparator />
                  <SelectItem value="DEBUG_MODE">
                    Debug_Protocol_Root
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Geo_Node_Mapping
                </Muted>
              </div>
              <Card className="p-8 bg-background/40 border-border flex flex-col gap-4">
                <Select value={region} onValueChange={setRegion} size="sm">
                  <SelectTrigger className="bg-transparent" />
                  <SelectContent>
                    <SelectItem value="NEO_TOKYO">Neo_Tokyo_Sector</SelectItem>
                    <SelectItem value="ORBITAL_STATION">
                      Orbital_Station_7
                    </SelectItem>
                    <SelectItem value="DEEP_CORE">
                      Deep_Core_Facility
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted italic">Active_Zone:</span>
                  <span className="text-muted/60">{region}.ZONE_LOCKED</span>
                </div>
              </Card>
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

        <div className="space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-border" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scaling
              </Muted>
            </div>
            <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] grid grid-cols-1 md:grid-cols-2 gap-8 items-end transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
              {scalingSizes.map((size) => (
                <div key={size} className="space-y-2">
                  <span className="text-[9px] font-mono text-muted uppercase">
                    {size}_scale
                  </span>
                  <Select value="OPTION" onValueChange={() => {}} size={size}>
                    <SelectTrigger />
                    <SelectContent>
                      <SelectItem value="OPTION">
                        Operational_Standard
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
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
                  Mechanical scale of the trigger and list items.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  value
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px]">-</TableCell>
                <TableCell>
                  The currently active identifier in the matrix.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  onValueChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
                  (value: string) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Triggered when a new operational state is selected.
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
          code={`<Select value={val} onValueChange={setVal}>\n  <SelectTrigger placeholder="Protocol..." />\n  <SelectContent>\n    <SelectItem value="A">Alpha_Node</SelectItem>\n    <SelectItem value="B">Beta_Link</SelectItem>\n  </SelectContent>\n</Select>`}
        />
      </section>
    </div>
  );
}
