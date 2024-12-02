import type { Meta, StoryObj } from "@storybook/react";

import { MobileNavigation } from "./MobileNavigation";

const meta = {
  title: "navigation/MobileNavigation",
  component: MobileNavigation,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof MobileNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        id: "Stories",
        label: "Stories",
        link: "/stories",
      },
      {
        id: "about",
        label: "About us",
        link: "/about-us",
      },
      {
        id: "people",
        label: "Our people",
        link: "/our-people",
      },
      {
        id: "brands",
        label: "Brands",
        link: "/brands",
      },
    ],
  },
};
