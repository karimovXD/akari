import { useQuery } from "@tanstack/react-query";
import { AnimeService } from "@/services/anime/anime/index";
import type { TopAnimeResponse, EnumTopAnimeFilter, AnimeByIdResponse, AnimeNewsResponse, AnimeCharactersResponse, AnimeEpisodesResponse } from "@/types/anime/anime";

export const useGetTopAnime = (limit = 10, filter: EnumTopAnimeFilter, page: number) => {
    return useQuery<TopAnimeResponse>({
        queryKey: ["topAnime", limit, page],
        queryFn: () => AnimeService.getTop(limit, filter, page),
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
        staleTime: 1000 * 60 * 3,
        retry: 1
    })
}