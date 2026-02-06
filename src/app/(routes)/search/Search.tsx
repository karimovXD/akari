"use client";
import { useSearchParams } from "next/navigation";
import { Anime } from "./components/anime/Anime";
import { Manga } from "./components/manga/Manga";
import { Characters } from "./components/characters/Characters";
import { FilterCategoryComponent } from "./components/FilterCategoryComponent";
import type { MenuTitles } from "@/components/ui/dashboard-ui/input/search/types/selectMenu.data";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";
import {
  TypographyH1,
  TypographyP,
} from "@/components/ui/dashboard-ui/typography/typography";

export const Search = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result") ?? "";
  const category = (searchParams.get("category") as MenuTitles) || "all";

  if (!result) {
    return (
      <div className={styles.layout__content__empty_content}>
        <TypographyH1>Search Anime & Manga</TypographyH1>
        <TypographyP>
          Enter a search term to find anime and manga titles.
        </TypographyP>
      </div>
    );
  }

  return (
    <div className={cn(styles.search)}>
      <FilterCategoryComponent category="anime" categoryCurrentTitle={category}>
        <Anime result={result} />
      </FilterCategoryComponent>

      <FilterCategoryComponent category="manga" categoryCurrentTitle={category}>
        <Manga result={result} />
      </FilterCategoryComponent>

      <FilterCategoryComponent
        category="characters"
        categoryCurrentTitle={category}
      >
        <Characters result={result} />
      </FilterCategoryComponent>
    </div>
  );
};
