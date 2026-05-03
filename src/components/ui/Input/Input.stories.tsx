import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Label } from "../Label";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "artifact"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">Email_Address</Label>
      <Input
        {...args}
        type="email"
        id="email"
        placeholder="Enter your coordinate..."
      />
    </div>
  ),
  args: {
    variant: "default",
  },
};

export const Artifact: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="key" className="text-accent/60">
        Artifact_Key
      </Label>
      <Input {...args} id="key" placeholder="A_07_CORE_X..." />
    </div>
  ),
  args: {
    variant: "artifact",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Locked_Module",
  },
};
