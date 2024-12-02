import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";

import { Link } from "../Link/Link";

import styles from "./MobileNavigation.module.css";

import type { NavigationItem } from "../../types/NavigationItem";

export interface MobileNavigationProps {
  items: NavigationItem[];
}

const prefersReduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion)").matches;

const duration = prefersReduceMotion() ? 0 : 0.5;
const tl = gsap.timeline();

export const MobileNavigation = ({ items }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("O");

  const backgroundPathRef = useRef(null);
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const navigationContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<typeof tl>();

  const setListItemRef = useCallback(
    (element: HTMLLIElement | null, index: number) => {
      listItemRefs.current[index] = element;
    },
    []
  );

  const setNavigationVisible = (o: Boolean) => {
    const value = o ? "block" : "none";

    navigationContainerRef.current!.style.display = value;
  };

  useEffect(() => {
    gsap.set(listItemRefs.current, { opacity: 0, translateX: -30 });

    tl.to(backgroundPathRef.current, {
      duration: duration,
      attr: {
        d: "M0 0 L50 0 Q70 50, 50 70 T30 100 L0 100 Z",
      },
      ease: "power2.in",
    })
      .to(backgroundPathRef.current, {
        duration: duration,
        attr: {
          d: "M0 0 L100 0 Q120 50, 100 100 T100 100 L0 100 Z",
        },
        ease: "power2.out",
      })
      .to(
        listItemRefs.current,
        {
          duration: duration,
          opacity: 1,
          translateX: 0,
          ease: "power2.out",
        },
        "<"
      )
      .pause();

    timelineRef.current = tl;
  }, [backgroundPathRef, listItemRefs]);

  useEffect(() => {
    if (!timelineRef.current) {
      return;
    }

    const newButtonLabel = isOpen ? "C" : "O";
    setButtonLabel(newButtonLabel);

    const animation = isOpen
      ? timelineRef.current.play()
      : timelineRef.current.reverse();

    if (isOpen) {
      navigationContainerRef.current!.style.display = "block";
    }

    animation.eventCallback("onComplete", () => {
      setNavigationVisible(isOpen);
    });

    animation.eventCallback("onReverseComplete", () => {
      setNavigationVisible(isOpen);
    });
  }, [isOpen]);

  const toggle = useCallback(() => {
    setIsOpen((p) => !p);
  }, []);

  return (
    <div>
      <button onClick={toggle} className={styles.MobileNavigationToggle}>
        {buttonLabel}
      </button>

      <div className={styles.MobileNavigation} ref={navigationContainerRef}>
        <svg
          className={styles.MobileNavigationBackground}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            className="js-wave-path"
            d="M0 0 L0 0 Q0 0, 0 60 T0 100 L0 100"
            fill="#3498db"
            ref={backgroundPathRef}
          />
        </svg>

        <nav className={`${styles.MobileNavigationNav} is-hidden`}>
          <ul className={styles.MobileNavigationList}>
            {items.map((item, index) => (
              <li
                className={styles.MobileNavigationItem}
                key={item.id}
                ref={(el) => setListItemRef(el, index)}
              >
                <Link
                  href={item.link}
                  className={`${styles.MobileNavigationLink} ${
                    location.pathname === item.link
                      ? styles.activeLink
                      : styles.inactiveLink
                  }`}
                >
                  <span className={styles.MobileNavigationLabel}>
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
