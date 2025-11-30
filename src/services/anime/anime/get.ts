import type { TopAnimeResponse, EnumTopAnimeFilter, AnimeByIdResponse, AnimeNewsResponse } from "@/types/anime/anime";
import { axiosInstance } from '@/api/axios.instance'
import { SERVER_ERROR_TEXT } from '@/constants/seo.constans';
import type { AxiosError } from "axios";

export const AnimeService = {
    async getTop(limit = 10, filter: EnumTopAnimeFilter): Promise<TopAnimeResponse> {
        try {
            const { data } = await axiosInstance.get<TopAnimeResponse>('/top/anime', {
                params: { limit, filter }
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
}