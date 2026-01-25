import { axiosInstance } from "@/api/axios.instance"
import { SERVER_ERROR_TEXT } from "@/constants/seo.constans";
import type { AnimeGenresTypeResponse } from "@/types/anime/genres";
import type { SearchAnimeResponse } from "@/types/anime/search";
import type { AxiosError } from "axios";
import { defaultParams } from '@/api/jikan.params';


export const genres = {
    async getAnimeGenres(): Promise<AnimeGenresTypeResponse> {
        try {
            const res = await axiosInstance.get<AnimeGenresTypeResponse>(`/genres/anime`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('anime genres'), err.message);
            throw err;
        }
    },

    async getAnimeByGenre(limit = 25, page = 1, genre: number): Promise<SearchAnimeResponse> {
        try {
            const { data } = await axiosInstance.get<SearchAnimeResponse>('/anime', {
                params: {
                    ...defaultParams,
                    limit,
                    page,
                    genres: genre
                }
            });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('anime by genre'), err.message);
            throw err;
        }
    },
}