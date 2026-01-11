import { axiosInstance } from "@/api/axios.instance"
import { SERVER_ERROR_TEXT } from "@/constants/seo.constans";
import type { AxiosError } from "axios";
import type { PersonAnimeTypeResponse, PersonFullByIdTypeResponse, PersonPicturesTypeResponse } from "@/types/anime/people";

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
    },
    async getPersonPictures(id: string): Promise<PersonPicturesTypeResponse> {
        try {
            const res = await axiosInstance.get<PersonPicturesTypeResponse>(`/people/${id}/pictures`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('person pictures'), err.message);
            throw err;
        }
    },
    async getPersonAnime(id: string): Promise<PersonAnimeTypeResponse> {
        try {
            const res = await axiosInstance.get<PersonAnimeTypeResponse>(`/people/${id}/anime`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('person anime'), err.message);
            throw err;
        }
    }
}