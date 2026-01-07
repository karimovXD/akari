import { useMemo } from "react";
import { useGetAnimeRecommendations } from "@/hooks/anime/useAnime";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { EmblaCarousel } from "@/components/ui/dashboard-ui/slider";
import { usePathname } from "next/navigation";
import type { EmblaOptionsType } from "embla-carousel";
import type { AnimeRecommendations } from "@/types/anime/anime";
import { Spinner } from "@/components/ui/spinner";

const Recommendations = ({ id }: { id: number }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetAnimeRecommendations(id);
  const pathname = usePathname();

  const moreByArtist = useMemo<AnimeRecommendations[]>(() => {
    return data?.data ?? [];
  }, [data]);

  const OPTIONS: EmblaOptionsType = {};

  return (
    <QueryState
      isLoading={isLoading}
      data={data}
      isError={isError}
      onRetry={refetch}
      isRetrying={isFetching}
      loader={<Spinner />}
    >
      <EmblaCarousel<AnimeRecommendations>
        slides={moreByArtist!}
        isLoading={isLoading}
        options={OPTIONS}
        title={`Recommendations`}
        sectionLink={`${pathname}/recommendations`}
        renderItem={(item) => (
          <MainCard
            key={item.entry.title + item.entry.mal_id}
            link={DASHBOARD_PAGES.ANIME.ANIME_ID(
              `${encodeURIComponent(item.entry.mal_id)}`,
              `${encodeURIComponent(item.entry.title)}`
            )}
            title={item.entry.title}
            image={item.entry.images.webp?.image_url}
            description={`recommendations`}
          />
        )}
      />
    </QueryState>
  );
};

export default Recommendations;
