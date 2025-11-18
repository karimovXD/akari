import type { EnumAnimeRating, EnumAnimeStatus, EnumAnimeType } from "./helpers/enums";
import type { ApiResponse } from "./helpers/responses";
import type { BaseDateRange, BaseMedia, Entity, Trailer } from "./helpers/shared";

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
    broadcast: {
        day: string;
        time: string;
        timezone: string;
        string: string;
    };
    studios: Entity[];
    producers: Entity[];
    licensors: Entity[];
    explicit_genres: Entity[];
    themes: Entity[];
    demographics: Entity[];
}

export type TopAnimeResponse = ApiResponse<TopAnimeType[]>;
