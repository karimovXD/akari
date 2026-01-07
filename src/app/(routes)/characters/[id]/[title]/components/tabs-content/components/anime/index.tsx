import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetCharacterAnime } from "@/hooks/anime/useCharacters";
import { useCallback } from "react";
import type { CharacterAnimeType } from "@/types/anime/characters";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { LongCard } from "@/components/ui/dashboard-ui/cards/long-card/LongCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { TypographyH2 } from "@/components/ui/dashboard-ui/typography/typography";
import styles from "@/app/(routes)/styles.module.scss";
import { Spinner } from "@/components/ui/spinner";

const Anime = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetCharacterAnime(id);

  const mapCharacterAnime = useCallback(
    (item: CharacterAnimeType) => (
      <LongCard
        key={item.anime.title + item.anime.mal_id}
        alt="character anime"
        badge={item.role}
        title={item.anime.title}
        src={item.anime.images.webp?.image_url}
        url={DASHBOARD_PAGES.ANIME.ANIME_ID(
          `${item.anime.mal_id}`,
          item.anime.title
        )}
      />
    ),
    []
  );

  const popularAnime = useQueryMappedData(data?.data, mapCharacterAnime);

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
          <TypographyH2>Anime {data?.data.length}</TypographyH2>
        )}
        <div className={styles.card__content__grid__long}>{popularAnime}</div>
      </div>
    </QueryState>
  );
};

export default Anime;
