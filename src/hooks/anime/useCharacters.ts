import { useQuery } from "@tanstack/react-query";
import { characters } from "@/services/anime/characters/index";
import type { CharacterFullByIdTypeResponse } from "@/types/anime/characters";

export const useGetCharacterFullById = (id: string) => {
    return useQuery<CharacterFullByIdTypeResponse>({
        queryKey: ["characterFullById", id],
        queryFn: () => characters.getCharacterFullById(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};