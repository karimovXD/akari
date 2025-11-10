import React from "react";
import { useSearchCharacters } from "@/hooks/anime/useSearch";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import MainCard from "@/components/ui/dashboard-ui/cards/main-card/MainCard";
import { cn } from "@/lib/utils";
import { SectionCategory } from "@/components/dashboard/anime/main/components/section-category/SectionCategory";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import styles from "../../styles.module.scss";

export const Characters: React.FC<{ result: string }> = ({ result }) => {
  const { data, isLoading, isError } = useSearchCharacters(result);

  const charactersCards = React.useMemo(() => {
    if (!data) return [];
    return data.data.map((item, i) => (
      <MainCard
        key={item.name + i * i + item.name}
        image={item.images.webp?.image_url as string}
        title={item.name}
        link={DASHBOARD_PAGES.CHARACTERS.MANGA_ID(
          `${item.mal_id}`,
          `${item.name}`
        )}
        description={`${item.name_kanji}`}
      />
    ));
  }, [data]);

  return (
    <SectionCategory title="characters">
      <QueryState
        isLoading={isLoading}
        isError={isError}
        data={charactersCards}
      >
        <div className={cn(styles.search__grid__content)}>
          {charactersCards}
        </div>
      </QueryState>
    </SectionCategory>
  );
};
