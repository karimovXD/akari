import { QueryState } from "@/components/dashboard/anime/QueryState";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetAnimeRelations } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import RelatedItem from "./Item";
import { Spinner } from "@/components/ui/spinner";
import styles from "./styles.module.scss";
import type { AnimeRelations } from "@/types/anime/anime";
import { useCallback } from "react";

const Related = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetAnimeRelations(id);

  const mapAnimeRelations = useCallback(
    (item: AnimeRelations) => (
      <TabsTrigger
        key={item.relation}
        value={item.relation}
        className="cursor-pointer"
      >
        {item.relation}
      </TabsTrigger>
    ),
    []
  );
  const mapRelationsContent = useCallback(
    (item: AnimeRelations) => (
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
    ),
    []
  );

  const animeRelations = useQueryMappedData(data?.data, mapAnimeRelations);
  const animeRelationsContent = useQueryMappedData(
    data?.data,
    mapRelationsContent
  );

  if (!data?.data?.length) {
    return null;
  }

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
