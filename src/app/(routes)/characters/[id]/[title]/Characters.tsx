"use client";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { useGetCharacterFullById } from "@/hooks/anime/useCharacters";
import { Spinner } from "@/components/ui/spinner";
import MainImage from "./components/image";
import MainHeader from "@/components/dashboard/anime/main/components/main-header";
import styles from "./styles.module.scss";
import { cn } from "@/lib/utils";

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
      <div className={styles.main__content}>
        <MainHeader />
        <div
          className={cn(
            `${styles.anime__content} flex-col-reverse md:flex-row`
          )}
        >
          <MainImage character={data?.data!} />
          <div className={cn(styles.anime__content__article)}></div>
        </div>
      </div>
    </QueryState>
  );
};
