import type { LargeNumberLike } from "node:crypto";
import type { ApiResponseWithoutPagination } from "./helpers/responses";

export interface AnimeGenresType {
    mal_id: number;
    name: string;
    url: string;
    count: number;
}

export type AnimeGenresTypeResponse = ApiResponseWithoutPagination<AnimeGenresType[]>;