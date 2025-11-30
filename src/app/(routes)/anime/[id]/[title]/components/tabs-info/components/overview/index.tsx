import { QueryState } from "@/components/dashboard/anime/QueryState";
import { TypographyH2 } from "@/components/ui/dashboard-ui/typography/typography";
import { useGetAnimeNews } from "@/hooks/anime/useAnime";
import React from "react";

const Overview = ({ id }: { id: number }) => {
  const { data, isLoading, isError } = useGetAnimeNews(id);

  const animeNews = React.useMemo(() => {
    if (!data) return [];
    return data.data.map((item, i) => (
      <div key={item.mal_id + i * i + item.title}>
        {item.mal_id} {item.title}
      </div>
    ));
  }, [data]);

  return (
    <QueryState isLoading={isLoading} isError={isError} data={animeNews}>
      <TypographyH2>News {id}</TypographyH2>
      <>{animeNews}</>
    </QueryState>
  );
};

export default Overview;
