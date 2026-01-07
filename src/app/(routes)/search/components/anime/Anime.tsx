import { useCallback, useState } from "react";
import { useSearchAnime } from "@/hooks/anime/useSearch";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { cn } from "@/lib/utils";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import styles from "../../styles.module.scss";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import type { SearchAnimeType } from "@/types/anime/search";

export const Anime: React.FC<{ result: string }> = ({ result }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch, isFetching } = useSearchAnime(
    result,
    12,
    page
  );

  const mapAnimeCards = useCallback(
    (item: SearchAnimeType) => (
      <MainCard
        key={item.mal_id + item.title + item.favorites}
        image={item.images.webp?.large_image_url as string}
        title={item.title}
        link={DASHBOARD_PAGES.ANIME.ANIME_ID(`${item.mal_id}`, `${item.title}`)}
        description={`${item.type}`}
        duration={item.duration as string}
        score={item.score}
      />
    ),
    []
  );

  const animeCards = useQueryMappedData(data?.data, mapAnimeCards);

  return (
    <SectionCategory title="anime">
      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={animeCards}
        isRetrying={isFetching}
        onRetry={refetch}
      >
        <div className={cn(styles.search__grid__content)}>{animeCards}</div>
        <PaginationNumbers
          currentPage={page}
          lastPage={data?.pagination?.last_visible_page!}
          onChange={(p) => setPage(p)}
        />
      </QueryState>
    </SectionCategory>
  );
};
