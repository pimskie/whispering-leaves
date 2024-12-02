import styles from "./Tag.module.css";

import { Link } from "../Link/Link";

export interface TagProps {
  url?: string;
  label: string;
}

export const Tag = ({ label, url }: TagProps) => {
  return url ? (
    <Link className={styles.Tag} href={url} title={label ?? undefined}>
      {label}
    </Link>
  ) : (
    <span className={styles.Tag}>{label}</span>
  );
};
