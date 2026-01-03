import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetAnimeStreaming } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { useCallback } from "react";
import type { AnimeExternal } from "@/types/anime/anime";
import { WhereToWatchItem } from "./Item";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const WhereToWatch = ({ id }: { id: number }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetAnimeStreaming(id);

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
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Where to watch</CardTitle>
          <CardDescription>どこで見る？</CardDescription>
        </CardHeader>
        <CardContent className="bg-secondary p-2 flex flex-col gap-2">
          {animeWhereToWatch}
        </CardContent>
      </Card>
    </QueryState>
  );
};

export default WhereToWatch;
