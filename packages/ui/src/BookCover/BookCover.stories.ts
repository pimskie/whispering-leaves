import type { Meta, StoryObj } from "@storybook/react";

import { BookCover } from "./BookCover";

const meta: Meta<typeof BookCover> = {
  component: BookCover,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
