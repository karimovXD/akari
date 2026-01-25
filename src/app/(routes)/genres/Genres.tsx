"use client";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { Spinner } from "@/components/ui/spinner";
import { useGetAnimeGenres } from "@/hooks/anime/useGenrese";
import { useCallback } from "react";
import type { AnimeGenresType } from "@/types/anime/genres";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { GenreItem } from "./components/GenreItem";
import "@/styles/grid.scss";

export const Genres = () => {
  const { data, isLoading, isError, isFetching, refetch } = useGetAnimeGenres();

  const mapAnimeGenres = useCallback(
    (item: AnimeGenresType) => (
      <GenreItem item={item} key={item.name + item.mal_id} />
    ),
    []
  );

  const animeGenres = useQueryMappedData(data?.data, mapAnimeGenres);

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      isRetrying={isFetching}
      onRetry={refetch}
      loader={<Spinner />}
    >
      <div className="card__content__grid__long">{animeGenres}</div>
    </QueryState>
  );
};
