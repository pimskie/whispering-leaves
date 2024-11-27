import { useMemo } from "react";
import { Icon } from "../Icon/Icon";
import { Link } from "../Link/Link";

import styles from "./LinkPill.module.css";

export interface LinkPillProps {
  url: string;
  isExternal?: boolean;
  children?: React.ReactNode;
}

export const LinkPill = ({ url, isExternal, children }: LinkPillProps) => {
  const label = useMemo(() => {
    const urlObject = new URL(url);
    const { origin } = urlObject;

    return origin;
  }, [url]);
  return (
    <Link href={url} className={styles.LinkPill}>
      <span className={styles.LinkPillLabel}>{label}</span>
      <Icon iconName="External" className={styles.LinkPillIcon} />
    </Link>
  );
};
