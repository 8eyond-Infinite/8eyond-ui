"use client";

import * as React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
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
import { Home, Slash } from "lucide-react";

export default function BreadcrumbDoc() {
  const scalingSizes = ["xs", "sm", "md", "lg", "xl"] as const;

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Breadcrumb</H1>
        <Lead>
          An architectural path indicator. Guides the user through complex
          hierarchical protocols with technical precision.
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

          <div className="relative z-10 w-full max-w-2xl mx-auto space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Kernel_File_System
                </Muted>
              </div>
              <Card className="p-6 bg-black/40 border-white/10">
                <Breadcrumb size="md">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="#"
                        className="flex items-center gap-2"
                      >
                        <Home size={12} /> ROOT
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">
                        CORE_ARCHITECTURE
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">PROTOCOLS_V1</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>DEPLOYMENT_LOGS.EXE</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-1 bg-zinc-800" />
                <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Custom_Separator_Protocol
                </Muted>
              </div>
              <Card className="p-6 bg-black/40 border-white/10">
                <Breadcrumb size="sm">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">8EYOND</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash size={10} className="-rotate-12 opacity-20" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">LAB_RESOURCES</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash size={10} className="-rotate-12 opacity-20" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>NEURAL_ENGINE</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </Card>
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
          <div className="space-y-8">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1 h-1 bg-zinc-800" />
              <Muted className="text-[10px] font-mono uppercase tracking-[0.2em]">
                Scaling
              </Muted>
            </div>

            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] flex flex-col gap-10">
              {scalingSizes.map((size) => (
                <div key={size} className="flex flex-col gap-3">
                  <Muted className="text-[9px] uppercase tracking-[0.3em] font-bold">
                    {size.toUpperCase()}_PATH
                  </Muted>
                  <Breadcrumb size={size}>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">SYSTEM</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">CORE</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>INITIALIZE</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
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
                <TableCell>Overall dimensional scale of the path.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  separator
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  ReactNode
                </TableCell>
                <TableCell className="font-mono text-[12px]">
                  ChevronRight
                </TableCell>
                <TableCell>
                  Custom node used to separate path segments.
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
              {`<Breadcrumb size="sm">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">ROOT</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>ARCHITECT</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
            </code>
            <CopyButton
              value={`<Breadcrumb size="sm">\n  <BreadcrumbList>\n    <BreadcrumbItem>\n      <BreadcrumbLink href="/">ROOT</BreadcrumbLink>\n    </BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem>\n      <BreadcrumbPage>ARCHITECT</BreadcrumbPage>\n    </BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
