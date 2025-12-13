import styles from "./styles.module.scss";
import { Item } from "./Item";

const SkeletonContent = ({ number = 12 }: { number?: number }) => {
  return (
    <div className={styles.grid__content}>
      {Array.from(Array(number)).map((_, i) => (
        <Item key={i} />
      ))}
    </div>
  );
};

export default SkeletonContent;
