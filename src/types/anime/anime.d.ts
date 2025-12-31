import type { EnumAnimeRating, EnumAnimeStatus, EnumAnimeType } from "./helpers/enums";
import type { ApiResponse, ApiResponseWithoutPagination } from "./helpers/responses";
import type { BaseDateRange, BaseMedia, Entity, Trailer, Broadcast, BaseCharacter, MediaImages } from "./helpers/shared";

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
    source?: string | null;
    episodes?: number | null;
    status?: EnumAnimeStatus | null;
    airing: boolean;
    aired: BaseDateRange;
    duration?: string | null;
    rating?: EnumAnimeRating | null;
    season?: string | null;
    year?: number | null;
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

export interface AnimeNewsType {
    mal_id: number,
    url: string,
    title: string,
    date: string,
    author_username: string,
    author_url: string,
    forum_url: string,
    images: {
        jpg: {
            image_url: string
        }
    },
    comments: number,
    excerpt: string
}

export interface AnimeCharacters {
    character: BaseCharacter;
    role: string,
    voice_actors: {
        person: BaseCharacter;
        language: string;
    }[]
}

export interface AnimeEpisodes {
    mal_id: number,
    url: string | null,
    title: string,
    title_japanese: string | null,
    title_romanji: string | null,
    aired: string | null,
    score: null | number,
    filler: boolean,
    recap: boolean,
    forum_url: string | null;
}

export interface AnimeRelations {
    relation: string;
    entry: Entity[]
}

export interface AnimeVideos {
    promo?: {
        title: string;
        trailer: Trailer;
    }[];
    episodes: {
        mal_id: number;
        url: string;
        title: string;
        episodes: string;
        images: {
            jpg: {
                image_url: string
            }
        }
    };
    music_videos: {
        title: string;
        video: Trailer;
        meta: {
            title: string,
            author: string
        }
    }[];
}

export interface AnimeExternal {
    name: string;
    url: string;
}

export interface AnimeRecommendations {
    entry: {
        mal_id: number;
        url: string;
        images: MediaImages;
        title: string;
    }
}

export type TopAnimeResponse = ApiResponse<TopAnimeType[]>;
export type AnimeNewsResponse = ApiResponse<AnimeNewsType[]>;
export type AnimeEpisodesResponse = ApiResponse<AnimeEpisodes[]>;
export type AnimeCharactersResponse = ApiResponseWithoutPagination<AnimeCharacters[]>
export type AnimeRelationsResponse = ApiResponseWithoutPagination<AnimeRelations[]>;
export type AnimeByIdResponse = ApiResponseWithoutPagination<AnimeByIdType>;
export type AnimeVideosResponse = ApiResponseWithoutPagination<AnimeVideos>;
export type AnimeExternalResponse = ApiResponseWithoutPagination<AnimeExternal[]>;
export type AnimeRecommendationsResponse = ApiResponseWithoutPagination<AnimeRecommendations[]>;