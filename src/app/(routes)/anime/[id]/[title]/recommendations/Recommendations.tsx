"use client";
import React from "react";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { useGetAnimeRecommendations } from "@/hooks/anime/useAnime";
import type { AnimeRecommendations } from "@/types/anime/anime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { useCallback } from "react";
import styles from "@/app/(routes)/styles.module.scss";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { BackButton } from "@/components/ui/dashboard-ui/buttons/BackButton";

export const Recommendations = ({ id }: { id: number }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetAnimeRecommendations(id);

  const mapPopularAnime = useCallback(
    (item: AnimeRecommendations) => (
      <MainCard
        key={item.entry.mal_id + item.entry.title}
        image={item.entry.images.webp?.large_image_url}
        title={item.entry.title}
        link={DASHBOARD_PAGES.ANIME.ANIME_ID(
          `${encodeURIComponent(item.entry.mal_id)}`,
          `${encodeURIComponent(item.entry.title)}`
        )}
        description={`recommendation`}
      />
    ),
    []
  );

  const popularAnime = useQueryMappedData(data?.data, mapPopularAnime);

  return (
    <div className="flex flex-col gap-2 items-start">
      <BackButton />
      <SectionCategory title="recommendation" withUnderline>
        <QueryState
          isLoading={isLoading}
          data={data}
          isError={isError}
          isRetrying={isFetching}
          onRetry={refetch}
        >
          <div className={styles.card__content__grid__content}>
            {popularAnime}
          </div>
        </QueryState>
      </SectionCategory>
    </div>
  );
};
