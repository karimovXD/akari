import { QueryState } from "@/components/dashboard/anime/QueryState";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAnimeRelations } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { RelatedItem } from "./Item";
import { Spinner } from "@/components/ui/spinner";
import styles from "./styles.module.scss";

const Related = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetAnimeRelations(id);

  const animeRelations = useQueryMappedData(data?.data, (item) => (
    <TabsTrigger
      key={item.relation}
      value={item.relation}
      className="cursor-pointer"
    >
      {item.relation}
    </TabsTrigger>
  ));

  const animeRelationsContent = useQueryMappedData(data?.data, (item) => (
    <TabsContent
      key={item.relation}
      value={item.relation}
      className={styles.tabs__content}
    >
      {item.entry.map((item) => (
        <RelatedItem
          title={item.name}
          type={item.type}
          url={item.url}
          key={item.name + item.mal_id}
        />
      ))}
    </TabsContent>
  ));

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      data={data}
      loader={<Spinner />}
    >
      <Tabs defaultValue={data?.data[0].relation}>
        <ScrollArea className="w-auto rounded-md whitespace-nowrap">
          <TabsList className="w-[640px] sm:w-full">{animeRelations}</TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {animeRelationsContent}
      </Tabs>
    </QueryState>
  );
};

export default Related;
