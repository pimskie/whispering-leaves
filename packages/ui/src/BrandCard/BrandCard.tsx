import { LinkPill } from "../LinkPill/LinkPill";
import styles from "./BrandCard.module.css";

export interface BrandCardProps {
  name: string;
  color: string;
  url: string;
  description: string;
  children?: React.ReactNode;
}

export const BrandCard = (props: BrandCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div
          className={`${styles.cardFace} ${styles.cardFaceFront}`}
          style={{ backgroundColor: props.color }}
        >
          <div className={styles.cardFaceFrontContent}>{props.children}</div>
        </div>

        <div
          className={`${styles.cardFace} ${styles.cardFaceBack}`}
          style={{ backgroundColor: props.color }}
        >
          <div className={styles.cardFaceBackgroundDiffuser}></div>
          <div className={styles.cardFaceContent}>
            <h1>{props.description}</h1>
            <LinkPill url={props.url} isExternal></LinkPill>
          </div>
        </div>
      </div>

      <div className={styles.cardWrapperFooter}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};
