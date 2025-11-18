import React from "react";
import {
  TypographyMuted,
  TypographySmall,
} from "@/components/ui/dashboard-ui/typography/typography";
import Link from "next/link";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";

interface PropsType {
  title: string;
  image: string;
  link: string;
  description: string;
  duration?: string;
}

const MainCard: React.FC<PropsType> = ({
  title,
  image,
  link,
  description,
  duration = "",
}) => {
  const isDurationHave = duration && (
    <>
      <TypographyMuted className={cn(styles.card__description)}>
        -
      </TypographyMuted>
      <TypographyMuted className={cn(styles.card__description)}>
        {duration}
      </TypographyMuted>
    </>
  );

  return (
    <Link href={link}>
      <div
        className={cn(`${styles.card}`)}
        style={{
          backgroundImage: `url(${image as string})`,
        }}
      >
        <TypographySmall className={cn(styles.card__title)}>
          {title}
        </TypographySmall>
        <div className={cn(styles.card__description__content)}>
          <TypographyMuted className={cn(styles.card__description)}>
            {description}
          </TypographyMuted>
          {isDurationHave}
        </div>
      </div>
    </Link>
  );
};

export default React.memo(MainCard);
