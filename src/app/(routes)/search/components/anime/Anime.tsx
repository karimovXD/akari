import React from "react";
import { useSearchAnime } from "@/hooks/anime/useSearch";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { cn } from "@/lib/utils";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import styles from "../../styles.module.scss";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";

export const Anime: React.FC<{ result: string }> = ({ result }) => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useSearchAnime(result, 10, page);

  const animeCards = React.useMemo(() => {
    if (!data) return [];
    return data.data.map((item, i) => (
      <MainCard
        key={item.mal_id + i * i + item.title}
        image={item.images.webp?.large_image_url as string}
        title={item.title}
        link={DASHBOARD_PAGES.ANIME.ANIME_ID(`${item.mal_id}`, `${item.title}`)}
        description={`${item.type}`}
        duration={item.duration as string}
      />
    ));
  }, [data]);

  return (
    <SectionCategory title="anime">
      <QueryState isLoading={isLoading} isError={isError} data={animeCards}>
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
