"use client";

import * as React from "react";
import {
  AlchemistButton,
  Typography,
  H1,
  H3,
  Lead,
  Muted,
} from "@/components/ui";
import { CopyButton } from "@/components/docs/CopyButton";
import { Zap, Shield, Terminal } from "lucide-react";

export default function AlchemistButtonDoc() {
  const [isSyncing, setIsSyncing] = React.useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 mb-2">
          <div className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent font-mono text-[10px] font-bold tracking-widest uppercase">
            Artifact_Class: SSS
          </div>
        </div>
        <H1 className="text-artifact italic font-serif">Alchemist_Button</H1>
        <Lead className="text-zinc-400 italic font-serif">
          A high-fidelity interaction artifact. Infused with radial energy and
          architectural precision for critical system protocols.
        </Lead>
      </div>

      {/* Main Preview */}
      <section className="space-y-12">
        <div className="flex items-center justify-between border-b border-accent/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent shadow-glow" />
            <H3 className="text-zinc-100 font-serif italic">
              Artifact_Archetype
            </H3>
          </div>
          <span className="text-[10px] font-mono text-zinc-600 italic">
            Manuscript_Reference
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Static Preview */}
          <div className="space-y-6">
            <Typography
              variant="large"
              className="text-xs uppercase tracking-[0.3em] text-zinc-500"
            >
              Visual_Presence
            </Typography>
            <div className="h-64 rounded-sm border border-accent/10 bg-accent/[0.02] flex flex-wrap items-center justify-center gap-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <AlchemistButton leftIcon={<Zap size={14} />}>
                Overload
              </AlchemistButton>
              <AlchemistButton
                variant="outline"
                rightIcon={<Shield size={14} />}
              >
                Secure
              </AlchemistButton>
            </div>
          </div>

          {/* Interactive Simulation */}
          <div className="space-y-6">
            <Typography
              variant="large"
              className="text-xs uppercase tracking-[0.3em] text-emerald-500/60"
            >
              Interactive_Simulation
            </Typography>
            <div className="h-64 rounded-sm border border-emerald-500/10 bg-emerald-500/[0.02] flex flex-col items-center justify-center gap-6">
              <AlchemistButton
                loading={isSyncing}
                onClick={handleSync}
                glowColor="#10b981"
                leftIcon={<Terminal size={14} />}
                className="min-w-[240px] text-emerald-500 border-emerald-500/20 hover:border-emerald-500"
              >
                {isSyncing ? "Synchronizing..." : "Run_Live_Sequence"}
              </AlchemistButton>
              <Muted className="text-[10px] uppercase tracking-widest opacity-40">
                Pulse to trigger asynchronous alignment
              </Muted>
            </div>
          </div>
        </div>
      </section>

      {/* API & Usage */}
      <section className="space-y-8">
        <H3 className="text-accent">Technical_Inscription</H3>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 rounded-sm blur-sm" />
          <div className="relative p-8 bg-black/60 border border-white/5 font-mono text-sm overflow-x-auto flex items-center justify-between">
            <code className="text-zinc-400 group-hover:text-accent transition-colors duration-500 whitespace-pre">
              {`<AlchemistButton 
  glowColor="#fbbf24"
  onClick={handleProtocol}
>
  Initiate_Protocol
</AlchemistButton>`}
            </code>
            <CopyButton
              value={`<AlchemistButton glowColor="#fbbf24" onClick={handleProtocol}>Initiate_Protocol</AlchemistButton>`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
