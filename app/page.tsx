import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui";
import { MoveRight, Shield, Repeat, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 md:p-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        <header className="mb-24 space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_var(--color-accent)]" />
            <span className="text-[10px] font-mono text-accent tracking-[0.5em] uppercase opacity-70">
              System_Showroom // 8eyond_Catalyst
            </span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-[-0.08em] uppercase italic leading-[0.9]">
            Architectural <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
            >
              Integrity.
            </span>
          </h1>
          <p className="max-w-xl text-zinc-500 font-light text-lg md:text-xl leading-relaxed">
            The foundation of our digital artifacts. A modular UI system
            designed for both{" "}
            <span className="text-white italic">industrial logic</span> and{" "}
            <span className="text-accent italic">alchemical magic</span>.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono text-zinc-700 tracking-widest uppercase">
                01 // THE_LOGIC
              </span>
              <div className="h-px flex-1 bg-white/5" />
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
              <Card>
                <CardHeader>
                  <CardDescription>Law_01 // SECURE_DATA</CardDescription>
                  <CardTitle>Core Kernel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Designed for maximum clarity and data density. Perfect for
                    Dashboards, Management Panels, and complex SaaS logic.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600">
                    <Shield size={12} /> STATUS: NOMINAL
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono text-accent/40 tracking-widest uppercase text-glow">
                02 // THE_MAGIC
              </span>
              <div className="h-px flex-1 bg-accent/10" />
            </div>

            <div className="space-y-8">
              <div className="flex flex-wrap gap-4">
                <Button variant="alchemist" size="lg" className="group">
                  Transmute Now
                  <MoveRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Button>
              </div>

              <Card variant="artifact" className="group overflow-hidden">
                <CardHeader>
                  <CardDescription className="text-accent/60">
                    Phase_04 // THE_COAGULATION
                  </CardDescription>
                  <CardTitle className="text-white group-hover:text-accent transition-colors duration-500">
                    Magnum Opus
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <div className="absolute top-0 right-8 opacity-5">
                    <Layers size={60} className="text-accent" />
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed italic relative z-10">
                    The alchemical layer adds depth, mystery, and narrative. Use
                    những variants này cho Landing Pages và storytelling.
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-accent">
                    <Repeat size={12} className="animate-spin-slow" />{" "}
                    SOLVE_ET_COAGULA
                  </div>
                </CardFooter>
                <div className="absolute bottom-0 left-0 h-[1px] bg-accent/20 w-12 group-hover:w-full transition-all duration-1000" />
              </Card>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-12 font-mono text-[9px] text-zinc-700 uppercase tracking-[0.3em]">
            <div>Kernel: v16.2.4</div>
            <div>Auth: Master_Alchemist</div>
            <div>Status: Stable_Flux</div>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 italic">
            &quot;Logic is the lead, Mastery is the gold.&quot;
          </div>
        </footer>
      </div>

      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[120px] pointer-events-none" />
    </main>
  );
}
