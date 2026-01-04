import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetCharacterPictures } from "@/hooks/anime/useCharacters";
import { useCallback } from "react";
import { Item } from "./Item";
import type { CharacterPicturesType } from "@/types/anime/characters";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {popularAnime}
      </div>
    </QueryState>
  );
};

export default Pictures;
