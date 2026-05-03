import { Checkbox, Label, Card } from "@/components/ui";

export default function CheckboxDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Checkbox
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed">
          A binary switch for multi-selection logic. Features high-contrast
          active states and precision alignment.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Standard Preview
        </h3>
        <Card variant="artifact" className="p-12 space-y-8 bg-white/[0.01]">
          <div className="flex items-center space-x-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept_System_Terms</Label>
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox id="marketing" defaultChecked />
            <Label htmlFor="marketing">Enable_Transmission_Logs</Label>
          </div>

          <div className="flex items-center space-x-3 opacity-50">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="cursor-not-allowed">
              Hardened_Security_Protocol
            </Label>
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Checkbox, Label } from "@/components/ui";

<div className="flex items-center space-x-2">
  <Checkbox id="id" />
  <Label htmlFor="id">Label_Text</Label>
</div>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
