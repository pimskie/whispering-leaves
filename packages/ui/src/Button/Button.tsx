"use client";

import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";

const buttonStyles = cva(
  // Base styles
  "px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-white hover:bg-primaryHover focus:ring-primary",
        secondary:
          "bg-secondary text-white hover:bg-secondaryHover focus:ring-secondary",
        ghost:
          "bg-transparent text-gray-600 hover:bg-primary hover:text-white focus:ring-primary",
      },
      size: {
        small: "text-sm px-2 py-1",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  appName: string;
}

export const Button = ({
  children,
  className,
  appName,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(buttonStyles(props), className)}
      onClick={() => alert(`Hello from your app "${appName}"!`)}
    >
      <span>{children}</span>
    </button>
  );
};
