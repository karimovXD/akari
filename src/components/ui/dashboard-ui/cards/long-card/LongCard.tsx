import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { memo } from "react";
import { TypographyMuted } from "../../typography/typography";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";

interface PropsType {
  title: string;
  src?: string;
  alt?: string;
  badge?: string;
  url: string;
}

export const LongCard = memo(
  ({ title, src, alt = "", badge, url }: PropsType) => {
    return (
      <Link href={url}>
        <div className={cn(styles.long_card, "border rounded")}>
          {src && (
            <Image
              src={src}
              alt={alt}
              width={62}
              height={62}
              className="object-cover rounded"
            />
          )}
          <div className={styles.long_card__content}>
            <TypographyMuted className="line-clamp-2 whitespace-pre-line">
              {title}
            </TypographyMuted>
            {badge && <Badge variant="default">{badge}</Badge>}
          </div>
        </div>
      </Link>
    );
  }
);

LongCard.displayName = "LongCard";
