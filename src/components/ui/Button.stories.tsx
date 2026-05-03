import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "alchemist"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Action",
  },
};

export const Alchemist: Story = {
  args: {
    variant: "alchemist",
    children: "Transmute Artifact",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Mode",
  },
};
