import type { TopAnimeResponse, EnumTopAnimeFilter, AnimeByIdResponse, AnimeNewsResponse, AnimeCharactersResponse, AnimeEpisodesResponse, AnimeRelationsResponse, AnimeVideosResponse, AnimeExternalResponse, AnimeRecommendationsResponse } from "@/types/anime/anime";
import { axiosInstance } from '@/api/axios.instance'
import { SERVER_ERROR_TEXT } from '@/constants/seo.constans';
import type { AxiosError } from "axios";
import { defaultParams } from "@/api/jikan.params";

export const AnimeService = {
    async getTop(limit = 10, filter: EnumTopAnimeFilter, page = 1): Promise<TopAnimeResponse> {
        try {
            const { data } = await axiosInstance.get<TopAnimeResponse>('/top/anime', {
                params: { ...defaultParams, limit, filter, page }
            });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('top anime'), err.message);
            throw err;
        }
    },
    async getAnimeById(id: number): Promise<AnimeByIdResponse> {
        try {
            const { data } = await axiosInstance.get<AnimeByIdResponse>(`/anime/${id}`);
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('by id anime'), err.message);
            throw err;
        }
    },
    async getAnimeNews(id: number): Promise<AnimeNewsResponse> {
        try {
            const { data } = await axiosInstance.get<AnimeNewsResponse>(`/anime/${id}/news`);
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('anime news'), err.message);
            throw err;
        }
    },
    async getAnimeCharacters(id: number): Promise<AnimeCharactersResponse> {
        try {
            const { data } = await axiosInstance.get<AnimeCharactersResponse>(`/anime/${id}/characters`);
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('anime characters'), err.message);
            throw err;
        }
    },
    async getAnimeEpisodes(id: number, page = 1): Promise<AnimeEpisodesResponse> {
        try {
            const res = await axiosInstance.get<AnimeEpisodesResponse>(`/anime/${id}/episodes`, {
                params: { page }
            });
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT("anime episodes"), err.message);
            throw err
        }
    },
    async getAnimeRelations(id: number): Promise<AnimeRelationsResponse> {
        try {
            const res = await axiosInstance.get<AnimeRelationsResponse>(`/anime/${id}/relations`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT("anime relations"), err.message);
            throw err
        }
    },
    async getAnimeVideos(id: number): Promise<AnimeVideosResponse> {
        try {
            const res = await axiosInstance.get<AnimeVideosResponse>(`/anime/${id}/videos`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT("anime videos"), err.message);
            throw err
        }
    },
    async getAnimeExternal(id: number): Promise<AnimeExternalResponse> {
        try {
            const res = await axiosInstance.get<AnimeExternalResponse>(`/anime/${id}/external`);
            return res.data
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT("anime external"), err.message);
            throw err
        }
    },
    async getAnimeStreaming(id: number): Promise<AnimeExternalResponse> {
        try {
            const res = await axiosInstance.get<AnimeExternalResponse>(`/anime/${id}/streaming`);
            return res.data
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT("anime streaming"), err.message);
            throw err
        }
    },
    async getAnimeRecommendations(id: number): Promise<AnimeRecommendationsResponse> {
        try {
            const res = await axiosInstance.get<AnimeRecommendationsResponse>(`/anime/${id}/recommendations`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT("anime streaming"), err.message);
            throw err
        }
    }
}