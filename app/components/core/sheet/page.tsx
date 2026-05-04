"use client";

import * as React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  Button,
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
  Input,
  Label,
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";
import { PanelRight, Settings, User, Shield } from "lucide-react";

export default function SheetDoc() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Sheet</H1>
        <Lead>
          Extensible operator panels for system disclosure. Designed to slide
          from any viewport edge, providing high-density focus for complex
          technical tasks.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-accent" />
          <H3>Execution</H3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Demo */}
          <Card className="p-12 flex items-center justify-center bg-foreground/[0.02] min-h-[300px]">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Button size="lg" className="px-10 h-14">
                  <PanelRight className="mr-3 h-4 w-4" />
                  Initialize Operator Panel
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-sm bg-accent/5 border border-accent/20 flex items-center justify-center">
                      <Settings size={16} className="text-accent" />
                    </div>
                    <div className="space-y-0.5">
                      <SheetTitle>Core Settings</SheetTitle>
                      <SheetDescription>Clearance Level 04</SheetDescription>
                    </div>
                  </div>
                </SheetHeader>
                <div className="p-8 space-y-8">
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest text-muted">
                      Operator Identity
                    </Label>
                    <div className="flex items-center gap-4 p-4 rounded-sm border border-border bg-foreground/[0.02]">
                      <div className="w-10 h-10 rounded-full border border-border bg-background flex items-center justify-center">
                        <User size={20} className="text-muted" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold uppercase">
                          Archon Unit 01
                        </div>
                        <div className="text-[9px] font-mono text-muted">
                          ID: 0x9F 22 A1
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest text-muted">
                      System Overrides
                    </Label>
                    <div className="space-y-3">
                      <Input placeholder="Enter authorization key..." />
                      <div className="flex items-center gap-2 text-[9px] font-mono text-amber-500 uppercase">
                        <Shield size={10} /> Manual override active
                      </div>
                    </div>
                  </div>
                </div>
                <SheetFooter>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Terminate
                  </Button>
                  <Button onClick={() => setOpen(false)}>Save Changes</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </Card>

          {/* Configuration */}
          <Card className="p-10 space-y-6 bg-foreground/[0.02]">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
              Panel Navigation
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-12 border-border/50">
                Slide Left
              </Button>
              <Button variant="outline" className="h-12 border-border/50">
                Slide Right
              </Button>
              <Button variant="outline" className="h-12 border-border/50">
                Slide Top
              </Button>
              <Button variant="outline" className="h-12 border-border/50">
                Slide Bottom
              </Button>
            </div>
            <Muted className="text-[10px] italic">
              * The panel utilizes spring-based physics for momentum-driven
              transitions.
            </Muted>
          </Card>
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-muted" />
          <H3>API Reference</H3>
        </div>
        <Card className="overflow-hidden border-border bg-foreground/[0.02]">
          <Table variant="technical">
            <TableHeader>
              <TableRow className="bg-foreground/[0.03] hover:bg-foreground/[0.03]">
                <TableHead className="text-foreground uppercase tracking-widest">
                  Prop
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Type
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Default
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  side
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "top" | "bottom" | "left" | "right"
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  "right"
                </TableCell>
                <TableCell className="text-muted/70">
                  Direction from which the panel emerges.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  open
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  false
                </TableCell>
                <TableCell className="text-muted/70">
                  Controlled visibility state.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-muted" />
          <H3>Usage</H3>
        </div>
        <UsageBlock
          code={`<Sheet>\n  <SheetTrigger>\n    <Button>Open</Button>\n  </SheetTrigger>\n  <SheetContent side="right">\n    <SheetHeader>\n      <SheetTitle>Title</SheetTitle>\n      <SheetDescription>Description</SheetDescription>\n    </SheetHeader>\n    {/* Content */}\n  </SheetContent>\n</Sheet>`}
        />
      </section>
    </div>
  );
}
