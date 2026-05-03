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
  Typography,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { CopyButton } from "@/components/docs/CopyButton";
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
          label: "Standard_Input",
          placeholder: "Enter_Data...",
        },
        {
          id: "error",
          label: "Error_State",
          placeholder: "Invalid_Sequence...",
          error: true,
        },
      ],
    },
    {
      label: "Technical_Addons",
      items: [
        {
          id: "prefix",
          label: "Command_Prefix",
          placeholder: "systemctl_start...",
          leftIcon: <Terminal size={14} />,
        },
        {
          id: "suffix",
          label: "Search_Suffix",
          placeholder: "Find_Asset...",
          rightIcon: <Search size={14} />,
        },
      ],
    },
    {
      label: "Scaling",
      items: [
        { id: "xs", label: "XS", size: "xs", placeholder: "EXTREME_DENSITY" },
        { id: "sm", label: "SM", size: "sm", placeholder: "COMPACT_MODE" },
        { id: "md", label: "MD", size: "md", placeholder: "STANDARD_VIEW" },
        { id: "lg", label: "LG", size: "lg", placeholder: "FOCUS_MODE" },
        { id: "xl", label: "XL", size: "xl", placeholder: "HIGH_FIDELITY" },
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
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="p-12 rounded-sm border border-white/5 bg-zinc-900/20 flex flex-col items-center justify-center gap-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px]" />

          <div className="relative z-10 w-full max-w-sm space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="access-key"
                  className="text-[10px] uppercase tracking-widest text-zinc-500"
                >
                  Secure_Access_Key
                </Label>
                {isError && (
                  <span className="text-[9px] font-mono text-red-500 uppercase animate-pulse flex items-center gap-1">
                    <ShieldAlert size={10} /> Length_Inadequate
                  </span>
                )}
              </div>
              <Input
                id="access-key"
                type="password"
                placeholder="MIN_8_CHARACTERS"
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
          {inputExamples.map((group) => (
            <div key={group.label} className="space-y-6">
              <Typography
                variant="large"
                className="text-sm tracking-tight text-zinc-500"
              >
                {group.label.replace("_", " ")}
              </Typography>

              <div
                className={cn(
                  "p-10 rounded-sm border border-white/5 bg-white/[0.01]",
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
                      className="text-[10px] uppercase tracking-widest text-zinc-600"
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
                  Structural dimensions of the input terminal.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">leftIcon</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  React.ReactNode
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Icon or element to render on the left side.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  rightIcon
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500 text-pretty">
                  React.ReactNode
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Icon or element to render on the right side.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">error</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
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
              {`<Input 
  leftIcon={<Terminal size={14} />} 
  placeholder="Enter_Command..." 
  error={isInvalid}
/>`}
            </code>
            <CopyButton
              value={`<Input leftIcon={<Terminal size={14} />} placeholder="Enter_Command..." />`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
