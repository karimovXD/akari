import { useQuery } from "@tanstack/react-query";
import { AnimeService } from "@/services/anime/anime/index";
import type { TopAnimeResponse, EnumTopAnimeFilter, AnimeByIdResponse, AnimeNewsResponse, AnimeCharactersResponse, AnimeEpisodesResponse, AnimeRelationsResponse, AnimeVideosResponse, AnimeExternalResponse, AnimeRecommendationsResponse } from "@/types/anime/anime";
import { dedupeByKey } from "@/utils/api/dedupeData";

export const useGetTopAnime = (limit = 10, filter: EnumTopAnimeFilter, page: number) => {
    return useQuery<TopAnimeResponse>({
        queryKey: ["topAnime", limit, page],
        queryFn: () => AnimeService.getTop(limit, filter, page),
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60 * 3,
        retry: 1,
        select: (data) => ({
            ...data,
            data: dedupeByKey(data.data, 'mal_id'),
        }),
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

export const useGetAnimeNews = (id: number) => {
    return useQuery<AnimeNewsResponse>({
        queryKey: ["animeNews", id],
        queryFn: () => AnimeService.getAnimeNews(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetAnimeCharacters = (id: number) => {
    return useQuery<AnimeCharactersResponse>({
        queryKey: ["animeCharacters", id],
        queryFn: () => AnimeService.getAnimeCharacters(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    })
};

export const useGetAnimeEpisodes = (id: number, page: number) => {
    return useQuery<AnimeEpisodesResponse>({
        queryKey: ["animeEpisodes", id, page],
        queryFn: () => AnimeService.getAnimeEpisodes(id, page),
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60 * 3,
        retry: 1,
        select: (data) => ({
            ...data,
            data: dedupeByKey(data.data, 'mal_id'),
        }),
    })
}

export const useGetAnimeRelations = (id: number) => {
    return useQuery<AnimeRelationsResponse>({
        queryKey: ["animeRelations", id],
        queryFn: () => AnimeService.getAnimeRelations(id),
        staleTime: 1000 * 60 * 3,
        retry: 1
    })
}

export const useGetAnimeVideos = (id: number) => {
    return useQuery<AnimeVideosResponse>({
        queryKey: ["animeVideos", id],
        queryFn: () => AnimeService.getAnimeVideos(id),
        staleTime: 1000 * 60 * 3,
        retry: 1
    })
}

export const useGetAnimeExternal = (id: number) => {
    return useQuery<AnimeExternalResponse>({
        queryKey: ["animeExternal", id],
        queryFn: () => AnimeService.getAnimeExternal(id),
        staleTime: 1000 * 60 * 3,
        retry: 1
    })
}

export const useGetAnimeStreaming = (id: number) => {
    return useQuery<AnimeExternalResponse>({
        queryKey: ["animeStreaming", id],
        queryFn: () => AnimeService.getAnimeStreaming(id),
        staleTime: 1000 * 60 * 3,
        retry: 1
    })
}

export const useGetAnimeRecommendations = (id: number) => {
    return useQuery<AnimeRecommendationsResponse>({
        queryKey: ["animeRecommendations", id],
        queryFn: () => AnimeService.getAnimeRecommendations(id),
        staleTime: 1000 * 60 * 3,
        retry: 1
    })
}