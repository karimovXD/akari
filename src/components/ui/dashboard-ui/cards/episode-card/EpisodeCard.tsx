import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  TypographyLarge,
  TypographyMuted,
} from "@/components/ui/dashboard-ui/typography/typography";
import { memo } from "react";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";
import { ViewMoreButton } from "../../buttons/ViewMoreButton";

interface PropsType {
  title: string;
  japanese_title: string | null;
  score: null | number;
  aired: string | null;
  url: string | null;
  className: null | string;
}

const EpisodeCard: React.FC<PropsType> = ({
  title,
  japanese_title,
  aired,
  score,
  url,
  className,
}) => {
  const episodeAired = aired ? format(new Date(aired), "dd.MM.yyyy") : null;
  const episodeScore = score !== null && <Badge>Score: {score}</Badge>;
  const episodeJapaneseTitle = japanese_title && (
    <TypographyMuted className="line-clamp-1">{japanese_title}</TypographyMuted>
  );
  const episodeUrl = url && <ViewMoreButton url={url} />;

  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.content}>
        <TypographyLarge className="line-clamp-2">{title}</TypographyLarge>
      </div>
      <div>
        {episodeJapaneseTitle}
        {episodeAired && (
          <TypographyMuted>Aired: {episodeAired}</TypographyMuted>
        )}
      </div>
      <div className={styles.footer}>
        {episodeUrl}
        {episodeScore}
      </div>
    </div>
  );
};

export default memo(EpisodeCard);
