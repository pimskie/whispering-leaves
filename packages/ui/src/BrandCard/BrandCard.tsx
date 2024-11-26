import styles from "./BrandCard.module.css";

export interface BrandCardProps {
  name: string;
  color: string;
  url: string;
  description: string;
}

export const BrandCard = (props: BrandCardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card} style={{ backgroundColor: props.color }}>
        <div className={styles.cardFace}>
          <h1>{props.name}</h1>
        </div>

        <div className={`${styles.cardFace} ${styles.cardFaceBack}`}>
          <h1>{props.description}</h1>
        </div>
      </div>
    </div>
  );
};
