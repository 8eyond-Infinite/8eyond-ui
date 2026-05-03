import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Label } from "../Label";
import { Terminal, Search } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Core/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    error: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email" size={args.size}>
        Coordinate_Address
      </Label>
      <Input
        {...args}
        type="email"
        id="email"
        placeholder="Enter_Coordinate..."
      />
    </div>
  ),
  args: {
    size: "md",
  },
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="search" size={args.size}>
        System_Search
      </Label>
      <Input
        {...args}
        id="search"
        placeholder="Search_Assets..."
        leftIcon={<Search size={14} />}
      />
    </div>
  ),
  args: {
    size: "md",
  },
};

export const ErrorState: Story = {
  render: (args) => (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="key" size={args.size}>
        Security_Token
      </Label>
      <Input
        {...args}
        id="key"
        error
        placeholder="Invalid_Token..."
        leftIcon={<Terminal size={14} />}
      />
    </div>
  ),
  args: {
    size: "md",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Locked_Module",
    size: "md",
  },
};
