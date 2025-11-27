import { useQuery } from "@tanstack/react-query";
import { AnimeService } from "@/services/anime/anime/index";
import type { TopAnimeResponse, EnumTopAnimeFilter, AnimeByIdResponse } from "@/types/anime/anime";

export const useGetTopAnime = (limit = 10, filter: EnumTopAnimeFilter) => {
    return useQuery<TopAnimeResponse>({
        queryKey: ["topAnime", limit],
        queryFn: () => AnimeService.getTop(limit, filter),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetAnimeById = (id: number) => {
    return useQuery<AnimeByIdResponse>({
        queryKey: ["animeById", id],
        queryFn: () => AnimeService.getAnimeById(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};