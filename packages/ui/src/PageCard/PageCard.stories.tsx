import type { Meta, StoryObj } from "@storybook/react";

import { PageCard } from "./PageCard";

const meta = {
  title: "PageCard",
  component: PageCard,

  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof PageCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: "#",
    imgSrc: "https://picsum.photos/400/300",
    title: "For a better world",
    text: "Sweet Haven Candy Co. is renowned for crafting delightful confections that evoke nostalgia and bring joy to candy lovers of all ages. With a commitment to quality, they use only the finest ingredients to create their signature chocolate truffles and vibrant gummy assortments. Their innovative approach to flavor combinations, like sea salt caramel and raspberry lemonade, keeps customers coming back for more. Beyond taste, Sweet Haven maintains a steadfast dedication to sustainability, ensuring all packaging is eco-friendly and responsibly sourced. The brand fosters community ties through “Sweet Giving,” an initiative that supports local schools and charities with a portion of their proceeds.",
  },
};

export const WithTags: Story = {
  args: {
    link: "#",
    imgSrc: "https://picsum.photos/400/300",
    title: "For a better world",
    text: "Sweet Haven Candy Co. is renowned for crafting delightful confections that evoke nostalgia and bring joy to candy lovers of all ages. With a commitment to quality, they use only the finest ingredients to create their signature chocolate truffles and vibrant gummy assortments. Their innovative approach to flavor combinations, like sea salt caramel and raspberry lemonade, keeps customers coming back for more. Beyond taste, Sweet Haven maintains a steadfast dedication to sustainability, ensuring all packaging is eco-friendly and responsibly sourced. The brand fosters community ties through “Sweet Giving,” an initiative that supports local schools and charities with a portion of their proceeds.",
    tags: [{ label: "Brands & identity" }, { label: "People & culture" }],
  },
};
