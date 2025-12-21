import { memo } from "react";
import { TypographySmall } from "@/components/ui/dashboard-ui/typography/typography";
import Link from "next/link";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface PropsType {
  title: string;
  image?: string | null;
  link: string;
  description: string;
  duration?: string | null;
  score?: number | null;
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
    <Badge variant={"overlay"}>{duration}</Badge>
  );

  const cardRating = score && (
    <Badge className={cn(styles.image__rating)} variant={"overlay"}>
      <Star /> {score}
    </Badge>
  );

  const cardAdditionalInfo = (
    <div className={cn(styles.image__description__content)}>
      <Badge variant={"overlay"}>{description}</Badge>
      {isDurationHave}
    </div>
  );

  const cardImage = image ?? "/assets/logos/website-logo/akari-logo.png";

  return (
    <Link href={link} className={cn(styles.card)}>
      <div
        className={cn(`${styles.image}`)}
        style={{
          backgroundImage: `url(${cardImage})`,
        }}
      >
        {cardRating}
        {cardAdditionalInfo}
      </div>
      <div className={styles.card__title_content}>
        <TypographySmall className="line-clamp-2">{title}</TypographySmall>
      </div>
    </Link>
  );
};

export default memo(MainCard);
