import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Button,
  Card,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Input,
  Label,
} from "@/components/ui";

export default function DialogDoc() {
  return (
    <div className="space-y-16 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Dialog
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-normal leading-relaxed">
          An immersive overlay portal. Interrupts the architectural flow to
          capture focus and facilitate logical confirmation with technical
          clarity.
        </p>
      </div>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Standard_Interaction
        </h3>
        <Card
          variant="artifact"
          className="p-12 bg-white/[0.01] flex flex-wrap gap-4 justify-center"
        >
          {/* Example 1: Destructive Action */}
          <Dialog>
            <DialogTrigger>
              <Button variant="destructive">Corrosive_Delete</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Critical_System_Deletion</DialogTitle>
                <DialogDescription>
                  This action is irreversible. Are you sure you want to purge
                  the current architectural node?
                </DialogDescription>
              </DialogHeader>
              <div className="bg-red-500/5 border border-red-500/20 p-4 rounded text-[11px] font-mono text-red-500/80 italic">
                {"// Warning: All associated metadata will be erased."}
              </div>
              <DialogFooter>
                <Button variant="ghost">Abort_Process</Button>
                <Button variant="destructive">Confirm_Purge</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Example 2: Form Input */}
          <Dialog>
            <DialogTrigger>
              <Button variant="secondary">Inscribe_New_User</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add_System_Operator</DialogTitle>
                <DialogDescription>
                  Create a new access identity for the 8eyond network.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 my-4">
                <div className="space-y-2">
                  <Label htmlFor="op-name">Operator_Name</Label>
                  <Input id="op-name" placeholder="Valkyrie_01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="op-access">Access_Key</Label>
                  <Input
                    id="op-access"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="ghost">Cancel</Button>
                <Button variant="alchemist">Initialize_Key</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Example 3: Success Confirmation */}
          <Dialog>
            <DialogTrigger>
              <Button variant="success">Sync_Protocol</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-emerald-500">
                  Alignment_Complete
                </DialogTitle>
                <DialogDescription>
                  All architectural nodes have been successfully synchronized
                  with the central lead essence.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="success" className="w-full">
                  Continue_Flow
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          API_Reference
        </h3>
        <Card className="overflow-hidden border-white/5 bg-black/20">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Prop</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Default</TableHead>
                <TableHead>Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-mono text-accent">open</TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  boolean
                </TableCell>
                <TableCell className="font-mono text-[12px]">false</TableCell>
                <TableCell>Controlled open state of the dialog.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-mono text-accent">
                  onOpenChange
                </TableCell>
                <TableCell className="text-[12px] font-mono text-zinc-500">
                  (open: boolean) ={">"} void
                </TableCell>
                <TableCell className="font-mono text-[12px]">null</TableCell>
                <TableCell>
                  Event handler called when open state changes.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      <section className="space-y-8">
        <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-600">
          Usage
        </h3>
        <Card className="p-8 bg-black/40 font-mono text-sm border-white/5">
          <pre className="text-zinc-400 overflow-x-auto">
            {`import { Dialog, DialogTrigger, ... } from "@/components/ui";

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`}
          </pre>
        </Card>
      </section>
    </div>
  );
}
