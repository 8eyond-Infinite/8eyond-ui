import { Button, Card } from "@/components/ui";

export default function ButtonDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Button
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          An interactive catalyst. Triggers logical operations or alchemical
          transitions.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Variants
        </h3>
        <Card
          variant="artifact"
          className="p-12 flex flex-wrap gap-8 items-center justify-center bg-white/[0.01]"
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="alchemist">Alchemist</Button>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Button } from "@/components/ui";

<Button variant="alchemist">
  Initialize_System
</Button>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
