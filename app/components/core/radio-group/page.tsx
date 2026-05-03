"use client";

import * as React from "react";
import {
  RadioGroup,
  RadioGroupItem,
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
import { CopyButton } from "@/components/docs/CopyButton";
import { Cpu, Shield, Zap, Flame, Snowflake } from "lucide-react";

export default function RadioGroupDoc() {
  const [protocol, setProtocol] = React.useState("BALANCED");

  const scalingSizes = ["xs", "sm", "md", "lg", "xl"] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Radio Group</H1>
        <Lead>
          A set of mutually exclusive selection artifacts. Engineered for
          critical system parameters and binary-branching decision matrices.
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

          <div className="relative z-10 w-full max-w-sm space-y-8">
            <div className="space-y-2 px-1">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Variants
                </Muted>
              </div>
              <p className="text-[10px] font-mono text-white uppercase tracking-tighter">
                Current: {protocol}_PROTOCOL
              </p>
            </div>

            <RadioGroup
              value={protocol}
              onValueChange={setProtocol}
              className="gap-4"
            >
              <Card
                className={cn(
                  "p-4 flex items-center justify-between transition-all cursor-pointer border-white/5 bg-black/20 hover:bg-black/40",
                  protocol === "PERFORMANCE" &&
                    "border-white/20 bg-white/[0.02]"
                )}
                onClick={() => setProtocol("PERFORMANCE")}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-white">
                    <Flame size={14} />
                  </div>
                  <div>
                    <Label htmlFor="perf" className="cursor-pointer">
                      High_Performance
                    </Label>
                    <Muted className="text-[10px]">
                      Maximize clock speed at expense of thermal stability.
                    </Muted>
                  </div>
                </div>
                <RadioGroupItem value="PERFORMANCE" id="perf" />
              </Card>

              <Card
                className={cn(
                  "p-4 flex items-center justify-between transition-all cursor-pointer border-white/5 bg-black/20 hover:bg-black/40",
                  protocol === "BALANCED" && "border-white/20 bg-white/[0.02]"
                )}
                onClick={() => setProtocol("BALANCED")}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-zinc-500">
                    <Zap size={14} />
                  </div>
                  <div>
                    <Label htmlFor="bal" className="cursor-pointer">
                      Balanced_Optimization
                    </Label>
                    <Muted className="text-[10px]">
                      Standard operational parameters for general tasking.
                    </Muted>
                  </div>
                </div>
                <RadioGroupItem value="BALANCED" id="bal" />
              </Card>

              <Card
                className={cn(
                  "p-4 flex items-center justify-between transition-all cursor-pointer border-white/5 bg-black/20 hover:bg-black/40",
                  protocol === "EFFICIENCY" && "border-white/20 bg-white/[0.02]"
                )}
                onClick={() => setProtocol("EFFICIENCY")}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-sm bg-zinc-950 border border-white/5 text-blue-500">
                    <Snowflake size={14} />
                  </div>
                  <div>
                    <Label htmlFor="eff" className="cursor-pointer">
                      Cryogenic_Efficiency
                    </Label>
                    <Muted className="text-[10px]">
                      Minimal energy consumption for long-duration standby.
                    </Muted>
                  </div>
                </div>
                <RadioGroupItem value="EFFICIENCY" id="eff" />
              </Card>
            </RadioGroup>
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
            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-col gap-10">
              {scalingSizes.map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <RadioGroup value="A" size={size}>
                    <RadioGroupItem value="A" />
                  </RadioGroup>
                  <Label size={size} className="uppercase tracking-widest">
                    {size}_Scale_Operational
                  </Label>
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
                <TableCell className="font-mono text-white">size</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "xs" | "sm" | "md" | "lg" | "xl"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>
                  Mechanical scale of the radio control unit.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">value</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  string
                </TableCell>
                <TableCell className="font-mono text-[12px]">-</TableCell>
                <TableCell>The currently active operational mode.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  onValueChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  (value: string) =&gt; void
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Triggered when a mutation in state occurs.
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
              {`<RadioGroup value={val} onValueChange={setVal}>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="A" id="a" />
    <Label htmlFor="a">Option_Alpha</Label>
  </div>
</RadioGroup>`}
            </code>
            <CopyButton
              value={`<RadioGroup value={val} onValueChange={setVal}>\n  <div className="flex items-center gap-2">\n    <RadioGroupItem value="A" id="a" />\n    <Label htmlFor="a">Option_Alpha</Label>\n  </div>\n</RadioGroup>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
