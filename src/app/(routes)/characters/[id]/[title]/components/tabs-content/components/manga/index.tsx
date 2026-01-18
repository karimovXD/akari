import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetCharacterManga } from "@/hooks/anime/useCharacters";
import { useCallback } from "react";
import type { CharacterMangaType } from "@/types/anime/characters";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { LongCard } from "@/components/ui/dashboard-ui/cards/long-card/LongCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { TypographyH2 } from "@/components/ui/dashboard-ui/typography/typography";
import styles from "@/app/(routes)/styles.module.scss";
import { Spinner } from "@/components/ui/spinner";

const Manga = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetCharacterManga(id);

  const mapCharacterManga = useCallback(
    (item: CharacterMangaType) => (
      <LongCard
        key={item.manga.title + item.manga.mal_id}
        alt="character manga"
        badge={item.role}
        title={item.manga.title}
        src={item.manga.images.webp?.image_url}
        url={item.manga.url}
      />
    ),
    []
  );

  const popularManga = useQueryMappedData(data?.data, mapCharacterManga);

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      isRetrying={isFetching}
      onRetry={refetch}
      loader={<Spinner />}
    >
      <div className="flex flex-col gap-2">
        {data?.data.length && (
          <TypographyH2>Manga {data?.data.length}</TypographyH2>
        )}
        <div className={styles.card__content__grid__long}>{popularManga}</div>
      </div>
    </QueryState>
  );
};

export default Manga;
