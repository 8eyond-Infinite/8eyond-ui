import { Input, Label, Card } from "@/components/ui";

export default function InputDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Input
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          A terminal for data inscriptions. Supports precise logical input and
          alchemical focus states.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Variants
        </h3>
        <Card variant="artifact" className="p-12 space-y-8 bg-white/[0.01]">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="default">Default_Logic</Label>
            <Input id="default" placeholder="Standard_Protocol..." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="artifact" className="text-accent/60">
              Artifact_Key
            </Label>
            <Input
              variant="artifact"
              id="artifact"
              placeholder="Glow_Focus_Enabled..."
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
            {`import { Input, Label } from "@/components/ui";

<div className="grid gap-3">
  <Label htmlFor="key">System_Key</Label>
  <Input variant="artifact" id="key" />
</div>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
