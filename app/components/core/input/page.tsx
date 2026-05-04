"use client";

import * as React from "react";
import {
  Input,
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
import { UsageBlock } from "@/components/docs/UsageBlock";
import { Terminal, Search, ShieldAlert, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InputDoc() {
  const [accessKey, setAccessKey] = React.useState("");
  const isError = accessKey.length > 0 && accessKey.length < 8;

  const inputExamples = [
    {
      label: "Variants",
      items: [
        {
          id: "default",
          label: "Standard Input",
          placeholder: "Enter Data...",
        },
        {
          id: "error",
          label: "Error State",
          placeholder: "Invalid Sequence...",
          error: true,
        },
      ],
    },
    {
      label: "Technical Addons",
      items: [
        {
          id: "prefix",
          label: "Command Prefix",
          placeholder: "systemctl start...",
          leftIcon: <Terminal size={14} />,
        },
        {
          id: "suffix",
          label: "Search Suffix",
          placeholder: "Find Asset...",
          rightIcon: <Search size={14} />,
        },
      ],
    },
    {
      label: "Scaling",
      items: [
        { id: "xs", label: "XS", size: "xs", placeholder: "EXTREME DENSITY" },
        { id: "sm", label: "SM", size: "sm", placeholder: "COMPACT MODE" },
        { id: "md", label: "MD", size: "md", placeholder: "STANDARD VIEW" },
        { id: "lg", label: "LG", size: "lg", placeholder: "FOCUS MODE" },
        { id: "xl", label: "XL", size: "xl", placeholder: "HIGH FIDELITY" },
      ] as const,
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Input</H1>
        <Lead>
          A high-density terminal for data inscription. Optimized for structural
          precision and rapid technical entry.
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

        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] flex flex-col items-center justify-center gap-6 relative overflow-hidden transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-sm space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="access-key"
                  className="text-[10px] uppercase tracking-widest text-muted"
                >
                  Secure Access Key
                </Label>
                {isError && (
                  <span className="text-[9px] font-mono text-red-500 uppercase animate-pulse flex items-center gap-1">
                    <ShieldAlert size={10} /> Length Inadequate
                  </span>
                )}
              </div>
              <Input
                id="access-key"
                type="password"
                placeholder="MIN 8 CHARACTERS"
                value={accessKey}
                onChange={(e) => setAccessKey(e.target.value)}
                error={isError}
                leftIcon={<Fingerprint size={14} />}
              />
              <Muted className="text-[10px] italic opacity-40">
                Input must exceed 8-character complexity threshold.
              </Muted>
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
          {inputExamples.map((group) => (
            <div key={group.label} className="space-y-6">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-border" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  {group.label.replace("_", " ")}
                </Muted>
              </div>

              <div
                className={cn(
                  "p-10 rounded-sm border border-border bg-foreground/[0.01] transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10",
                  group.label === "Scaling"
                    ? "flex flex-col gap-6"
                    : "grid grid-cols-1 md:grid-cols-2 gap-8"
                )}
              >
                {group.items.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      "space-y-3",
                      group.label === "Scaling" && "max-w-md"
                    )}
                  >
                    <Label
                      htmlFor={item.id}
                      className="text-[10px] uppercase tracking-widest text-muted"
                    >
                      {item.label}
                    </Label>
                    <Input {...item} />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
                  Structural dimensions of the input terminal.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  leftIcon
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
                  React.ReactNode
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Icon or element to render on the left side.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  rightIcon
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent text-pretty">
                  React.ReactNode
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Icon or element to render on the right side.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  error
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>Apply technical error visual state.</TableCell>
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
          code={`<Input \n  leftIcon={<Terminal size={14} />} \n  placeholder="Enter Command..." \n  error={isInvalid}\n/>`}
        />
      </section>
    </div>
  );
}
