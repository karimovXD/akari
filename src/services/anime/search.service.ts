import { axiosInstance } from '@/api/axios.instance'
import { SERVER_ERROR_TEXT } from '@/constants/seo.constans';
import type { SearchAnimeResponse, SearchCharacterResponse, SearchMangaResponse } from "@/types/anime/search";
import type { AxiosError } from "axios";

export const SearchService = {
    async searchAnime(query: string, limit = 10, page = 1): Promise<SearchAnimeResponse> {
        try {
            const { data } = await axiosInstance.get<SearchAnimeResponse>('/anime', {
                params: {
                    q: query,
                    limit,
                    page
                }
            });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('anime search'), err.message);
            throw err;
        }
    },

    async searchManga(query: string, limit = 10): Promise<SearchMangaResponse> {
        try {
            const { data } = await axiosInstance.get<SearchMangaResponse>('/manga', {
                params: {
                    q: query,
                    limit
                }
            });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('manga search'), err.message);
            throw err;
        }
    },

    async searchCharacters(query: string, limit = 10): Promise<SearchCharacterResponse> {
        try {
            const { data } = await axiosInstance.get<SearchCharacterResponse>('/characters', {
                params: {
                    q: query,
                    limit
                }
            });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('character search'), err.message);
            throw err;
        }
    },
}