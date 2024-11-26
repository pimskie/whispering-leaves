import type { Meta, StoryObj } from "@storybook/react";

import { BrandCard } from "./BrandCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "BrandCard",
  component: BrandCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: {
      control: { type: "color" },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof BrandCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Mentos",
    color: "blue",
    description:
      "Mentos is a brand of mints and chewy candies known for their refreshing flavors and unique texture.",
    url: "https://www.mentos.nl/",
  },
};
