"use client";
import React from "react";
import { SearchIcon } from "lucide-react";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { SelectComponent } from "./select/Select";
import type { MenuTitles } from "../types/selectMenu.data";

export const SearchInput: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState("");
  const [selectQuery, setSelectQuery] = React.useState<MenuTitles>("all");

  const handleSearch = React.useCallback(() => {
    const trimmed = query.trim();
    router.push(
      trimmed
        ? DASHBOARD_PAGES.SEARCH.QUERY(trimmed, selectQuery)
        : DASHBOARD_PAGES.HOME
    );
  }, [query, router]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <ButtonGroup className="w-full max-w-[30rem]">
      <SelectComponent
        selectQuery={selectQuery}
        setSelectQuery={setSelectQuery}
      />
      <Input
        type="text"
        placeholder="Search Anime, Manga, and more..."
        aria-label="Search input"
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        type="button"
        variant="outline"
        aria-label="Search button"
        disabled={!query.trim()}
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
    </ButtonGroup>
  );
};
