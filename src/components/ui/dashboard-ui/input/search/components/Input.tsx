"use client";
import { useState, useCallback } from "react";
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
  const [query, setQuery] = useState("");
  const [selectQuery, setSelectQuery] = useState<MenuTitles>("all");

  const handleSearch = useCallback(() => {
    const trimmed = query.trim();
    router.push(
      trimmed
        ? DASHBOARD_PAGES.SEARCH.QUERY(trimmed, selectQuery)
        : DASHBOARD_PAGES.SEARCH.ROOT
    );
  }, [query, router]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <ButtonGroup className="w-full max-w-[34rem] flex justify-between flex-col sm:flex-row">
      <ButtonGroup>
        <SelectComponent
          selectQuery={selectQuery}
          setSelectQuery={setSelectQuery}
        />
      </ButtonGroup>
      <div className="flex gap-2 w-full">
        <ButtonGroup className="w-full">
          <Input
            type="text"
            placeholder="Search Anime, Manga, and more..."
            aria-label="Search input"
            onKeyDown={handleKeyDown}
            onChange={(e) => setQuery(e.target.value)}
          />
        </ButtonGroup>
        <ButtonGroup>
          <Button
            type="button"
            variant="outline"
            aria-label="Search button"
            disabled={!query.trim()}
            onClick={handleSearch}
            size={"icon"}
          >
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </div>
    </ButtonGroup>
  );
};
