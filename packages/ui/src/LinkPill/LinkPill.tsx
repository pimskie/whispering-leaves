import { useMemo } from "react";
import { Icon } from "../Icon/Icon";
import { Link } from "../Link/Link";
import styles from "./LinkPill.module.css";

export interface LinkPillProps {
  url: string;
  isExternal?: boolean;
  children?: React.ReactNode;
}

export const LinkPill = ({
  url,
  isExternal = false,
  children,
}: LinkPillProps) => {
  const label = useMemo(() => {
    const urlObject = new URL(url);
    return urlObject.origin;
  }, [url]);

  return (
    <Link
      href={url}
      className={styles.LinkPill}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <span className={styles.LinkPillLabel}>{label}</span>
      {isExternal && (
        <Icon iconName="External" className={styles.LinkPillIcon} />
      )}
    </Link>
  );
};
