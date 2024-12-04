import type { Meta, StoryObj } from "@storybook/react";

import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "UI/SectionHeading",
  component: SectionHeading,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof SectionHeading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a heading with H1",
    Tag: "h1",
  },
};

export const H2: Story = {
  args: {
    children: "This is a heading with H2",
    Tag: "h2",
  },
};

export const H3: Story = {
  args: {
    children: "This is a heading with H3",
    Tag: "h3",
  },
};

export const H4: Story = {
  args: {
    children: "This is a heading with H4",
    Tag: "h4",
  },
};
