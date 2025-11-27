import type { EnumAnimeRating, EnumAnimeStatus, EnumAnimeType } from "./helpers/enums";
import type { ApiResponse, ApiResponseWithoutPagination } from "./helpers/responses";
import type { BaseDateRange, BaseMedia, Entity, Trailer, Broadcast } from "./helpers/shared";

export const EnumTopAnimeFilter = {
    Airing = "airing",
    Upcoming = "upcoming",
    ByPopularity = "bypopularity",
    Favorite = "favorite",
} as const
export type EnumTopAnimeFilter = (typeof EnumTopAnimeFilter)[keyof typeof EnumTopAnimeFilter]

export interface TopAnimeType extends BaseMedia {
    trailer: Trailer | null;
    approved: boolean;
    titles: {
        type: string;
        title: string;
    }[];
    type: EnumAnimeType;
    source: string;
    episodes: number;
    status: EnumAnimeStatus;
    airing: boolean;
    aired: BaseDateRange;
    duration: string;
    rating: EnumAnimeRating;
    season: string;
    year: number;
    broadcast: Broadcast;
    studios: Entity[];
    producers: Entity[];
    licensors: Entity[];
    explicit_genres: Entity[];
    themes: Entity[];
    demographics: Entity[];
}

export interface AnimeByIdType extends BaseMedia {
    trailer: Trailer | null;
    approved: boolean;
    titles: {
        type: string;
        title: string;
    }[];
    type: EnumAnimeType;
    source: string;
    episodes: number;
    status: EnumAnimeStatus;
    airing: boolean;
    aired: BaseDateRange;
    duration: string;
    rating: EnumAnimeRating;
    season: string;
    year: number;
    broadcast: Broadcast;
    studios: Entity[];
    producers: Entity[];
    licensors: Entity[];
    explicit_genres: Entity[];
    themes?: Entity[];
    demographics: Entity[];
    genres: Entity[];
}

export type TopAnimeResponse = ApiResponse<TopAnimeType[]>;
export type AnimeByIdResponse = ApiResponseWithoutPagination<AnimeByIdType>;