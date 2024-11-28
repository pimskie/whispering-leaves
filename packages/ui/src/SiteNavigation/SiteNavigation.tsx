import styles from "./SiteNavigation.module.css";
import { Link } from "../Link/Link";

export interface NavigationItem {
  id: string;
  link: string;
  label: string;
}

export interface SiteNavigationProps {
  items: NavigationItem[];
}

export const SiteNavigation = ({ items }: SiteNavigationProps) => {
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
