import { useQuery } from "@tanstack/react-query";
import { people } from "@/services/anime/people/index";
import type { PersonFullByIdTypeResponse } from "@/types/anime/people";

export const useGetPersonFullById = (id: string) => {
    return useQuery<PersonFullByIdTypeResponse>({
        queryKey: ["personFullById", id],
        queryFn: () => people.getPersonFullById(id),
        staleTime: 1000 * 60 * 3,
        retry: 1,
    });
};