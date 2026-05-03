import { Card } from "@/components/ui";
import {
  Cpu,
  Terminal,
  Layers,
  Type,
  ArrowRight,
  Check,
  Repeat,
  Layout,
  Table as TableIcon,
  Navigation,
  ExternalLink,
  MessageSquare,
  MousePointer2,
  List,
  FormInput,
  ToggleLeft,
  ChevronDown,
  Layers as LayersIcon,
  Bell,
  Info,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "General",
    description:
      "Foundational artifacts for basic layout and structural logic.",
    items: [
      {
        name: "Typography",
        href: "/components/core/typography",
        icon: Type,
        desc: "Font scales and hierarchies.",
      },
      {
        name: "Button",
        href: "/components/core/button",
        icon: Cpu,
        desc: "Interactive catalysts.",
      },
      {
        name: "Badge",
        href: "/components/core/badge",
        icon: Info,
        desc: "Compact status indicators.",
      },
      {
        name: "Accordion",
        href: "/components/core/accordion",
        icon: List,
        desc: "Collapsible content disclosure.",
      },
    ],
  },
  {
    title: "Form",
    description: "Input artifacts for data inscription and system parameters.",
    items: [
      {
        name: "Input",
        href: "/components/core/input",
        icon: Terminal,
        desc: "Monospace data fields.",
      },
      {
        name: "Label",
        href: "/components/core/label",
        icon: FormInput,
        desc: "Technical descriptors.",
      },
      {
        name: "Checkbox",
        href: "/components/core/checkbox",
        icon: Check,
        desc: "Binary selection logic.",
      },
      {
        name: "Switch",
        href: "/components/core/switch",
        icon: Repeat,
        desc: "State transition toggles.",
      },
      {
        name: "Select",
        href: "/components/core/select",
        icon: ChevronDown,
        desc: "Matrix selection artifacts.",
      },
      {
        name: "Radio Group",
        href: "/components/core/radio-group",
        icon: ToggleLeft,
        desc: "Exclusive state selection.",
      },
    ],
  },
  {
    title: "Data Display",
    description: "Artifacts for organizing and presenting complex system data.",
    items: [
      {
        name: "Card",
        href: "/components/core/card",
        icon: Layers,
        desc: "Encapsulated containers.",
      },
      {
        name: "Table",
        href: "/components/core/table",
        icon: TableIcon,
        desc: "High-density data matrices.",
      },
    ],
  },
  {
    title: "Navigation",
    description: "Protocols for user flow and hierarchical pathfinding.",
    items: [
      {
        name: "Tabs",
        href: "/components/core/tabs",
        icon: Layout,
        desc: "View switching interface.",
      },
      {
        name: "Breadcrumb",
        href: "/components/core/breadcrumb",
        icon: Navigation,
        desc: "Path indicators.",
      },
    ],
  },
  {
    title: "Overlays",
    description: "Portal artifacts for focus states and system feedback.",
    items: [
      {
        name: "Dialog",
        href: "/components/core/dialog",
        icon: LayersIcon,
        desc: "Immersive focus portals.",
      },
      {
        name: "Toast",
        href: "/components/core/toast",
        icon: Bell,
        desc: "System notifications.",
      },
      {
        name: "Tooltip",
        href: "/components/core/tooltip",
        icon: MessageSquare,
        desc: "Contextual info overlays.",
      },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-24">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
          Library Index
        </h1>
        <p className="text-zinc-500 text-xl max-w-3xl font-normal leading-relaxed">
          The complete inventory of 17 core 8eyond UI artifacts.
          High-performance building blocks for the modern digital architect.
        </p>
      </div>

      <div className="space-y-24">
        {categories.map((category) => (
          <div key={category.title} className="space-y-10">
            <div className="flex items-end justify-between border-b border-white/5 pb-6">
              <div className="space-y-2">
                <h2 className="text-[12px] font-mono font-bold uppercase tracking-[0.5em] text-accent">
                  {category.title}
                </h2>
                <p className="text-xs text-zinc-600 font-mono italic">
                  {category.description}
                </p>
              </div>
              <span className="text-[10px] font-mono text-zinc-800">
                Core Protocols // {category.items.length} Nodes
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Card className="p-6 h-full group hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[180px]">
                    <div className="flex items-start justify-between">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-sm group-hover:border-accent/20 transition-colors">
                        <item.icon
                          className="text-zinc-500 group-hover:text-accent transition-colors"
                          size={20}
                        />
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-zinc-800 group-hover:text-accent transition-all group-hover:translate-x-1"
                      />
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm font-bold uppercase italic mb-2 tracking-tight group-hover:text-white transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-zinc-500 text-[11px] leading-relaxed font-mono">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Alchemist Section */}
      <div className="pt-20 space-y-10">
        <div className="flex items-end justify-between border-b border-accent/10 pb-6">
          <div className="space-y-2">
            <h2 className="text-[12px] font-mono font-bold uppercase tracking-[0.5em] text-accent shadow-glow">
              Alchemist Sanctum
            </h2>
            <p className="text-xs text-accent/40 font-mono italic">
              Mystical artifacts for experimental interfaces.
            </p>
          </div>
          <span className="text-[10px] font-mono text-accent/20 italic">
            Sanctum Protocols // 1 Artifact
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/components/alchemist/button">
            <Card
              variant="technical"
              className="p-6 h-full group transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[180px] border-accent/20"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 bg-accent/5 border border-accent/10 rounded-sm">
                  <Cpu className="text-accent" size={20} />
                </div>
                <ExternalLink
                  size={14}
                  className="text-accent/40 group-hover:text-accent"
                />
              </div>
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase italic mb-2 tracking-tight text-accent text-glow">
                  Alchemist Button
                </h3>
                <p className="text-accent/40 text-[11px] leading-relaxed font-mono">
                  High-fidelity interactive catalyst.
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
