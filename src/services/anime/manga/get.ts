import { axiosInstance } from "@/api/axios.instance"
import { SERVER_ERROR_TEXT } from "@/constants/seo.constans";
import type { AxiosError } from "axios";

export const manga = {
    async getAnimeById(id: number) {
        try {
            const res = await axiosInstance.get(`/manga/${id}`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('manga full by id'), err.message);
            throw err;
        }
    }
}