import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetAnimeById, useGetAnimeNews } from "@/hooks/anime/useAnime";
import NewsItem from "./Item";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import styles from "./styles.module.scss";
import type { AnimeNewsType } from "@/types/anime/anime";
import { useCallback } from "react";

interface PropsType {
  id: number;
}

const Overview: React.FC<PropsType> = ({ id }) => {
  const {
    data: animeNewsData,
    isLoading: animeNewsLoading,
    isError: animeNewsError,
    refetch: animeNewsRefetch,
    isFetching: animeNewsIsFetching,
  } = useGetAnimeNews(id);

  const {
    data: animeIdData,
    isLoading: animeIdLoading,
    isError: animeIdError,
    refetch: animeIdRefetch,
    isFetching: animeIdIsFetching,
  } = useGetAnimeById(id);

  const mapAnimeNews = useCallback(
    (item: AnimeNewsType) => (
      <NewsItem
        key={item.mal_id + item.title}
        title={item.title}
        author={item.author_username}
        content={item.excerpt}
        date={item.date}
        link={item.url}
      />
    ),
    []
  );

  const animeNews = useQueryMappedData(animeNewsData?.data, mapAnimeNews);

  return (
    <div className={styles.overview__content}>
      {animeIdData?.data.background !== undefined ||
        (animeIdData?.data.background === "" && (
          <SectionCategory title="background" withUnderline={true}>
            <QueryState
              isLoading={animeIdLoading}
              isError={animeIdError}
              data={animeIdData}
              onRetry={animeIdRefetch}
              isRetrying={animeIdIsFetching}
            >
              {animeIdData?.data.background}
            </QueryState>
          </SectionCategory>
        ))}

      {animeNewsData?.data.length === 0 ? (
        ""
      ) : (
        <SectionCategory title="News" withUnderline={true}>
          <QueryState
            isLoading={animeNewsLoading}
            isError={animeNewsError}
            data={animeNews}
            loader={"loading"}
            onRetry={animeNewsRefetch}
            isRetrying={animeNewsIsFetching}
          >
            {animeNews}
          </QueryState>
        </SectionCategory>
      )}
    </div>
  );
};

export default Overview;
