import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Input,
  Label,
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
import { CopyButton } from "@/components/docs/CopyButton";
import { Shield, Activity, Lock } from "lucide-react";

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
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            <H3>Execution</H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-800 italic">
            Core
          </span>
        </div>

        <div className="p-8 rounded-sm border border-white/5 bg-zinc-900/20 relative overflow-hidden min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

          <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Dashboard Metric Card */}
            <Card className="bg-black/40 border-white/10">
              <CardHeader className="pb-2">
                <CardDescription>Network_Traffic</CardDescription>
                <CardTitle className="text-sm">Inbound_Stream</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black italic text-white tracking-tight">
                  1.2 GB/s
                </div>
                <Muted className="text-[10px] mt-1">+12% from last cycle</Muted>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-white/10">
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

            <Card variant="technical" className="border-white/20">
              <CardHeader className="pb-2">
                <CardDescription className="text-zinc-500">
                  Node_Priority
                </CardDescription>
                <CardTitle className="text-sm">Auth_Gateway</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-black italic text-white tracking-tight">
                  SECURE
                </div>
                <Muted className="text-[10px] mt-1 italic opacity-40 italic">
                  Active_Encryption
                </Muted>
              </CardContent>
            </Card>
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
                Variants
              </Muted>
            </div>
            <div className="p-10 rounded-sm border border-white/5 bg-white/[0.01] grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Shield size={14} className="text-zinc-500" />
                  <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-widest">
                    Industrial_Standard
                  </span>
                </div>
                <p className="text-sm text-zinc-400">
                  Standard architectural container for basic information
                  grouping and structural isolation.
                </p>
              </Card>

              <Card variant="technical" className="p-6 space-y-2">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-zinc-400" />
                  <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-widest">
                    High_Fidelity_Node
                  </span>
                </div>
                <p className="text-sm text-zinc-300">
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
                <TableHead className="w-[150px]">Component</TableHead>
                <TableHead>Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-white">Card</TableCell>
                <TableCell className="font-mono text-zinc-500">
                  variant
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "default" | "technical" | "ghost"
                </TableCell>
                <TableCell>Visual preset for the container shell.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  CardHeader
                </TableCell>
                <TableCell className="font-mono text-zinc-500">-</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  HTMLDiv
                </TableCell>
                <TableCell>
                  Top-aligned container for title and description.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  CardTitle
                </TableCell>
                <TableCell className="font-mono text-zinc-500">-</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  HTMLHeading
                </TableCell>
                <TableCell>
                  The primary heading artifact for the card.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  CardDescription
                </TableCell>
                <TableCell className="font-mono text-zinc-500">-</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  HTMLParagraph
                </TableCell>
                <TableCell>
                  Monospace technical descriptor for the card's context.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  CardContent
                </TableCell>
                <TableCell className="font-mono text-zinc-500">-</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  HTMLDiv
                </TableCell>
                <TableCell>
                  The primary payload area of the card artifact.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-white">
                  CardFooter
                </TableCell>
                <TableCell className="font-mono text-zinc-500">-</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
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
              {`<Card variant="technical">
  <CardHeader>
    <CardTitle>Technical_Report</CardTitle>
    <CardDescription>Industrial_Standard_V1</CardDescription>
  </CardHeader>
  <CardContent>
    Primary_Payload_Data
  </CardContent>
  <CardFooter>
    <Button>Execute_Sync</Button>
  </CardFooter>
</Card>`}
            </code>
            <CopyButton
              value={`<Card variant="technical">\n  <CardHeader>\n    <CardTitle>Technical_Report</CardTitle>\n    <CardDescription>Industrial_Standard_V1</CardDescription>\n  </CardHeader>\n  <CardContent>\n    Primary_Payload_Data\n  </CardContent>\n  <CardFooter>\n    <Button>Execute_Sync</Button>\n  </CardFooter>\n</Card>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
