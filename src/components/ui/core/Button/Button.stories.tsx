import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "ghost",
        "destructive",
        "outline",
        "success",
      ],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary_Action",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "System_Static",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost_Protocol",
    size: "md",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Decommission_Module",
    size: "md",
  },
};
