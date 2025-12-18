import { Skeleton } from "@/components/ui/skeleton";
import styles from "./styles.module.scss";

export const Item = () => (
  <div className="flex flex-col gap-1">
    <Skeleton className={styles.item} />
    <Skeleton className="h-2 w-full" />
    <Skeleton className={styles.item__title} />
  </div>
);
