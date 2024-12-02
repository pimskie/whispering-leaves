import type { Meta, StoryObj } from "@storybook/react";

import { Tag } from "./Tag";

const meta = {
  title: "Tag",
  component: Tag,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "People & culture",
  },
};

export const WithLink: Story = {
  args: {
    label: "Tag with a link",
    url: "https://www.google.com",
  },
};

export const WithVeryLongContent: Story = {
  args: {
    label: "This tag has way to much text than it should have",
    url: "https://www.google.com",
  },
};
