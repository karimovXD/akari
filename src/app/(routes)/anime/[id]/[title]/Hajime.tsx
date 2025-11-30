"use client";
import { useGetAnimeById } from "@/hooks/anime/useAnime";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { AnimeInfoBadge } from "./components/AnimeInfoBadge";
import { AnimeTitles } from "./components/AnimeTitles";
import { TypographyP } from "@/components/ui/dashboard-ui/typography/typography";
import styles from "./styles.module.scss";
import AnimeInfo from "./components/anime-info/AnimeInfo";
import { cn } from "@/lib/utils";
import Header from "./components/header";
import MainImage from "./components/image";
import AdditionInfo from "./components/additional-info";
import TabsInfo from "./components/tabs-info";

interface PropsType {
  id: number;
}

export const Hajime: React.FC<PropsType> = ({ id }) => {
  const { data, isLoading, isError } = useGetAnimeById(Number(id));

  const aboutAnime = (
    <div>
      <TypographyP>{data?.data.synopsis}</TypographyP>
    </div>
  );

  return (
    <QueryState isLoading={isLoading} isError={isError} data={data}>
      <div className="w-full flex flex-col h-auto gap-4">
        <Header />
        <div
          className={cn(
            `${styles.anime__content} flex-col-reverse md:flex-row`
          )}
        >
          <MainImage
            large_image_url={data?.data?.images.webp?.large_image_url as string}
            title={data?.data.title as string}
            anime_list_id={data?.data.url as string}
            embed_url={data?.data.trailer?.embed_url as string}
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
          </div>
        </div>
        <TabsInfo id={id} />
      </div>
    </QueryState>
  );
};
