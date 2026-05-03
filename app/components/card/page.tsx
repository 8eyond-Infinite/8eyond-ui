import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";

export default function CardDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Card
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          A multi-layered container for organizing digital information with
          architectural depth.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Standard Logic
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardDescription>Module_01</CardDescription>
              <CardTitle>System Kernel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-500 text-sm">
                Clean, high-density container for industrial applications.
              </p>
            </CardContent>
          </Card>

          <Card variant="artifact">
            <CardHeader>
              <CardDescription className="text-accent/60">
                Artifact_07
              </CardDescription>
              <CardTitle>Alchemical Core</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400 text-sm italic">
                Refractive, transparent, and visually evocative.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Card, CardHeader, CardTitle } from "@/components/ui";

<Card variant="artifact">
  <CardHeader>
    <CardTitle>Artifact_Title</CardTitle>
  </CardHeader>
</Card>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
