"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  Badge,
  Button,
  Card,
  CommandMenu,
  Gauge,
  H1,
  H3,
  Input,
  Label,
  Progress,
  ScrollArea,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Slider,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Muted,
} from "@/components/ui";
import {
  Activity,
  Cpu,
  Database,
  LayoutGrid,
  Search,
  Settings,
  Shield,
  Terminal,
  Zap,
  Bell,
  Power,
  Maximize2,
  RefreshCw,
  LogOut,
  User,
  PanelRight,
} from "lucide-react";

import { cn } from "@/lib/utils";

export default function OperatorConsole() {
  const [isCommandOpen, setIsCommandOpen] = React.useState(false);
  const [isDiagnosticOpen, setIsDiagnosticOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [powerLevel, setPowerLevel] = React.useState(75);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const commandItems = [
    {
      id: "restart-sys",
      title: "Restart Core Systems",
      description: "Initialize a full system reboot sequence.",
      icon: <RefreshCw size={14} />,
      category: "System",
      action: () => console.log("Restarting..."),
    },
    {
      id: "emergency-shutdown",
      title: "Emergency Shutdown",
      description: "Immediate termination of all active protocols.",
      icon: <Power size={14} />,
      category: "System",
      action: () => console.log("Shutting down..."),
    },
    {
      id: "op-profile",
      title: "Operator Profile",
      description: "View access logs and credentials.",
      icon: <User size={14} />,
      category: "Account",
      action: () => console.log("Opening profile..."),
    },
  ];

  if (loading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center gap-6 bg-background">
        <Spinner variant="turbine" size="xl" />
        <div className="text-center space-y-2">
          <div className="text-xs font-mono text-muted uppercase tracking-[0.2em] animate-pulse">
            Initializing_Archon_Link
          </div>
          <div className="text-[10px] font-mono text-muted/50 italic">
            Clearing synaptic buffers...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex overflow-hidden bg-background">
      <aside className="w-64 border-r border-border bg-foreground/[0.015] flex flex-col z-20">
        <div className="p-6 border-b border-border/50 bg-background/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-accent flex items-center justify-center text-white shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)]">
              <Zap size={20} />
            </div>
            <div className="space-y-0.5">
              <div className="text-[11px] font-bold uppercase tracking-tight">
                8eyond_Core
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-mono text-muted uppercase tracking-widest">
                  Link_Stable
                </span>
              </div>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4 space-y-8">
            {/* Primary Navigation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-[9px] font-mono text-muted uppercase tracking-[0.2em]">
                  Main_Bridge
                </span>
                <div className="w-8 h-[1px] bg-border/30" />
              </div>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 gap-3 text-[11px] bg-foreground/[0.05] border border-border/50"
                >
                  <LayoutGrid size={14} className="text-accent" /> Dashboard
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 gap-3 text-[11px] text-muted hover:text-foreground"
                >
                  <Database size={14} /> Data Matrix
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 gap-3 text-[11px] text-muted hover:text-foreground"
                >
                  <Terminal size={14} /> Terminal
                </Button>
              </div>
            </div>

            {/* Security & Config */}
            <div className="space-y-3">
              <div className="flex items-center justify-between px-2">
                <span className="text-[9px] font-mono text-muted uppercase tracking-[0.2em]">
                  Defense_Grid
                </span>
                <div className="w-8 h-[1px] bg-border/30" />
              </div>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 gap-3 text-[11px] text-muted hover:text-foreground"
                >
                  <Shield size={14} /> Protocols
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-10 gap-3 text-[11px] text-muted hover:text-foreground"
                >
                  <Settings size={14} /> Core Config
                </Button>
              </div>
            </div>

            {/* System Resources */}
            <div className="space-y-3 px-2">
              <div className="text-[9px] font-mono text-muted uppercase tracking-[0.2em] mb-4">
                Live_Feeds
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[8px] font-mono uppercase">
                    <span className="text-muted">CPU_Load</span>
                    <span className="text-accent">42%</span>
                  </div>
                  <div className="h-1 bg-foreground/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      animate={{ width: "42%" }}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[8px] font-mono uppercase">
                    <span className="text-muted">Net_Stream</span>
                    <span className="text-emerald-500">Normal</span>
                  </div>
                  <div className="h-1 bg-foreground/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-emerald-500"
                      initial={{ width: 0 }}
                      animate={{ width: "15%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border/50 bg-background/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 p-3 rounded-sm border border-border bg-background shadow-sm hover:border-accent/30 transition-all cursor-pointer group active:scale-[0.98]">
            <Avatar variant="technical" status="online" size="md" />
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold uppercase truncate tracking-tight">
                Archon_Unit_01
              </div>
              <div className="text-[8px] font-mono text-muted uppercase">
                Clearance_Level_04
              </div>
            </div>
            <LogOut
              size={12}
              className="text-muted group-hover:text-red-500 transition-colors"
            />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-background/50 backdrop-blur-md flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-6">
            <div
              className="flex items-center gap-3 px-4 h-9 rounded-sm border border-border bg-foreground/[0.03] cursor-pointer hover:border-accent/30 transition-all w-80 group"
              onClick={() => setIsCommandOpen(true)}
            >
              <Search
                size={14}
                className="text-muted group-hover:text-accent transition-colors"
              />
              <span className="text-xs text-muted flex-1">
                Search system artifacts...
              </span>
              <kbd className="px-1.5 py-0.5 rounded-sm border border-border bg-background text-[9px] font-mono text-muted">
                ⌘K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 pr-4 border-r border-border/50">
              <Badge
                variant="outline"
                className="h-6 bg-emerald-500/5 text-emerald-500 border-emerald-500/20 gap-1.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                SYSTEM_STABLE
              </Badge>
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={18} className="text-muted" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background" />
            </Button>
            <Sheet open={isDiagnosticOpen} onOpenChange={setIsDiagnosticOpen}>
              <SheetTrigger>
                <Button variant="ghost" size="icon">
                  <PanelRight size={18} className="text-muted" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[400px]">
                <SheetHeader>
                  <SheetTitle>Diagnostic View</SheetTitle>
                  <SheetDescription>
                    Real-time sector analysis and breach monitoring.
                  </SheetDescription>
                </SheetHeader>
                <div className="p-6 space-y-8">
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest text-muted font-bold">
                      Sector Telemetry
                    </Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Gauge
                        value={85}
                        size={120}
                        label="Sector 01 Load"
                        variant="technical"
                      />
                      <Gauge
                        value={22}
                        size={120}
                        label="Sector 02 Heat"
                        variant="danger"
                      />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase tracking-widest text-muted font-bold">
                      Protocol Logs
                    </Label>
                    <ScrollArea className="h-[300px] rounded-sm border border-border bg-foreground/[0.02] p-4">
                      <div className="space-y-3 font-mono text-[10px]">
                        <div className="text-accent">
                          [08:22:11] INITIALIZING SCAN...
                        </div>
                        <div className="text-muted">
                          [08:22:15] Access granted to Archon_01
                        </div>
                        <div className="text-emerald-500">
                          [08:22:20] Sector 07 integrity confirmed
                        </div>
                        <div className="text-amber-500">
                          [08:23:01] Power fluctuation detected in Grid B
                        </div>
                        <div className="text-muted">
                          [08:23:05] Automated compensators active
                        </div>
                        <div className="text-accent">
                          [08:23:10] SCAN COMPLETE. 0 ERRORS.
                        </div>
                        {Array.from({ length: 20 }).map((_, i) => (
                          <div key={i} className="text-muted/50 opacity-50">
                            [08:24:{10 + i}] System_Idle_Pulse_Recieved
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* Viewport Content */}
        <ScrollArea className="flex-1 p-8">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Page Title */}
            <div className="flex items-end justify-between">
              <div className="space-y-1">
                <div className="text-[10px] font-mono text-accent uppercase tracking-[0.3em]">
                  Sector_7G
                </div>
                <H1 className="text-4xl">System Control Center</H1>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="gap-2">
                  <Maximize2 size={14} /> Fullscreen
                </Button>
                <Button className="gap-2 bg-accent shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]">
                  <RefreshCw size={14} /> Force Sync
                </Button>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  label: "Neural Load",
                  value: 42,
                  icon: <Activity />,
                  variant: "default" as const,
                },
                {
                  label: "Core Temp",
                  value: 68,
                  icon: <Zap />,
                  variant: "technical" as const,
                },
                {
                  label: "Sync Integrity",
                  value: 94,
                  icon: <Shield />,
                  variant: "success" as const,
                },
                {
                  label: "Mem Overflow",
                  value: 12,
                  icon: <Cpu />,
                  variant: "technical" as const,
                },
              ].map((m) => (
                <Card
                  key={m.label}
                  className="p-6 space-y-4 hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-sm bg-foreground/[0.03] text-accent">
                      {React.cloneElement(m.icon as React.ReactElement)}
                    </div>
                    <Badge
                      variant="outline"
                      className="text-[9px] font-mono opacity-50"
                    >
                      REAL_TIME
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[9px] font-mono text-muted uppercase tracking-widest">
                      {m.label}
                    </div>
                    <div className="text-2xl font-bold font-mono tracking-tighter">
                      {m.value}%
                    </div>
                  </div>
                  <Progress
                    value={m.value}
                    variant={m.variant}
                    className="h-1.5"
                  />
                </Card>
              ))}
            </div>

            {/* Main Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Process Matrix */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="overflow-hidden">
                  <div className="p-6 border-b border-border bg-foreground/[0.02] flex items-center justify-between">
                    <H3>Active Protocol Matrix</H3>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Filter matrix..."
                        className="h-8 w-40 text-[10px]"
                      />
                      <Button variant="outline" size="sm" className="h-8">
                        Export
                      </Button>
                    </div>
                  </div>
                  <Table variant="technical">
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Protocol</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Entropy</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: "0x88A",
                          name: "Synaptic_Reflex",
                          status: "Running",
                          entropy: "0.04",
                        },
                        {
                          id: "0x92F",
                          name: "Grid_Synchronization",
                          status: "Optimizing",
                          entropy: "0.12",
                        },
                        {
                          id: "0xA11",
                          name: "Neural_Firewall_V4",
                          status: "Active",
                          entropy: "0.00",
                        },
                        {
                          id: "0xB03",
                          name: "Thermal_Recirculation",
                          status: "Warning",
                          entropy: "0.88",
                        },
                        {
                          id: "0xC99",
                          name: "Data_Harvest_Alpha",
                          status: "Standby",
                          entropy: "0.01",
                        },
                      ].map((row) => (
                        <TableRow key={row.id}>
                          <TableCell className="font-mono text-accent">
                            {row.id}
                          </TableCell>
                          <TableCell className="font-bold">
                            {row.name}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={cn(
                                "text-[9px] border-none",
                                row.status === "Warning"
                                  ? "text-red-500"
                                  : "text-muted"
                              )}
                            >
                              {row.status.toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-mono text-muted">
                            {row.entropy}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </div>

              {/* Technical Controls */}
              <div className="space-y-8">
                <Card className="p-8 space-y-8">
                  <div className="space-y-1">
                    <H3>Manual Overrides</H3>
                    <Muted className="text-[10px]">
                      Direct system parameter manipulation.
                    </Muted>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase font-bold text-muted">
                        Primary Power Output
                      </Label>
                      <Slider
                        value={powerLevel}
                        onChange={setPowerLevel}
                        unit="MW"
                        label="Core Reactor"
                      />
                      <div className="flex justify-between text-[9px] font-mono text-muted">
                        <span>0 MW</span>
                        <span className={powerLevel > 90 ? "text-red-500" : ""}>
                          {powerLevel} MW
                        </span>
                        <span>100 MW</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-[11px] font-bold">
                            Encryption Layers
                          </div>
                          <div className="text-[9px] text-muted font-mono italic">
                            Sector-wide security hardening
                          </div>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-[11px] font-bold">
                            Thermal Venting
                          </div>
                          <div className="text-[9px] text-muted font-mono italic">
                            Manual coolant release
                          </div>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full h-12 uppercase text-[10px] tracking-widest bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                        Emergency_Protocol_X
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Status Ticker */}
                <Card className="p-4 bg-accent/[0.03] border-accent/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                      <Activity size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold uppercase">
                        Signal Health
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-1 flex-1 bg-foreground/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-accent"
                            animate={{ width: ["20%", "80%", "40%", "90%"] }}
                            transition={{
                              repeat: Infinity,
                              duration: 4,
                              ease: "linear",
                            }}
                          />
                        </div>
                        <span className="text-[9px] font-mono text-accent">
                          STABLE
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Command Menu Portal */}
        <CommandMenu
          open={isCommandOpen}
          onOpenChange={setIsCommandOpen}
          items={commandItems}
        />
      </main>
    </div>
  );
}
