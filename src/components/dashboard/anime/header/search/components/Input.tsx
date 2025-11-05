"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { useDebouncedCallback } from "../services/debounceCallback.service";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { useRouter } from "next/navigation";

export const SearchInput: React.FC = () => {
  const router = useRouter();

  const debouncedSearch = useDebouncedCallback((value: string) => {
    if (value.trim()) return router.push(DASHBOARD_PAGES.SEARCH.QUERY(value));
    else return router.push(DASHBOARD_PAGES.HOME);
  }, 1000);

  return (
    <InputGroup>
      <InputGroupInput
        placeholder="Search..."
        onChange={(e) => debouncedSearch(e.target.value)}
        type="text"
      />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};
