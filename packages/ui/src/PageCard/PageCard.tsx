import styles from "./PageCard.module.css";
import { Tag, type TagProps } from "../Tag/Tag";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { useMemo } from "react";
import { Link } from "../Link/Link";

import type { VariantProps } from "class-variance-authority";
import { cva, cx } from "class-variance-authority";

const cardStyles = cva(
  // Base styles
  styles.PageCard,
  {
    variants: {
      orientation: {
        vertical: "",
        horizontal: styles.PageCardHorizontal,
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

export interface PageCardProps extends VariantProps<typeof cardStyles> {
  imgSrc: string;
  title: string;
  text: string;
  link: string;
  tags?: TagProps[];
}

export const PageCard = ({
  tags,
  imgSrc,
  link,
  text,
  title,
  ...props
}: PageCardProps) => {
  const truncatedText = useMemo(() => {
    return text.length > 200 ? `${text.substring(0, 200)}...` : text;
  }, [text]);
  return (
    <Link href={link} className={cx(cardStyles(props))}>
      <div
        className={styles.PageCardImageContainer}
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        {tags?.map((t) => (
          <span className={styles.PageCardTag}>
            <Tag label={t.label} />
          </span>
        ))}
      </div>

      <div className={styles.PageCardTitle}>
        <SectionHeading Tag="h2">{title}</SectionHeading>
      </div>

      <div className={styles.PageCardContent}>
        <span className={styles.PageCardText}>{truncatedText}</span>
        <span>Read more</span>
      </div>
    </Link>
  );
};
