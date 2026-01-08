"use client";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetPersonFullById } from "@/hooks/anime/usePeople";
import { Spinner } from "@/components/ui/spinner";
import MainHeader from "@/components/dashboard/anime/main/components/main-header";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";
import MainImage from "./components/image";
import TabsInfo from "./components/tabs-content";

export const People = ({ id }: { id: string }) => {
  const { data, isLoading, isError, refetch, isFetching } =
    useGetPersonFullById(id);

  return (
    <QueryState
      data={data}
      isLoading={isLoading}
      isError={isError}
      isRetrying={isFetching}
      onRetry={refetch}
      loader={<Spinner />}
    >
      <div className={styles.main__content}>
        <MainHeader />
        <div
          className={cn(
            `${styles.anime__content} flex-col-reverse md:flex-row`
          )}
        >
          <MainImage person={data?.data!} />
          <div
            className={cn(styles.anime__content__article, "overflow-hidden")}
          >
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
