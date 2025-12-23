import { memo } from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import Link from "next/link";
import { format } from "date-fns";
import styles from "./styles.module.scss";

interface PropsType {
  title: string;
  date: string;
  author: string;
  content: string;
  link: string;
}

const NewsItem: React.FC<PropsType> = ({
  title,
  author,
  content,
  date,
  link,
}) => {
  const newsDate = format(new Date(date), "dd.MM.yyyy");

  return (
    <Item variant="outline" asChild>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <ItemContent>
          <ItemTitle>{title}</ItemTitle>
          <div className={styles.item__description_content}>
            <ItemDescription>{newsDate}</ItemDescription>
            <ItemDescription>By {author}</ItemDescription>
          </div>
          <p>{content}</p>
        </ItemContent>
      </Link>
    </Item>
  );
};

export default memo(NewsItem);
