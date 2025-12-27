import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalItem } from "./Item";
import { useGetAnimeExternal } from "@/hooks/anime/useAnime";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";

const ExternalLinks = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetAnimeExternal(id);

  const animeExternal = useQueryMappedData(data?.data, (item, i) => (
    <ExternalItem url={item.url} title={item.name} key={item.name + item.url} />
  ));

  if (data?.data.length === 0) {
    return null;
  }

  return (
    <QueryState data={data} isLoading={isLoading} isError={isError}>
      <Card>
        <CardHeader>
          <CardTitle>External Links</CardTitle>
          <CardDescription>外部リンク</CardDescription>
        </CardHeader>
        <CardContent className="bg-secondary py-4 flex gap-4 flex-wrap">
          {animeExternal}
        </CardContent>
      </Card>
    </QueryState>
  );
};

export default ExternalLinks;
