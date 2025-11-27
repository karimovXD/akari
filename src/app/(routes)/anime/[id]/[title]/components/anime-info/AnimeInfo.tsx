import React, { useMemo } from "react";
import AnimeItem from "./AnimeItem";
import { ICON_MAP } from "./ICON_MAP";
import { formatNumber } from "@/utils/format/formatNumbers";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";

interface PropsType {
  aired?: string;
  duration?: string;
  episodes?: number;
  members?: number;
  rank?: number;
  favorites?: number;
}

const AnimeInfo: React.FC<PropsType> = (props) => {
  const animeInfoData = useMemo(() => {
    return Object.entries(ICON_MAP).map(([key, logo]) => {
      const value = props[key as keyof PropsType];
      let description: React.ReactNode;

      if (key === "members" || key === "favorites") {
        description = formatNumber(value as number);
      } else if (key === "rank") {
        description = value !== undefined ? `#${value}` : "-";
      } else {
        description = value ?? "-";
      }

      return { title: key, logo, description };
    });
  }, [props]);

  return (
    <div className={cn(styles.anime__info)}>
      {animeInfoData.map((item) => (
        <AnimeItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default AnimeInfo;
