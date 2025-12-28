import { QueryState } from "@/components/dashboard/anime/QueryState";
import { ViewMoreButton } from "@/components/ui/dashboard-ui/buttons/ViewMoreButton";
import { TypographyH4 } from "@/components/ui/dashboard-ui/typography/typography";
import { useGetAnimeStreaming } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { useCallback } from "react";
import type { AnimeExternal } from "@/types/anime/anime";

const WhereToWatch = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetAnimeStreaming(id);

  const mapExternalLinks = useCallback(
    (item: AnimeExternal) => (
      <ViewMoreButton
        key={item.name}
        url={item.url}
        title={item.name}
        variant="outline"
      />
    ),
    []
  );

  const animeExternal = useQueryMappedData(data?.data, mapExternalLinks);

  if (data?.data.length === 0) {
    return null;
  }

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      loader="loading"
    >
      <div className="w-full bg-secondary p-2 flex flex-col gap-2 rounded-lg">
        <TypographyH4>Where to watch</TypographyH4>
        {animeExternal}
      </div>
    </QueryState>
  );
};

export default WhereToWatch;
