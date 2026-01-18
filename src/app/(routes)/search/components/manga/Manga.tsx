import { useCallback, useState } from "react";
import { useSearchManga } from "@/hooks/anime/useSearch";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { cn } from "@/lib/utils";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import styles from "../../styles.module.scss";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import type { SearchMangaType } from "@/types/anime/search";

export const Manga: React.FC<{ result: string }> = ({ result }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch, isFetching } = useSearchManga(
    result,
    12,
    page
  );

  const mapMangaCards = useCallback(
    (item: SearchMangaType) => (
      <MainCard
        key={item.mal_id + item.title + item.authors}
        image={item.images.webp?.large_image_url as string}
        title={item.title}
        link={item.url}
        description={`${item.type}`}
        score={item.score}
      />
    ),
    []
  );

  const mangaCards = useQueryMappedData(data?.data, mapMangaCards);

  return (
    <SectionCategory title="manga">
      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={mangaCards}
        isRetrying={isFetching}
        onRetry={refetch}
      >
        <div className={cn(styles.search__grid__content)}>{mangaCards}</div>
        <PaginationNumbers
          currentPage={page}
          lastPage={data?.pagination?.last_visible_page!}
          onChange={(p) => setPage(p)}
        />
      </QueryState>
    </SectionCategory>
  );
};
