import {
  Button,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui";

export default function ButtonDoc() {
  return (
    <div className="space-y-16 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Button
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed">
          An interactive catalyst. Triggers logical operations or alchemical
          transitions within the system.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Core_Variants
        </h3>
        <Card variant="artifact" className="p-12 bg-white/[0.01]">
          <div className="flex flex-wrap gap-6 items-center">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Alchemical_States
        </h3>
        <Card variant="artifact" className="p-12 bg-white/[0.01]">
          <div className="flex flex-wrap gap-8 items-center">
            <Button variant="alchemist" size="lg">
              Transmute_Artifact
            </Button>
            <Button variant="success">Success</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          API_Reference
        </h3>
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
                <TableCell className="font-mono text-accent">variant</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "primary" | "secondary" | "ghost" | "alchemist" |
                  "destructive" | "outline" | "link" | "success"
                </TableCell>
                <TableCell className="font-mono text-[12px]">
                  "primary"
                </TableCell>
                <TableCell>The visual style of the button.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">size</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  "sm" | "md" | "lg"
                </TableCell>
                <TableCell className="font-mono text-[12px]">"md"</TableCell>
                <TableCell>The size of the button element.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">asChild</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>
                  Whether to merge props onto a child component.
                </TableCell>
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
            {`import { Button } from "@/components/ui";

<Button variant="alchemist" size="lg">
  Initialize_System
</Button>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
