import { Label, Card, Input } from "@/components/ui";

export default function LabelDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Label
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          A minimalist indicator for digital inscriptions. Designed for
          high-clarity monospace hierarchy.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Standard Design
        </h3>
        <Card variant="artifact" className="p-12 space-y-12 bg-white/[0.01]">
          <div className="space-y-3">
            <Label htmlFor="standard">Standard_Indicator</Label>
            <p className="text-zinc-500 text-xs font-mono">
              Used for primary form labels.
            </p>
          </div>

          <div className="space-y-3">
            <Label htmlFor="accent" className="text-accent/60">
              Accent_Indicator
            </Label>
            <p className="text-zinc-500 text-xs font-mono">
              Customizable color states for different alchemical phases.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Composition
        </h3>
        <Card className="p-12 space-y-6 bg-black/40 border-white/5">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email-example">Coordinate_Email</Label>
            <Input
              type="email"
              id="email-example"
              placeholder="architect@8eyond.io"
            />
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Label } from "@/components/ui";

<Label htmlFor="email">Email_Address</Label>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
