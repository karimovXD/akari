import { QueryState } from "@/components/dashboard/anime/QueryState";
import {
  useGetCharacterAnime,
  useGetCharacterVoiceActors,
} from "@/hooks/anime/useCharacters";
import { useCallback } from "react";
import type {
  CharacterAnimeType,
  CharacterVoiceActorsType,
} from "@/types/anime/characters";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { LongCard } from "@/components/ui/dashboard-ui/cards/long-card/LongCard";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { TypographyH2 } from "@/components/ui/dashboard-ui/typography/typography";
import styles from "@/app/(routes)/styles.module.scss";

const VoiceActors = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetCharacterVoiceActors(id);

  const mapCharacterVoiceActors = useCallback(
    (item: CharacterVoiceActorsType) => (
      <LongCard
        key={item.person.name + item.person.mal_id}
        alt="voice actor"
        badge={item.language}
        title={item.person.name}
        src={item.person.images.jpg?.image_url}
        url={DASHBOARD_PAGES.ANIME.ANIME_ID(
          `${item.person.mal_id}`,
          item.person.name
        )}
      />
    ),
    []
  );

  const voiceActors = useQueryMappedData(data?.data, mapCharacterVoiceActors);

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      isRetrying={isFetching}
      onRetry={refetch}
    >
      <div className="flex flex-col gap-2">
        {data?.data.length && (
          <TypographyH2>Voice Actors {data?.data.length}</TypographyH2>
        )}
        <div className={styles.card__content__grid__long}>{voiceActors}</div>
      </div>
    </QueryState>
  );
};

export default VoiceActors;
