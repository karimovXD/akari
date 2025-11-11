"use client";
import { useSearchParams } from "next/navigation";
import { Anime } from "./components/anime/Anime";
import { Manga } from "./components/manga/Manga";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";
import { Characters } from "./components/characters/Characters";
import { FilterCategoryComponent } from "./components/FilterCategoryComponent";
import type { MenuTitles } from "@/components/dashboard/anime/header/search/types/selectMenu.data";

export const Search = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result") ?? "";
  const category = (searchParams.get("category") as MenuTitles) || "all";

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
