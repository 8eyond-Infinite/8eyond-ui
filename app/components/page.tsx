import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import { Cpu, Terminal, Layers } from "lucide-react";
import Link from "next/link";

export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Library_Index
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">
          Welcome to the 8eyond UI Component Library. A collection of
          high-performance digital artifacts designed for industrial logic and
          alchemical magic.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/components/button">
          <Card className="p-8 h-full group hover:border-accent/30 transition-all duration-500">
            <Cpu className="mb-6 text-zinc-600 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-bold uppercase italic mb-2">
              Atomic Components
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Fundamental building blocks like Buttons and Icons. Optimized for
              high-frequency interaction.
            </p>
          </Card>
        </Link>
        <Link href="/components/input">
          <Card className="p-8 h-full group hover:border-accent/30 transition-all duration-500">
            <Terminal className="mb-6 text-zinc-600 group-hover:text-accent transition-colors" />
            <h3 className="text-xl font-bold uppercase italic mb-2">
              Inscription System
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Inputs, Labels, and Form elements designed for precise data entry
              and technical clarity.
            </p>
          </Card>
        </Link>
        <Link href="/components/card">
          <Card
            variant="artifact"
            className="p-8 h-full group hover:border-accent/30 transition-all duration-500"
          >
            <Layers className="mb-6 text-accent" />
            <h3 className="text-xl font-bold uppercase italic mb-2 text-glow">
              Data Visualization
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Cards, Tables, and Containers that organize information with
              refractive depth.
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
