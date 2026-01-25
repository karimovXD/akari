"use client";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { useGetAnimeByGenre } from "@/hooks/anime/useGenrese";
import type { SearchAnimeType } from "@/types/anime/search";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { useCallback, useState } from "react";
import "@/styles/grid.scss";
import MainHeader from "@/components/dashboard/anime/main/components/main-header";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";

interface PropsType {
  id: string;
  title: string;
}

export const AnimeByGenre: React.FC<PropsType> = ({ title, id }) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isFetching, refetch } = useGetAnimeByGenre(
    24,
    page,
    Number(id)
  );

  const mapbyGenre = useCallback(
    (item: SearchAnimeType) => (
      <MainCard
        key={item.mal_id + item.title}
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
    ),
    []
  );

  const byGenre = useQueryMappedData(data?.data, mapbyGenre);

  return (
    <div className="card__content">
      <MainHeader />
      <SectionCategory title={decodeURIComponent(title)} withUnderline>
        <QueryState
          data={data}
          isLoading={isLoading}
          isError={isError}
          isRetrying={isFetching}
          onRetry={refetch}
        >
          <div className="card__content__grid__content">{byGenre}</div>
          <PaginationNumbers
            currentPage={page}
            lastPage={data?.pagination?.last_visible_page!}
            onChange={(p) => setPage(p)}
          />
        </QueryState>
      </SectionCategory>
    </div>
  );
};
