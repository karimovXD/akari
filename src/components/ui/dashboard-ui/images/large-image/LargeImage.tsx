import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";

interface LargeIMageProps {
  large_image_url: string;
  title: string;
  isPriority?: boolean;
}

export const LargeImage: React.FC<LargeIMageProps> = ({
  large_image_url,
  title,
  isPriority = false,
}) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (imageError) {
    return (
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <div className={styles.errorIcon}>🖼️</div>
          <p className={styles.errorText}>Failed to load image</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.imageContainer}>
      {isLoading && <div className={styles.loadingSkeleton} />}

      <Image
        src={large_image_url}
        fill
        alt={title}
        priority={isPriority}
        className={cn(styles.image, isLoading ? styles.loading : styles.loaded)}
        sizes="(max-width: 768px) 100vw, 300px"
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setImageError(true);
          setIsLoading(false);
        }}
      />

      <div className={styles.overlay} />
    </div>
  );
};
