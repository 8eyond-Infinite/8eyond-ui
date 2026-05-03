import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Card,
} from "@/components/ui";

export default function TabsDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Tabs
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed">
          A high-performance interface for switching between architectural
          views. Features spring-based animations and alchemical content
          transitions.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Alchemical Preview
        </h3>
        <Card variant="artifact" className="p-12 bg-white/[0.01]">
          <Tabs defaultValue="overview" className="w-full max-w-md">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="artifact">Artifact_Data</TabsTrigger>
              <TabsTrigger value="logs">Kernel_Logs</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <div className="p-6 rounded-lg border border-white/5 bg-white/[0.02]">
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Base layer visualization of the current system node.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="artifact">
              <div className="p-6 rounded-lg border border-white/5 bg-white/[0.02]">
                <p className="text-zinc-400 text-sm leading-relaxed italic">
                  Refractive metadata extracted from the lead essence.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="logs">
              <div className="p-6 rounded-lg border border-white/5 bg-black/40 font-mono text-xs">
                <p className="text-zinc-500">
                  [00:00:01] System initialized...
                </p>
                <p className="text-zinc-500">
                  [00:00:02] Protocol_v1.0 active.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab_01</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
