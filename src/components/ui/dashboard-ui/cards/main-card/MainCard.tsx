import { memo } from "react";
import { TypographySmall } from "@/components/ui/dashboard-ui/typography/typography";
import Link from "next/link";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface PropsType {
  title: string;
  image: string;
  link: string;
  description: string;
  duration?: string;
  score?: number;
}

const MainCard: React.FC<PropsType> = ({
  title,
  image,
  link,
  description,
  score,
  duration = "",
}) => {
  const isDurationHave = duration && (
    <div
      className={cn(
        styles.card__badge,
        "bg-secondary text-secondary-foreground"
      )}
    >
      {duration}
    </div>
  );

  const cardRating = score && (
    <Badge className={cn(styles.card__rating)} variant={"secondary"}>
      <Star /> {score}
    </Badge>
  );

  const cardAdditionalInfo = (
    <div className={cn(styles.card__description__content)}>
      <div
        className={cn(
          styles.card__badge,
          "bg-secondary text-secondary-foreground"
        )}
      >
        {description}
      </div>
      {isDurationHave}
    </div>
  );

  return (
    <Link href={link}>
      <div
        className={cn(`${styles.card}`)}
        style={{
          backgroundImage: `url(${image as string})`,
        }}
      >
        {cardRating}
        <TypographySmall className={cn(styles.card__title)}>
          {title}
        </TypographySmall>
        {cardAdditionalInfo}
      </div>
    </Link>
  );
};

export default memo(MainCard);
