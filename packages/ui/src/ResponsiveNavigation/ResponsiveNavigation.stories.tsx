import type { Meta, StoryObj } from "@storybook/react";

import { ResponsiveNavigation } from "./ResponsiveNavigation";

const meta = {
  title: "Navigation/ResponsiveNavigation",
  component: ResponsiveNavigation,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ResponsiveNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
