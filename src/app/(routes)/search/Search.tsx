"use client";
import { useSearchParams } from "next/navigation";
import { Anime } from "./components/anime/Anime";
import { cn } from "@/lib/utils";
import styles from "./styles.module.scss";

export const Search = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result") ?? "";

  return (
    <div className={cn(styles.search)}>
      <Anime result={result} />
    </div>
  );
};
