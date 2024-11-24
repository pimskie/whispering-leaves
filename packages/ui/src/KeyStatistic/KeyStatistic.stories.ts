import type { Meta, StoryObj } from "@storybook/react";

import { KeyStatistic } from "./KeyStatistic";

const meta: Meta<typeof KeyStatistic> = {
  component: KeyStatistic,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    statistic: 100,
    description: "Resellers",
  },
};

export const WithSurfix: Story = {
  args: {
    statistic: 50,
    description: "Employees",
    suffix: "+",
  },
};

export const WithoutCounting: Story = {
  args: {
    statistic: 100,
    description: "Happiness",
    suffix: "%",
    count: false,
  },
};
