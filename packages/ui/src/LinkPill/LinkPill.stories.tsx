import type { Meta, StoryObj } from "@storybook/react";

import { LinkPill } from "./LinkPill";

const meta = {
  title: "LinkPill",
  component: LinkPill,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    isExternal: {
      control: "boolean",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof LinkPill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://www.google.com",
  },
};

export const External: Story = {
  args: {
    url: "https://tweakers.net/",
    isExternal: true,
  },
};
