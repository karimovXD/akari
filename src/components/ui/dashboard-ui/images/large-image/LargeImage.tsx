import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

interface LargeImageProps {
  large_image_url: string;
  title: string;
  isPriority?: boolean;
}

export const LargeImage = ({
  large_image_url,
  title,
  isPriority = false,
}: LargeImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={styles.errorContainer}>
        <span className={styles.errorText}>No image</span>
      </div>
    );
  }

  return (
    <div className={styles.imageContainer}>
      <Image
        src={large_image_url}
        alt={title}
        width={200}
        height={280}
        priority={isPriority}
        className={styles.image}
        sizes="200px"
        onError={() => setHasError(true)}
      />
    </div>
  );
};
