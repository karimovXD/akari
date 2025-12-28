import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetAnimeById, useGetAnimeNews } from "@/hooks/anime/useAnime";
import NewsItem from "./Item";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import styles from "./styles.module.scss";

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

  const animeNews = useQueryMappedData(animeNewsData?.data, (item, i) => (
    <NewsItem
      key={item.mal_id + i * i + item.title}
      title={item.title}
      author={item.author_username}
      content={item.excerpt}
      date={item.date}
      link={item.url}
    />
  ));

  return (
    <div className={styles.overview__content}>
      {animeIdData?.data.background !== undefined ||
        (animeIdData?.data.background === "" && (
          <SectionCategory title="background" withUnderline={true}>
            <QueryState
              isLoading={animeIdLoading}
              isError={animeIdError}
              data={animeIdData}
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
          >
            {animeNews}
          </QueryState>
        </SectionCategory>
      )}
    </div>
  );
};

export default Overview;
