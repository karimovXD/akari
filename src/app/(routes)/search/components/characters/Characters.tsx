import { useCallback, useState } from "react";
import { useSearchCharacters } from "@/hooks/anime/useSearch";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { cn } from "@/lib/utils";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import styles from "../../styles.module.scss";
import { PaginationNumbers } from "@/components/ui/dashboard-ui/pagination/PaginationBlock";
import { useQueryMappedData } from "@/utils/api/useQueryMappedData";
import type { SearchCharacterType } from "@/types/anime/search";

export const Characters: React.FC<{ result: string }> = ({ result }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch, isFetching } = useSearchCharacters(
    result,
    12,
    page
  );

  const mapCharactersCards = useCallback(
    (item: SearchCharacterType) => (
      <MainCard
        key={item.name + item.mal_id + item.nicknames}
        image={item.images.webp?.image_url as string}
        title={item.name}
        link={DASHBOARD_PAGES.CHARACTERS.MANGA_ID(
          `${item.mal_id}`,
          `${item.name}`
        )}
        description={`${item.name_kanji}`}
      />
    ),
    []
  );

  const charactersCards = useQueryMappedData(data?.data, mapCharactersCards);

  return (
    <SectionCategory title="characters">
      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={charactersCards}
        isRetrying={isFetching}
        onRetry={refetch}
      >
        <div className={cn(styles.search__grid__content)}>
          {charactersCards}
        </div>
        <PaginationNumbers
          currentPage={page}
          lastPage={data?.pagination?.last_visible_page!}
          onChange={(p) => setPage(p)}
        />
      </QueryState>
    </SectionCategory>
  );
};
