import MediaQuery from "react-responsive";
import styles from "./ResponsiveNavigation.module.css";

import { MobileNavigation } from "../MobileNavigation/MobileNavigation";
import { DesktopNavigation } from "../DesktopNavigation/DesktopNavigation";
import { NavigationItem } from "../../types/NavigationItem";

export interface ResponsiveNavigationProps {}

const items: NavigationItem[] = [
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
];

export const ResponsiveNavigation = ({}: ResponsiveNavigationProps) => {
  return (
    <div className={styles.ResponsiveNavigation}>
      <MediaQuery maxWidth={767}>
        <MobileNavigation items={items} />
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <DesktopNavigation items={items} />
      </MediaQuery>
    </div>
  );
};
