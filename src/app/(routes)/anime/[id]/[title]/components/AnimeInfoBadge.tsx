import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { formatNumber } from "@/utils/format/formatNumbers";
import styles from "../styles.module.scss";

interface PropsType {
  score: number;
  scored_by: number;
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
  return (
    <div className={styles.anime__content__article_info_badge}>
      <Badge variant={"secondary"}>
        <Star /> {score} ({formatNumber(scored_by)})
      </Badge>
      <Badge variant={"outline"}>{rating}</Badge>
      <Badge>{status}</Badge>
    </div>
  );
};
