import { QueryState } from "@/components/dashboard/anime/QueryState";
import { ViewMoreButton } from "@/components/ui/dashboard-ui/buttons/ViewMoreButton";
import { useGetAnimeStreaming } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";

const WhereToWatch = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetAnimeStreaming(id);

  const animeExternal = useQueryMappedData(data?.data, (item, i) => (
    <ViewMoreButton
      key={item.name}
      url={item.url}
      title={item.name}
      variant="outline"
    />
  ));

  if (data?.data.length === 0) {
    return null;
  }

  return (
    <QueryState data={data} isLoading={isLoading} isError={isError}>
      <div className="w-full bg-secondary p-2 flex flex-col gap-2 rounded-lg">
        {animeExternal}
      </div>
    </QueryState>
  );
};

export default WhereToWatch;
