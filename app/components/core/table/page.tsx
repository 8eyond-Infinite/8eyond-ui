import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Card,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { CopyButton } from "@/components/docs/CopyButton";

export default function TableDoc() {
  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Table</H1>
        <Lead>
          A high-density data visualization artifact. Optimized for
          architectural logs, system metadata, and complex hierarchical data.
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

        <Card className="p-0 overflow-hidden border-white/5 bg-black/20">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>System_Node</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead className="text-right">Load</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-accent">
                  Kernel_01
                </TableCell>
                <TableCell>Active</TableCell>
                <TableCell>245:12:09</TableCell>
                <TableCell className="text-right font-mono">12.5%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">
                  Storage_Alpha
                </TableCell>
                <TableCell className="text-emerald-500">Synced</TableCell>
                <TableCell>1,024:45:00</TableCell>
                <TableCell className="text-right font-mono">88.2%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">
                  Transmission_Beta
                </TableCell>
                <TableCell className="text-red-500">Error</TableCell>
                <TableCell>00:00:15</TableCell>
                <TableCell className="text-right font-mono">0.0%</TableCell>
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
              {`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
            </code>
            <CopyButton
              value={`<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>Header</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Data</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
