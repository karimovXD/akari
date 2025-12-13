import React from "react";
import { useSearchManga } from "@/hooks/anime/useSearch";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { cn } from "@/lib/utils";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import styles from "../../styles.module.scss";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";

export const Manga: React.FC<{ result: string }> = ({ result }) => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useSearchManga(result, 12, page);

  const mangaCards = React.useMemo(() => {
    if (!data) return [];
    return data.data.map((item, i) => (
      <MainCard
        key={item.mal_id + i * i + item.title}
        image={item.images.webp?.large_image_url as string}
        title={item.title}
        link={DASHBOARD_PAGES.MANGA.MANGA_ID(`${item.mal_id}`, `${item.title}`)}
        description={`${item.type}`}
      />
    ));
  }, [data]);

  return (
    <SectionCategory title="manga">
      <QueryState isLoading={isLoading} isError={isError} data={mangaCards}>
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
