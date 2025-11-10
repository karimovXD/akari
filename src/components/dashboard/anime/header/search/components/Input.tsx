"use client";
import React from "react";
import { SearchIcon } from "lucide-react";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

export const SearchInput: React.FC = () => {
  const router = useRouter();
  const [query, setQuery] = React.useState("");

  const handleSearch = React.useCallback(() => {
    const trimmed = query.trim();
    router.push(
      trimmed ? DASHBOARD_PAGES.SEARCH.QUERY(trimmed) : DASHBOARD_PAGES.HOME
    );
  }, [query, router]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <ButtonGroup>
      <Input
        type="text"
        className="w-[15rem]"
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
