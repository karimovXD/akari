import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetAnimeCharacters } from "@/hooks/anime/useAnime";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import styles from "@/app/(routes)/styles.module.scss";
import { cn } from "@/lib/utils";

interface PropsType {
  id: number;
}

const Characters: React.FC<PropsType> = ({ id }) => {
  const { data, isLoading, isError } = useGetAnimeCharacters(id);

  const animeCharacters = useQueryMappedData(data?.data, (item, i) => (
    <MainCard
      description={item.role}
      image={item.character.images.webp?.image_url as string}
      title={item.character.name}
      link={item.character.url}
      key={item.character.mal_id + i * i + item.character.name}
    />
  ));

  return (
      <QueryState isLoading={isLoading} isError={isError} data={data}>
        <div className={cn(styles.card__content__grid__content)}>
          {animeCharacters}
        </div>
      </QueryState>
  );
};

export default Characters;
