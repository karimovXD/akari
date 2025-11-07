import { axiosInstance } from '@/api/axios.instance'
import { SERVER_ERROR_TEXT } from '@/constants/seo.constans';
import type { SearchAnimeResponse } from "@/types/search";
import type { AxiosError } from "axios";

export const AlbumService = {
    async searchAnime(query: string, limit = 10): Promise<SearchAnimeResponse> {
        try {
            const { data } = await axiosInstance.get<SearchAnimeResponse>('/anime', {
                params: {
                    q: query,
                    limit
                }
            });
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('anime search'), err.message);
            throw err;
        }
    },
}
