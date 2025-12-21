import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { formatNumber } from "@/utils/format/formatNumbers";
import styles from "../styles.module.scss";

interface PropsType {
  score?: number | null;
  scored_by?: number | null;
  rating: string;
  status: string;
}

type OptionalProps = Partial<PropsType>;

export const AnimeInfoBadge: React.FC<OptionalProps> = ({
  score,
  scored_by,
  rating,
  status,
}) => {
  const scoreBadge =
    score != null ? (
      <Badge variant="secondary">
        <Star /> {score} {scored_by ? `(${formatNumber(scored_by)})` : ""}
      </Badge>
    ) : scored_by ? (
      <Badge variant="secondary">
        <Star /> Not scored ({formatNumber(scored_by)})
      </Badge>
    ) : null;

  return (
    <div className={styles.anime__content__article_info_badge}>
      {scoreBadge}
      <Badge variant={"outline"}>{rating}</Badge>
      <Badge>{status}</Badge>
    </div>
  );
};
