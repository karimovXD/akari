import Link from "next/link";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { TypographyLarge } from "@/components/ui/dashboard-ui/typography/typography";
import type { AnimeGenresType } from "@/types/anime/genres";
import { memo } from "react";
import { Badge } from "@/components/ui/badge";

interface PropsType {
  item: AnimeGenresType;
}

export const GenreItem: React.FC<PropsType> = memo(({ item }) => {
  const variantReturnLogic = () => {
    if (item.count >= 4000) {
      return "destructive";
    } else if (item.count >= 1000) {
      return "default";
    } else {
      return "secondary";
    }
  };

  return (
    <Link href={DASHBOARD_PAGES.GENRES.GENRE_ID(`${item.mal_id}`, item.name)}>
      <div className="select-none transition border p-4 -rotate-4 hover:-rotate-2 flex items-center justify-between flew-wrap">
        <TypographyLarge>{item.name}</TypographyLarge>
        <Badge variant={variantReturnLogic()}>{item.count}</Badge>
      </div>
    </Link>
  );
});

GenreItem.displayName = "GenreItem";
