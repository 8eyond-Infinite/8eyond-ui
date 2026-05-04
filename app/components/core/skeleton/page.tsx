"use client";

import { Skeleton, Card, H1, H3, Lead } from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";

export default function SkeletonDoc() {
  return (
    <div className="space-y-24 pb-32">
      <div className="space-y-6">
        <H1>Skeleton</H1>
        <Lead>
          Technical loading placeholders with an industrial scanning aesthetic.
          Used to maintain visual structure during asynchronous data retrieval.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>Execution</H3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card Mockup */}
          <Card className="p-8 space-y-6 bg-background/40 border-border">
            <div className="flex items-center gap-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-[60%]" />
                <Skeleton className="h-3 w-[40%]" />
              </div>
            </div>
            <div className="space-y-3">
              <Skeleton className="h-32 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </Card>

          {/* Table Mockup */}
          <Card className="p-0 overflow-hidden border-border bg-background/20">
            <div className="p-6 border-b border-border bg-foreground/[0.02]">
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="p-6 space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <Skeleton className="h-3 w-40" />
                  <Skeleton className="h-3 w-12" />
                </div>
              ))}
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
          code={`<div className="flex items-center space-x-4">\n  <Skeleton className="h-12 w-12 rounded-full" />\n  <div className="space-y-2">\n    <Skeleton className="h-4 w-[250px]" />\n    <Skeleton className="h-4 w-[200px]" />\n  </div>\n</div>`}
        />
      </section>
    </div>
  );
}
