"use client";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetCharacterFullById } from "@/hooks/anime/useCharacters";
import { Spinner } from "@/components/ui/spinner";
import MainImage from "./components/image";
import MainHeader from "@/components/dashboard/anime/main/components/main-header";
import "@/styles/layout.scss";
import TabsInfo from "./components/tabs-content";

export const Characters = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetCharacterFullById(id);

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      isRetrying={isFetching}
      onRetry={refetch}
      loader={<Spinner />}
    >
      <div className={"main__content"}>
        <MainHeader />
        <div className="second__main__content flex-col md:flex-row">
          <MainImage character={data?.data!} />
          <div className="second__main__content__article">
            <TabsInfo
              id={id}
              name={data?.data?.name!}
              about={data?.data?.about!}
            />
          </div>
        </div>
      </div>
    </QueryState>
  );
};
