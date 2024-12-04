import styles from "./SectionHeading.module.css";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface SectionHeadingProps {
  Tag?: HeadingTag;
  children?: React.ReactNode;
}

export const SectionHeading = ({
  Tag = "h1",
  children,
}: SectionHeadingProps) => {
  return (
    <Tag className={`${styles.SectionHeading} ${styles[Tag]}`}>{children}</Tag>
  );
};
