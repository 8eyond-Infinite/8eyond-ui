import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardDescription>System_Log // 01</CardDescription>
        <CardTitle>Standard Module</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-500 text-sm">
          A standard logic module for dashboard data density and clear
          information hierarchy.
        </p>
      </CardContent>
      <CardFooter>
        <span className="text-[10px] font-mono text-zinc-600">
          STATUS: ACTIVE
        </span>
      </CardFooter>
    </Card>
  ),
};

export const Artifact: Story = {
  render: () => (
    <Card variant="artifact" className="max-w-md">
      <CardHeader>
        <CardDescription className="text-accent/60">
          Alchemical_Artifact // 07
        </CardDescription>
        <CardTitle className="text-white">Philosopher&apos;s Stone</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-400 text-sm italic">
          The ultimate digital material. Transparent, refractive, and soul-bound
          to the user interface.
        </p>
      </CardContent>
      <CardFooter>
        <span className="text-[10px] font-mono text-accent">
          VIBRATION: HARMONIC
        </span>
      </CardFooter>
    </Card>
  ),
};
