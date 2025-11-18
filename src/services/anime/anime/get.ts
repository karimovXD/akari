import type { TopAnimeResponse, EnumTopAnimeFilter } from "@/types/anime/anime";
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
}