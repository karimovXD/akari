import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetAnimeById, useGetAnimeNews } from "@/hooks/anime/useAnime";
import { useMemo } from "react";
import NewsItem from "./NewsItem";

interface PropsType {
  id: number;
}

const Overview: React.FC<PropsType> = ({ id }) => {
  const {
    data: animeNewsData,
    isLoading: animeNewsLoading,
    isError: animeNewsError,
  } = useGetAnimeNews(id);

  const {
    data: animeIdData,
    isLoading: animeIdLoading,
    isError: animeIdError,
  } = useGetAnimeById(id);

  const animeNews = useMemo(() => {
    if (!animeNewsData) return [];
    return animeNewsData.data.map((item, i) => (
      <NewsItem
        key={item.mal_id + i * i + item.title}
        title={item.title}
        author={item.author_username}
        content={item.excerpt}
        date={item.date}
        link={item.url}
      />
    ));
  }, [animeNewsData]);

  return (
    <div className="flex flex-col gap-4">
      <SectionCategory title="background" withUnderline={true}>
        <QueryState
          isLoading={animeIdLoading}
          isError={animeIdError}
          data={animeIdData}
        >
          <>{animeIdData?.data.background}</>
        </QueryState>
      </SectionCategory>

      <SectionCategory title="News" withUnderline={true}>
        <QueryState
          isLoading={animeNewsLoading}
          isError={animeNewsError}
          data={animeNews}
        >
          {animeNews}
        </QueryState>
      </SectionCategory>
    </div>
  );
};

export default Overview;
