"use client";

import * as React from "react";
import {
  CommandMenu,
  Button,
  Card,
  H1,
  H3,
  Lead,
  Muted,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { UsageBlock } from "@/components/docs/UsageBlock";
import {
  Terminal,
  LayoutGrid,
  Cpu,
  Shield,
  Settings,
  User,
  Bell,
  Mail,
} from "lucide-react";

export default function CommandDoc() {
  const [open, setOpen] = React.useState(false);

  const demoItems = [
    {
      id: "search-components",
      title: "Search Artifacts",
      description: "Navigate through the industrial component library.",
      icon: <LayoutGrid size={14} />,
      category: "Navigation",
      action: () => console.log("Searching components..."),
    },
    {
      id: "sys-check",
      title: "System Diagnostic",
      description: "Run a full scan of the architectural integrity.",
      icon: <Cpu size={14} />,
      category: "System",
      action: () => console.log("Running diagnostics..."),
    },
    {
      id: "security-audit",
      title: "Security Protocol",
      description: "Initialize encryption layers and firewall check.",
      icon: <Shield size={14} />,
      category: "System",
      action: () => console.log("Auditing security..."),
    },
    {
      id: "user-profile",
      title: "Operator Profile",
      description: "Manage credentials and access clearance.",
      icon: <User size={14} />,
      category: "Account",
      action: () => console.log("Opening profile..."),
    },
    {
      id: "settings",
      title: "Core Settings",
      description: "Configure system-wide behavioral parameters.",
      icon: <Settings size={14} />,
      category: "Account",
      action: () => console.log("Opening settings..."),
    },
    {
      id: "notifications",
      title: "Signal History",
      description: "Review recent system alerts and notifications.",
      icon: <Bell size={14} />,
      category: "Communication",
      action: () => console.log("Viewing signals..."),
    },
    {
      id: "messages",
      title: "Transmission Log",
      description: "Check secure communication channels.",
      icon: <Mail size={14} />,
      category: "Communication",
      action: () => console.log("Opening transmissions..."),
    },
  ];

  return (
    <div className="space-y-20 pb-24">
      {/* Header */}
      <div className="space-y-4">
        <H1>Command Menu</H1>
        <Lead>
          A high-fidelity terminal artifact for accelerated system navigation.
          Engineered for power-users who command the architectural flow via
          keyboard protocols.
        </Lead>
      </div>

      {/* Execution */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent" />
            <H3>Execution</H3>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 rounded-[4px] border border-border bg-foreground/[0.05] text-[10px] font-mono text-muted uppercase">
              ⌘ K
            </kbd>
          </div>
        </div>

        <div className="p-12 rounded-sm border border-border bg-foreground/[0.02] relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center gap-8 transition-all duration-500 hover:bg-foreground/[0.03] hover:border-foreground/10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center mx-auto bg-background/50 backdrop-blur-sm">
              <Terminal size={32} className="text-muted" />
            </div>
            <div className="space-y-2">
              <H3>Command Bridge Ready</H3>
              <Muted className="max-w-xs mx-auto">
                Press the trigger below or use the keyboard protocol to
                initialize the interface.
              </Muted>
            </div>
            <Button
              size="lg"
              className="px-12 h-14"
              onClick={() => setOpen(true)}
            >
              Initialize Command Sequence
            </Button>
          </div>
        </div>

        <CommandMenu open={open} onOpenChange={setOpen} items={demoItems} />
      </section>

      {/* API Reference */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="w-2 h-2 bg-muted" />
          <H3>API Reference</H3>
        </div>
        <Card className="overflow-hidden border-border bg-foreground/[0.02]">
          <Table variant="technical">
            <TableHeader>
              <TableRow className="bg-foreground/[0.03] hover:bg-foreground/[0.03]">
                <TableHead className="text-foreground uppercase tracking-widest">
                  Prop
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Type
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Default
                </TableHead>
                <TableHead className="text-foreground uppercase tracking-widest">
                  Description
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  open
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  false
                </TableCell>
                <TableCell className="text-muted/70">
                  Controlled visibility state of the menu.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-foreground">
                  items
                </TableCell>
                <TableCell className="text-[12px] font-mono text-accent">
                  CommandItem[]
                </TableCell>
                <TableCell className="font-mono text-[12px] text-muted">
                  []
                </TableCell>
                <TableCell className="text-muted/70">
                  Array of protocol items to be executed.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Usage */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-muted" />
            <H3>Usage</H3>
          </div>
        </div>
        <UsageBlock
          code={`const [open, setOpen] = React.useState(false);\n\nconst items = [\n  {\n    id: "sys-check",\n    title: "System Diagnostic",\n    description: "Run a full scan of the architectural integrity.",\n    icon: <Cpu size={14} />,\n    category: "System",\n    action: () => runDiagnostics(),\n  },\n];\n\nreturn (\n  <CommandMenu \n    open={open} \n    onOpenChange={setOpen} \n    items={items} \n  />\n);`}
        />
      </section>
    </div>
  );
}
