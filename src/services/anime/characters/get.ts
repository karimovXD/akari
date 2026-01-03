import { axiosInstance } from "@/api/axios.instance"
import { SERVER_ERROR_TEXT } from "@/constants/seo.constans";
import type { CharacterFullByIdTypeResponse } from "@/types/anime/characters";
import type { AxiosError } from "axios";

export const characters = {
    async getCharacterFullById(id: string): Promise<CharacterFullByIdTypeResponse> {
        try {
            const res = await axiosInstance.get<CharacterFullByIdTypeResponse>(`/characters/${id}/full`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('character full by id'), err.message);
            throw err;
        }
    }
}