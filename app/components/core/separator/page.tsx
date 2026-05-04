"use client";

import * as React from "react";
import { Separator, Card, H1, H3, Lead, Badge } from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function SeparatorDoc() {
  return (
    <div className="space-y-24 pb-32">
      <div className="space-y-6">
        <H1>Separator</H1>
        <Lead>
          Industrial-grade dividers for precise visual hierarchy. Supports
          technical variants with alchemical accent notches.
        </Lead>
      </div>

      {/* Variants */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3>Variants</H3>
          </div>
          <Badge variant="outline" size="xs">
            Blueprint Mode
          </Badge>
        </div>

        <div className="space-y-12">
          {/* Horizontal */}
          <Card className="p-12 space-y-8 bg-foreground/[0.02] border-border transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Default_Horizontal
              </h4>
              <Separator />
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono text-muted uppercase tracking-widest">
                Technical_Horizontal
              </h4>
              <Separator variant="technical" />
            </div>
          </Card>

          {/* Vertical */}
          <Card className="p-12 bg-foreground/[0.02] border-border flex flex-col items-center gap-8 transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
            <div className="h-40 flex items-center gap-12">
              <div className="flex flex-col items-center gap-4 h-full">
                <span className="text-[8px] font-mono text-muted uppercase [writing-mode:vertical-lr] rotate-180">
                  Default_V
                </span>
                <Separator orientation="vertical" />
              </div>
              <div className="flex flex-col items-center gap-4 h-full">
                <span className="text-[8px] font-mono text-muted uppercase [writing-mode:vertical-lr] rotate-180">
                  Technical_V
                </span>
                <Separator orientation="vertical" variant="technical" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Usage</H3>
          </div>
        </div>
        <UsageBlock
          code={`<div>\n  <div className="space-y-1">\n    <h4 className="text-sm font-medium leading-none">System Status</h4>\n    <p className="text-sm text-muted-foreground">Operational Protocol</p>\n  </div>\n  <Separator className="my-4" variant="technical" />\n  <div className="flex h-5 items-center space-x-4 text-sm">\n    <div>Kernel</div>\n    <Separator orientation="vertical" />\n    <div>Storage</div>\n    <Separator orientation="vertical" />\n    <div>Network</div>\n  </div>\n</div>`}
        />
      </section>
    </div>
  );
}
