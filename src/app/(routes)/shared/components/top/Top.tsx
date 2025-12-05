"use client";
import React from "react";
import { useGetTopAnime } from "@/hooks/anime/useAnime";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import styles from "@/app/(routes)/styles.module.scss";
import { cn } from "@/lib/utils";

export const Top = () => {
  const { data, isLoading, isError } = useGetTopAnime(12, "bypopularity");

  const popularAnime = React.useMemo(() => {
    if (!data) return [];
    return data.data.map((item, i) => (
      <MainCard
        key={item.mal_id + i * i + item.title}
        image={item.images.webp?.large_image_url as string}
        title={item.title}
        link={DASHBOARD_PAGES.ANIME.ANIME_ID(`${item.mal_id}`, `${item.title}`)}
        description={`${item.type}`}
        duration={item.duration}
      />
    ));
  }, [data]);

  return (
    <>
      <SectionCategory title="popular">
        <QueryState isLoading={isLoading} isError={isError} data={data}>
          <div className={cn(styles.card__content__grid__content)}>
            {popularAnime}
          </div>
        </QueryState>
      </SectionCategory>
    </>
  );
};
