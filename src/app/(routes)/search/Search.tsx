"use client";
import { useSearchParams } from "next/navigation";
import { Anime } from "./components/anime/Anime";
import { Manga } from "./components/manga/Manga";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";
import { Characters } from "./components/characters/Characters";

export const Search = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result") ?? "";

  return (
    <div className={cn(styles.search)}>
      <Anime result={result} />
      <Manga result={result} />
      <Characters result={result} />
    </div>
  );
};
