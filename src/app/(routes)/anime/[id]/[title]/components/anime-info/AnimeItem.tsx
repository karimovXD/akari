import { memo } from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import styles from "./styles.module.scss";

interface AnimeItemProps {
  title: string;
  description: React.ReactNode;
  logo: React.ReactNode;
}

const AnimeItem: React.FC<AnimeItemProps> = ({ title, description, logo }) => (
  <Item size="sm" className={styles.anime_info__anime_item} variant="outline">
    <ItemMedia variant="image">{logo}</ItemMedia>
    <ItemContent>
      <ItemTitle className="capitalize">{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
    </ItemContent>
  </Item>
);

export default memo(AnimeItem);
