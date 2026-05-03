import { Switch, Label, Card } from "@/components/ui";

export default function SwitchDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Switch
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed">
          A premium toggle artifact for immediate system state changes. Features
          alchemical glow animations and smooth physical transitions.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Alchemical Preview
        </h3>
        <Card variant="artifact" className="p-12 space-y-12 bg-white/[0.01]">
          <div className="flex items-center justify-between max-w-sm">
            <div className="space-y-0.5">
              <Label htmlFor="airplane">System_Flight_Mode</Label>
              <p className="text-zinc-500 text-[11px]">
                Disconnect all alchemical transmissions.
              </p>
            </div>
            <Switch id="airplane" />
          </div>

          <div className="flex items-center justify-between max-w-sm">
            <div className="space-y-0.5">
              <Label htmlFor="notifications" className="text-accent/60">
                Glow_Protocol
              </Label>
              <p className="text-zinc-500 text-[11px]">
                Enable refractive focus effects.
              </p>
            </div>
            <Switch id="notifications" defaultChecked />
          </div>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Switch, Label } from "@/components/ui";

<div className="flex items-center justify-between">
  <Label htmlFor="id">Feature_Name</Label>
  <Switch id="id" />
</div>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
