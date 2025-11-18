import { useQuery } from "@tanstack/react-query";
import { SearchService } from "@/services/anime/search.service";
import type { SearchAnimeResponse, SearchMangaResponse, SearchCharacterResponse } from "@/types/anime/search";

export const useSearchAnime = (query: string, limit = 10) => {
    return useQuery<SearchAnimeResponse>({
        queryKey: ["animeSearch", query, limit],
        queryFn: () => SearchService.searchAnime(query, limit),
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useSearchManga = (query: string, limit = 10) => {
    return useQuery<SearchMangaResponse>({
        queryKey: ["mangaSearch", query, limit],
        queryFn: () => SearchService.searchManga(query, limit),
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useSearchCharacters = (query: string, limit = 10) => {
    return useQuery<SearchCharacterResponse>({
        queryKey: ["charactersSearch", query, limit],
        queryFn: () => SearchService.searchCharacters(query, limit),
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};