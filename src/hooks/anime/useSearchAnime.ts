import { useQuery } from "@tanstack/react-query";
import { AlbumService } from "@/services/anime/search.service";
import type { SearchAnimeResponse } from "@/types/search";

export const useSearchAnime = (query: string, limit = 10) => {
    return useQuery<SearchAnimeResponse>({
        queryKey: ["animeSearch", query, limit],
        queryFn: () => AlbumService.searchAnime(query, limit),
        enabled: !!query,
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};