import { genres } from "@/services/anime/genres.service";
import type { AnimeGenresTypeResponse } from "@/types/anime/genres";
import type { SearchAnimeResponse } from "@/types/anime/search";
import { dedupeByKey } from "@/utils/api/dedupeData";
import { useQuery } from "@tanstack/react-query";

export const useGetAnimeGenres = () => {
    return useQuery<AnimeGenresTypeResponse>({
        queryKey: ["animeGenres"],
        queryFn: () => genres.getAnimeGenres(),
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60 * 3,
        retry: 1,
        select: (data) => ({
            ...data,
            data: dedupeByKey(data.data, 'mal_id'),
        }),
    })
}

export const useGetAnimeByGenre = (limit: number, page: number, genre: number) => {
    return useQuery<SearchAnimeResponse>({
        queryKey: ["anime by genre", page, genre],
        queryFn: () => genres.getAnimeByGenre(limit, page, genre),
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60 * 3,
        retry: 1,
        select: (data) => ({
            ...data,
            data: dedupeByKey(data.data, 'mal_id'),
        }),
    })
}