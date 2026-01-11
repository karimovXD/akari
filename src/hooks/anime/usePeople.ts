import { useQuery } from "@tanstack/react-query";
import { people } from "@/services/anime/people/index";
import type { PersonAnimeTypeResponse, PersonFullByIdTypeResponse, PersonPicturesTypeResponse } from "@/types/anime/people";

export const useGetPersonFullById = (id: string) => {
    return useQuery<PersonFullByIdTypeResponse>({
        queryKey: ["personFullById", id],
        queryFn: () => people.getPersonFullById(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetPersonPictures = (id: string) => {
    return useQuery<PersonPicturesTypeResponse>({
        queryKey: ["personPictures", id],
        queryFn: () => people.getPersonPictures(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};

export const useGetPersonAnime = (id: string) => {
    return useQuery<PersonAnimeTypeResponse>({
        queryKey: ["personAnime", id],
        queryFn: () => people.getPersonAnime(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};