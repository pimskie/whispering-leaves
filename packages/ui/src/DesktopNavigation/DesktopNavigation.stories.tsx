import type { Meta, StoryObj } from "@storybook/react";

import { DesktopNavigation } from "./DesktopNavigation";

const meta = {
  title: "navigation/DesktopNavigation",
  component: DesktopNavigation,

  parameters: {
    layout: "fullscreen",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof DesktopNavigation>;

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
