import { axiosInstance } from "@/api/axios.instance"
import { SERVER_ERROR_TEXT } from "@/constants/seo.constans";
import type { CharacterAnimeTypeResponse, CharacterFullByIdTypeResponse, CharacterMangaTypeResponse, CharacterPicturesTypeResponse, CharacterVoiceActorsTypeResponse } from "@/types/anime/characters";
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
    },
    async getCharacterPictures(id: string): Promise<CharacterPicturesTypeResponse> {
        try {
            const res = await axiosInstance.get<CharacterPicturesTypeResponse>(`/characters/${id}/pictures`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('character pictures'), err.message);
            throw err;
        }
    },
    async getCharacterAnime(id: string): Promise<CharacterAnimeTypeResponse> {
        try {
            const res = await axiosInstance.get<CharacterAnimeTypeResponse>(`/characters/${id}/anime`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('character anime'), err.message);
            throw err;
        }
    },
    async getCharacterManga(id: string): Promise<CharacterMangaTypeResponse> {
        try {
            const res = await axiosInstance.get<CharacterMangaTypeResponse>(`/characters/${id}/manga`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('character manga'), err.message);
            throw err;
        }
    },
    async getCharacterVoiceActors(id: string): Promise<CharacterVoiceActorsTypeResponse> {
        try {
            const res = await axiosInstance.get<CharacterVoiceActorsTypeResponse>(`/characters/${id}/voices`);
            return res.data;
        } catch (error) {
            const err = error as AxiosError;
            console.log(SERVER_ERROR_TEXT('character voice actors'), err.message);
            throw err;
        }
    }
}