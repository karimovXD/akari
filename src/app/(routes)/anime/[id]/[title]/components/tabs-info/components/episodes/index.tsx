import { useState } from "react";
import { useGetAnimeEpisodes } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";
import EpisodeCard from "@/components/ui/dashboard-ui/cards/episode-card/EpisodeCard";
import styles from "./styles.module.scss";
import CustomSkeleton from "@/components/ui/dashboard-ui/skeleton/custom-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const Episodes = ({ id }: { id: number }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetAnimeEpisodes(id, page);

  const animeEpisodes = useQueryMappedData(data?.data, (item, i) => (
    <EpisodeCard
      key={item.mal_id + i * i + item.title}
      title={item.title}
      aired={item.aired}
      japanese_title={item.title_japanese}
      score={item.score}
      url={item.url}
      className={"h-auto aspect-[1/0.5]"}
    />
  ));

  if (data?.data.length === 0) {
    return null;
  }

  return data?.data.length === 0 ? (
    <div>nothing</div>
  ) : (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      data={data}
      loader={
        <CustomSkeleton
          number={12}
          children={<Skeleton className="aspect-[1/0.5]" />}
          className={styles.grid__content}
        />
      }
    >
      <div className={styles.episode__content}>
        <div className={styles.grid__content}>{animeEpisodes}</div>
        <PaginationNumbers
          currentPage={page}
          lastPage={data?.pagination?.last_visible_page!}
          onChange={(p) => setPage(p)}
        />
      </div>
    </QueryState>
  );
};

export default Episodes;
