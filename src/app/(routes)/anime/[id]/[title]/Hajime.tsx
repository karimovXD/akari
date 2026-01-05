"use client";
import { useGetAnimeById } from "@/hooks/anime/useAnime";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { AnimeInfoBadge } from "./components/AnimeInfoBadge";
import { AnimeTitles } from "./components/AnimeTitles";
import { TypographyP } from "@/components/ui/dashboard-ui/typography/typography";
import styles from "./styles.module.scss";
import AnimeInfo from "./components/anime-info/AnimeInfo";
import { cn } from "@/lib/utils";
import MainImage from "./components/image";
import AdditionInfo from "./components/additional-info";
import TabsInfo from "./components/tabs-info";
import { Spinner } from "@/components/ui/spinner";
import AnimeTrailerViewer from "./components/trailer/index";
import ExternalLinks from "./components/external-links";
import Recommendations from "./components/recommendations/index";
import MainHeader from "@/components/dashboard/anime/main/components/main-header";

interface PropsType {
  id: number;
}

export const Hajime: React.FC<PropsType> = ({ id }) => {
  const { data, isLoading, isError, refetch, isFetching } = useGetAnimeById(
    Number(id)
  );

  const aboutAnime = (
    <div>
      <TypographyP className="mt-0">{data?.data.synopsis}</TypographyP>
    </div>
  );

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      data={data}
      loader={<Spinner />}
      onRetry={refetch}
      isRetrying={isFetching}
    >
      <div className={styles.main__content}>
        <MainHeader />
        <div
          className={cn(
            `${styles.anime__content} flex-col-reverse md:flex-row`
          )}
        >
          <MainImage
            large_image_url={data?.data?.images.webp?.large_image_url}
            title={data?.data.title}
            anime_list_id={data?.data.url}
            id={id}
          />
          <div className={cn(styles.anime__content__article)}>
            <AnimeTitles
              title={data?.data.title}
              title_english={data?.data.title_english}
              title_japanese={data?.data.title_japanese}
            />
            <AnimeInfoBadge
              score={data?.data.score}
              rating={data?.data.rating}
              scored_by={data?.data.scored_by}
              status={data?.data.status}
            />
            {aboutAnime}
            <AnimeInfo
              aired={data?.data.aired.string}
              duration={data?.data.duration}
              episodes={data?.data.episodes}
              favorites={data?.data.favorites}
              members={data?.data.members}
              rank={data?.data.rank}
            />
            <AdditionInfo
              studios={data?.data.studios}
              producers={data?.data.producers}
              genres={data?.data.genres}
              themes={data?.data.themes}
              demographics={data?.data.demographics}
            />
            <AnimeTrailerViewer id={id} />
            <ExternalLinks id={id} />
          </div>
        </div>
        <Recommendations id={id} />
        <TabsInfo id={id} />
      </div>
    </QueryState>
  );
};
