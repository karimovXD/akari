import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetCharacterPictures } from "@/hooks/anime/useCharacters";
import { useCallback } from "react";
import { Item } from "./Item";
import type { CharacterPicturesType } from "@/types/anime/characters";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { TypographyH2 } from "@/components/ui/dashboard-ui/typography/typography";
import styles from "@/app/(routes)/styles.module.scss";

const Pictures = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetCharacterPictures(id);

  const mapCharacterPicture = useCallback(
    (item: CharacterPicturesType) => (
      <Item
        key={item.jpg.image_url}
        src={item.jpg.image_url}
        alt={"character picture"}
      />
    ),
    []
  );

  const popularAnime = useQueryMappedData(data?.data, mapCharacterPicture);

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
          <TypographyH2>Pictures {data?.data.length}</TypographyH2>
        )}
        <div className={styles.card__content__grid__content}>
          {popularAnime}
        </div>
      </div>
    </QueryState>
  );
};

export default Pictures;
