import { QueryState } from "@/components/dashboard/anime/QueryState";
import { TypographyH4 } from "@/components/ui/dashboard-ui/typography/typography";
import { useGetAnimeStreaming } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { useCallback } from "react";
import type { AnimeExternal } from "@/types/anime/anime";
import { WhereToWatchItem } from "./Item";

const WhereToWatch = ({ id }: { id: number }) => {
  const { data, isLoading, isError, refetch, isFetching } = useGetAnimeStreaming(id);

  const mapWhereToWatchLinks = useCallback(
    (item: AnimeExternal) => (
      <WhereToWatchItem
        key={item.name + item.url}
        url={item.url}
        title={item.name}
      />
    ),
    []
  );

  const animeWhereToWatch = useQueryMappedData(
    data?.data,
    mapWhereToWatchLinks
  );

  if (data?.data.length === 0) {
    return null;
  }

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      loader="loading"
      isRetrying={isFetching}
      onRetry={refetch}
    >
      <div className="w-full bg-secondary p-2 flex flex-col gap-2 rounded-lg">
        <TypographyH4>Where to watch</TypographyH4>
        {animeWhereToWatch}
      </div>
    </QueryState>
  );
};

export default WhereToWatch;
