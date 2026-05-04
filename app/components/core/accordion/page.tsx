"use client";

import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
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

export default function AccordionDoc() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Accordion</H1>
        <Lead>
          A vertically stacked set of interactive headings that each reveal a
          section of content. Optimized for complex settings, technical FAQs,
          and high-density information disclosure.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">Core</span>
        </div>

        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden min-h-[400px] flex items-center justify-center transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-xl mx-auto">
            <Accordion type="single" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger>Kernel_Access_Protocols</AccordionTrigger>
                <AccordionContent>
                  Multi-layer authentication is required for all kernel-level
                  operations. This includes biometric verification and secure
                  hardware tokens. Access attempts are monitored in real-time by
                  the central security node.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Transmission_Encryption</AccordionTrigger>
                <AccordionContent>
                  All data streams between network nodes utilize high-entropy
                  RSA-4096 and AES-256-GCM encryption. Key rotation occurs
                  automatically every 3600 seconds to ensure cryptographic
                  integrity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>System_Redundancy</AccordionTrigger>
                <AccordionContent>
                  The architectural matrix supports triple-modular redundancy
                  (TMR). In the event of a primary node failure, secondary and
                  tertiary failover systems activate within 15 milliseconds.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                Variants
              </Muted>
            </div>
            <div className="p-10 rounded-sm border border-border bg-foreground/[0.01] grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
              <div className="space-y-4">
                <Muted className="text-[9px] uppercase tracking-tighter opacity-50 block border-b border-border pb-1">
                  Single_Mode
                </Muted>
                <Accordion type="single">
                  <AccordionItem value="s1">
                    <AccordionTrigger>Protocol_Alpha</AccordionTrigger>
                    <AccordionContent>
                      Content revealed on trigger.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="s2">
                    <AccordionTrigger>Protocol_Beta</AccordionTrigger>
                    <AccordionContent>
                      Content revealed on trigger.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="space-y-4">
                <Muted className="text-[9px] uppercase tracking-tighter opacity-50 block border-b border-border pb-1">
                  Multiple_Mode
                </Muted>
                <Accordion type="multiple">
                  <AccordionItem value="m1">
                    <AccordionTrigger>Layer_01</AccordionTrigger>
                    <AccordionContent>
                      Supports parallel expansion.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="m2">
                    <AccordionTrigger>Layer_02</AccordionTrigger>
                    <AccordionContent>
                      Supports parallel expansion.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                  type
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "single" | "multiple"
                </TableCell>
                <TableCell className="font-mono text-[12px]">
                  "single"
                </TableCell>
                <TableCell>
                  Determines if one or multiple items can be open at once.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  defaultValue
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  string | string[]
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>Initially expanded item value(s).</TableCell>
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
          code={`<Accordion type="single">\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Header</AccordionTrigger>\n    <AccordionContent>\n      Payload_Data\n    </AccordionContent>\n  </AccordionItem>\n</Accordion>`}
        />
      </section>
    </div>
  );
}
