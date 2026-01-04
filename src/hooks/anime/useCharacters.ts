import { useQuery } from "@tanstack/react-query";
import { characters } from "@/services/anime/characters/index";
import type { CharacterAnimeTypeResponse, CharacterFullByIdTypeResponse, CharacterMangaTypeResponse, CharacterPicturesTypeResponse, CharacterVoiceActorsTypeResponse } from "@/types/anime/characters";

export const useGetCharacterFullById = (id: string) => {
    return useQuery<CharacterFullByIdTypeResponse>({
        queryKey: ["characterFullById", id],
        queryFn: () => characters.getCharacterFullById(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetCharacterPictures = (id: string) => {
    return useQuery<CharacterPicturesTypeResponse>({
        queryKey: ["characterPictures", id],
        queryFn: () => characters.getCharacterPictures(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetCharacterAnime = (id: string) => {
    return useQuery<CharacterAnimeTypeResponse>({
        queryKey: ["characterAnime", id],
        queryFn: () => characters.getCharacterAnime(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetCharacterManga = (id: string) => {
    return useQuery<CharacterMangaTypeResponse>({
        queryKey: ["characterManga", id],
        queryFn: () => characters.getCharacterManga(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetCharacterVoiceActors = (id: string) => {
    return useQuery<CharacterVoiceActorsTypeResponse>({
        queryKey: ["characterVoiceActors", id],
        queryFn: () => characters.getCharacterVoiceActors(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};