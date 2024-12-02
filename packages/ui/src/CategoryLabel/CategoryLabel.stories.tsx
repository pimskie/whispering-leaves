import type { Meta, StoryObj } from "@storybook/react";

import { CategoryLabel } from "./CategoryLabel";

const meta = {
  title: "CategoryLabel",
  component: CategoryLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof CategoryLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: "brands",
  },
};

export const Stories: Story = {
  args: {
    category: "stories",
  },
};

export const Careers: Story = {
  args: {
    category: "careers",
  },
};
