import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Card,
} from "@/components/ui";

export default function TableDoc() {
  return (
    <div className="space-y-16 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Table
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed">
          A high-density data visualization artifact. Optimized for
          architectural logs, system metadata, and complex hierarchical data.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Standard Preview
        </h3>
        <Card
          variant="artifact"
          className="p-0 overflow-hidden border-white/5 bg-black/20"
        >
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

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Table, TableHeader, TableBody, ... } from "@/components/ui";

<Table>
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
          </pre>
        </Card>
      </section>
    </div>
  );
}
