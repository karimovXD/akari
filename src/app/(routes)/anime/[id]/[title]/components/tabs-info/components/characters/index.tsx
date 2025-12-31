import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetAnimeCharacters } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import styles from "@/app/(routes)/styles.module.scss";
import { cn } from "@/lib/utils";
import type { AnimeCharacters } from "@/types/anime/anime";
import { useCallback } from "react";

interface PropsType {
  id: number;
}

const Characters: React.FC<PropsType> = ({ id }) => {
  const { data, isLoading, isError, refetch, isFetching } = useGetAnimeCharacters(id);

  const animeCharactersMap = useCallback(
    (item: AnimeCharacters) => (
      <MainCard
        description={item.role}
        image={item.character.images.webp?.image_url as string}
        title={item.character.name}
        link={item.character.url}
        key={item.character.mal_id + item.character.name}
      />
    ),
    []
  );

  const animeCharacters = useQueryMappedData(data?.data, animeCharactersMap);

  return (
    <QueryState isLoading={isLoading} isError={isError} data={data} onRetry={refetch} isRetrying={isFetching}>
      <div className={cn(styles.card__content__grid__content)}>
        {animeCharacters}
      </div>
    </QueryState>
  );
};

export default Characters;
