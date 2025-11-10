import { useQuery } from "@tanstack/react-query";
import { AlbumService } from "@/services/anime/search.service";
import type { SearchAnimeResponse, SearchMangaResponse, SearchCharacterResponse } from "@/types/anime/search";

export const useSearchAnime = (query: string, limit = 10) => {
    return useQuery<SearchAnimeResponse>({
        queryKey: ["animeSearch", query, limit],
        queryFn: () => AlbumService.searchAnime(query, limit),
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useSearchManga = (query: string, limit = 10) => {
    return useQuery<SearchMangaResponse>({
        queryKey: ["mangaSearch", query, limit],
        queryFn: () => AlbumService.searchManga(query, limit),
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useSearchCharacters = (query: string, limit = 10) => {
    return useQuery<SearchCharacterResponse>({
        queryKey: ["charactersSearch", query, limit],
        queryFn: () => AlbumService.searchCharacters(query, limit),
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};