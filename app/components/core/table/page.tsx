import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Card,
  Badge,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";
import { Activity, Shield, Database, Cpu } from "lucide-react";

export default function TableDoc() {
  return (
    <div className="space-y-24 pb-32">
      {/* Header */}
      <div className="space-y-6">
        <H1>Table</H1>
        <Lead>
          A high-density data visualization artifact. Optimized for
          architectural logs, system metadata, and complex hierarchical data
          matrices.
        </Lead>
      </div>

      {/* Industrial Monitor Example */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>System Monitor</H3>
          </div>
          <Badge variant="outline" size="xs">
            Live Stream
          </Badge>
        </div>

        <Card className="p-0 overflow-hidden border-border bg-background/40 backdrop-blur-xl">
          <Table variant="technical">
            <TableCaption>
              System Node Status Report // Archive 0x9F
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Node_Identifier</TableHead>
                <TableHead>Protocol</TableHead>
                <TableHead>Stability</TableHead>
                <TableHead className="text-right">Throughput</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-foreground flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Kernel_01_X
                </TableCell>
                <TableCell className="text-[10px] font-mono uppercase tracking-tighter">
                  RSA-4096 / AES
                </TableCell>
                <TableCell>
                  <Badge variant="success" size="xs" dot pulse>
                    Stable
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono text-accent">
                  1.2GB/s
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Proxy_Staging
                </TableCell>
                <TableCell className="text-[10px] font-mono uppercase tracking-tighter">
                  HTTP/3 QUIC
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" size="xs">
                    Syncing
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono text-accent">
                  480MB/s
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  External_Link_02
                </TableCell>
                <TableCell className="text-[10px] font-mono uppercase tracking-tighter">
                  TLS 1.3
                </TableCell>
                <TableCell>
                  <Badge variant="destructive" size="xs">
                    Compromised
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono text-accent">
                  0.0KB/s
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Aggregate System Load</TableCell>
                <TableCell className="text-right font-black italic">
                  32.4%
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </Card>
      </section>

      {/* Technical Specifications */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Technical Blueprint</H3>
          </div>
          <span className="text-[10px] font-mono text-muted italic">
            Core v1.0.4
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4 bg-foreground/[0.01] border-border transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
            <div className="flex items-center gap-3 text-foreground">
              <Cpu size={16} className="text-accent" />
              <span className="font-bold uppercase italic tracking-widest text-xs">
                Grid Precision
              </span>
            </div>
            <p className="text-[10px] font-mono text-muted leading-relaxed uppercase">
              The technical variant implements strict border-collapse and
              vertical grid lines, optimized for high-density terminal-like data
              presentation.
            </p>
          </Card>
          <Card className="p-8 space-y-4 bg-foreground/[0.01] border-border transition-all duration-500 hover:bg-foreground/[0.02] hover:border-foreground/10">
            <div className="flex items-center gap-3 text-foreground">
              <Database size={16} className="text-accent" />
              <span className="font-bold uppercase italic tracking-widest text-xs">
                Matrix Logic
              </span>
            </div>
            <p className="text-[10px] font-mono text-muted leading-relaxed uppercase">
              Sub-components like TableFooter and TableCaption allow for complex
              data summarization and archival labeling within the same artifact.
            </p>
          </Card>
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

        <Card className="p-0 overflow-hidden border-border bg-foreground/[0.02]">
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
                  variant
                </TableCell>
                <TableCell className="text-[10px] font-mono text-accent">
                  &quot;default&quot; | &quot;technical&quot;
                </TableCell>
                <TableCell className="text-muted">
                  &quot;default&quot;
                </TableCell>
                <TableCell className="text-muted/70">
                  Visual protocol for grid density and border logic.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  className
                </TableCell>
                <TableCell className="text-[10px] font-mono text-accent">
                  string
                </TableCell>
                <TableCell className="text-muted">—</TableCell>
                <TableCell className="text-muted/70">
                  Container style overrides.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  children
                </TableCell>
                <TableCell className="text-[10px] font-mono text-accent">
                  ReactNode
                </TableCell>
                <TableCell className="text-muted">—</TableCell>
                <TableCell className="text-muted/70">
                  Table sub-components (TableHeader, TableBody, etc.)
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
          code={`<Table variant="technical">\n  <TableHeader>\n    <TableRow>\n      <TableHead>Identifier</TableHead>\n      <TableHead>Status</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>Node_01</TableCell>\n      <TableCell>Active</TableCell>\n    </TableRow>\n  </TableBody>\n  <TableFooter>\n    <TableRow>\n      <TableCell>Total</TableCell>\n      <TableCell>1 Node</TableCell>\n    </TableRow>\n  </TableFooter>\n</Table>`}
        />
      </section>
    </div>
  );
}
