import { Card } from "@/components/ui";

export default function TypographyDoc() {
  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Typography
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed">
          The Codex of 8eyond. A dual-font system balancing high-readability
          Sans-serif with technical Monospace artifacts.
        </p>
      </div>

      <section className="space-y-10">
        <div className="space-y-4">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600 border-b border-white/5 pb-4">
            Font_Faces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                Primary_Sans
              </span>
              <h4 className="text-4xl font-black italic">Geist Sans</h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Used for Headings, Body text, and most user-facing content.
                Optimized for clarity and modern aesthetics.
              </p>
            </Card>
            <Card className="p-8 space-y-4">
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                Technical_Mono
              </span>
              <h4 className="text-4xl font-mono font-bold uppercase tracking-tighter">
                Geist Mono
              </h4>
              <p className="text-zinc-400 text-sm font-mono leading-relaxed">
                Used for Code, Labels, Metadata, and System Indicators. Evokes
                industrial precision.
              </p>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600 border-b border-white/5 pb-4">
            Hierarchy_Scale
          </h3>
          <Card className="p-12 space-y-12">
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-zinc-700 uppercase">
                Heading_01
              </span>
              <h1 className="text-6xl font-black uppercase italic tracking-tighter">
                Beyond the lead
              </h1>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-zinc-700 uppercase">
                Heading_02
              </span>
              <h2 className="text-4xl font-bold uppercase italic tracking-tight">
                The alchemical process
              </h2>
            </div>
            <div className="space-y-2">
              <span className="text-[9px] font-mono text-zinc-700 uppercase">
                Body_Text
              </span>
              <p className="text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
                The transition from base metal to gold is not merely physical,
                but architectural. Every component must serve the logic of the
                system.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
