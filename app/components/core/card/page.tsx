import { UsageBlock } from "@/components/docs/UsageBlock";
import { Shield, Activity, Lock } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  H1,
  H3,
  Lead,
  Muted,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";

export default function CardDoc() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Card</H1>
        <Lead>
          A multi-layered container for organizing digital information with
          architectural depth. Optimized for high-density layouts and technical
          encapsulation.
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

        <div className="p-8 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden min-h-[400px] flex items-center justify-center transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Dashboard Metric Card */}
            <Card className="bg-background/40 border-border">
              <CardHeader className="pb-2">
                <CardDescription>Network_Traffic</CardDescription>
                <CardTitle className="text-sm">Inbound_Stream</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black italic text-foreground tracking-tight">
                  1.2 GB/s
                </div>
                <Muted className="text-[10px] mt-1">+12% from last cycle</Muted>
              </CardContent>
            </Card>

            <Card className="bg-background/40 border-border">
              <CardHeader className="pb-2">
                <CardDescription>System_Load</CardDescription>
                <CardTitle className="text-sm">Core_01_Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black italic text-emerald-500 tracking-tight">
                  42.5%
                </div>
                <Muted className="text-[10px] mt-1 text-emerald-500/50">
                  Optimal_Performance
                </Muted>
              </CardContent>
            </Card>

            <Card variant="technical" className="border-border">
              <CardHeader className="pb-2">
                <CardDescription>Node_Priority</CardDescription>
                <CardTitle className="text-sm">Auth_Gateway</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black italic text-foreground tracking-tight">
                  SECURE
                </div>
                <Muted className="text-[10px] mt-1 italic opacity-40">
                  Active_Encryption
                </Muted>
              </CardContent>
            </Card>
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
              <Card className="p-6 space-y-2 border-border bg-background/20">
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-muted" />
                  <span className="text-[10px] font-mono uppercase text-muted tracking-widest">
                    Industrial_Standard
                  </span>
                </div>
                <p className="text-sm text-muted/80">
                  Standard architectural container for basic information
                  grouping and structural isolation.
                </p>
              </Card>

              <Card variant="technical" className="p-6 space-y-2 border-border">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-muted" />
                  <span className="text-[10px] font-mono uppercase text-muted tracking-widest">
                    High_Fidelity_Node
                  </span>
                </div>
                <p className="text-sm text-muted/90">
                  High-fidelity refractive interface for priority system
                  monitoring and technical overlays.
                </p>
              </Card>
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
                <TableHead className="w-[150px]">Component</TableHead>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  Card
                </TableCell>
                <TableCell className="font-mono text-accent">variant</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  "default" | "technical" | "ghost"
                </TableCell>
                <TableCell>Visual preset for the container shell.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  CardHeader
                </TableCell>
                <TableCell className="font-mono text-accent">-</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  HTMLDiv
                </TableCell>
                <TableCell>
                  Top-aligned container for title and description.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  CardTitle
                </TableCell>
                <TableCell className="font-mono text-accent">-</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  HTMLHeading
                </TableCell>
                <TableCell>
                  The primary heading artifact for the card.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  CardDescription
                </TableCell>
                <TableCell className="font-mono text-accent">-</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  HTMLParagraph
                </TableCell>
                <TableCell>
                  Monospace technical descriptor for the card's context.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  CardContent
                </TableCell>
                <TableCell className="font-mono text-accent">-</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  HTMLDiv
                </TableCell>
                <TableCell>
                  The primary payload area of the card artifact.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  CardFooter
                </TableCell>
                <TableCell className="font-mono text-accent">-</TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  HTMLDiv
                </TableCell>
                <TableCell>
                  Bottom-aligned container for operational triggers.
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
          code={`<Card variant="technical">\n  <CardHeader>\n    <CardTitle>Technical_Report</CardTitle>\n    <CardDescription>Industrial_Standard_V1</CardDescription>\n  </CardHeader>\n  <CardContent>\n    Primary_Payload_Data\n  </CardContent>\n  <CardFooter>\n    <Button>Execute_Sync</Button>\n  </CardFooter>\n</Card>`}
        />
      </section>
    </div>
  );
}
