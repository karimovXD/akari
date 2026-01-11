import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useCallback } from "react";
import { CardImage } from "@/components/ui/dashboard-ui/images/card-image/CardImage";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import { TypographyH2 } from "@/components/ui/dashboard-ui/typography/typography";
import "@/styles/grid.scss";
import { useGetPersonPictures } from "@/hooks/anime/usePeople";
import type { PersonPicturesType } from "@/types/anime/people";

const Pictures = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetPersonPictures(id);

  const mapPersonPicture = useCallback(
    (item: PersonPicturesType) => (
      <CardImage
        key={item.jpg.image_url}
        src={item.jpg.image_url}
        alt={"person picture"}
      />
    ),
    []
  );

  const personPicture = useQueryMappedData(data?.data, mapPersonPicture);

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
        <div className="card__content__grid__content">{personPicture}</div>
      </div>
    </QueryState>
  );
};

export default Pictures;
