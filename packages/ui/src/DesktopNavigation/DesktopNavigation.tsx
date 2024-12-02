import styles from "./DesktopNavigation.module.css";
import { Link } from "../Link/Link";

import type { NavigationItem } from "../../types/NavigationItem";

export interface DesktopNavigationProps {
  items: NavigationItem[];
}

export const DesktopNavigation = ({ items }: DesktopNavigationProps) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              className={`${styles.navLink} ${
                location.pathname === item.link
                  ? styles.activeLink
                  : styles.inactiveLink
              }`}
            >
              <span className={styles.navLabel}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
