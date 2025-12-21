"use client";
import { useState } from "react";
import { useGetTopAnime } from "@/hooks/anime/useAnime";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import styles from "@/app/(routes)/styles.module.scss";
import { cn } from "@/lib/utils";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";

export const Top = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetTopAnime(24, "bypopularity", page);

  const popularAnime = useQueryMappedData(data?.data, (item, i) => (
    <MainCard
      key={item.mal_id + i * i + item.title}
      image={item.images.webp?.large_image_url}
      title={item.title}
      link={DASHBOARD_PAGES.ANIME.ANIME_ID(
        `${encodeURIComponent(item.mal_id)}`,
        `${encodeURIComponent(item.title)}`
      )}
      description={`${item.type}`}
      duration={item.duration}
      score={item.score}
    />
  ));

  return (
    <SectionCategory title="popular">
      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={data}
        skeletonNumber={24}
      >
        <div className={cn(styles.card__content__grid__content)}>
          {popularAnime}
        </div>
        <PaginationNumbers
          currentPage={page}
          lastPage={data?.pagination?.last_visible_page!}
          onChange={(p) => setPage(p)}
        />
      </QueryState>
    </SectionCategory>
  );
};
