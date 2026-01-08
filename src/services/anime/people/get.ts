import { axiosInstance } from "@/api/axios.instance"
import { SERVER_ERROR_TEXT } from "@/constants/seo.constans";
import type { AxiosError } from "axios";
import type { PersonFullByIdTypeResponse } from "@/types/anime/people";

export const people = {
    async getPersonFullById(id: string): Promise<PersonFullByIdTypeResponse> {
        try {
            const res = await axiosInstance.get<PersonFullByIdTypeResponse>(`/people/${id}/full`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('person full by id'), err.message);
            throw err;
        }
    }
}