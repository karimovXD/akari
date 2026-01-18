import { useQuery } from "@tanstack/react-query";
import { SearchService } from "@/services/anime/search.service";
import type { SearchAnimeResponse, SearchMangaResponse, SearchCharacterResponse } from "@/types/anime/search";
import { dedupeByKey } from "@/utils/api/dedupeData";

export const useSearchAnime = (query: string, limit = 10, page: number) => {
    return useQuery<SearchAnimeResponse>({
        queryKey: ["animeSearch", query, limit, page],
        queryFn: () => SearchService.searchAnime(query, limit, page),
        placeholderData: (prev) => prev,
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
        select: (data) => ({
            ...data,
            data: dedupeByKey(data.data, 'mal_id'),
        }),
    });
};

export const useSearchManga = (query: string, limit = 10, page: number) => {
    return useQuery<SearchMangaResponse>({
        queryKey: ["mangaSearch", query, limit, page],
        queryFn: () => SearchService.searchManga(query, limit, page),
        placeholderData: (prev) => prev,
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
        select: (data) => ({
            ...data,
            data: dedupeByKey(data.data, 'mal_id'),
        }),
    });
};

export const useSearchCharacters = (query: string, limit = 10, page: number) => {
    return useQuery<SearchCharacterResponse>({
        queryKey: ["charactersSearch", query, limit, page],
        queryFn: () => SearchService.searchCharacters(query, limit, page),
        placeholderData: (prev) => prev,
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
        select: (data) => ({
            ...data,
            data: dedupeByKey(data.data, 'mal_id'),
        }),
    });
};