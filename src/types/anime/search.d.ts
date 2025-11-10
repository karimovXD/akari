import type { MediaImages, Entity, Trailer, BaseMedia, BaseDateRange, BasePerson } from "./helpers/shared";
import type { AnimeType, AnimeStatus, AnimeRating, MangaType, MangaStatus, EnumAnimeType, EnumAnimeStatus, EnumAnimeRating } from "./helpers/enums";
import type { ApiResponse } from "@/types/anime/helpers/responses";

export interface SearchAnimeType extends BaseMedia {
    trailer?: Trailer | null;
    type?: EnumAnimeType;
    source?: string;
    episodes?: number;
    status?: EnumAnimeStatus;
    airing?: boolean;
    aired?: BaseDateRange;
    duration?: string;
    rating?: EnumAnimeRating;
    season?: string;
    year?: number;
    studios: Entity[];
    producers: Entity[];
    licensors: Entity[];
}

export interface SearchMangaType extends BaseMedia {
    type?: MangaType;
    status?: MangaStatus;
    chapters?: number;
    volumes?: number;
    publishing?: boolean;
    published?: BaseDateRange;
    authors: BasePerson[];
    serializations: Entity[];
    themes: Entity[];
    demographics: Entity[];
}

export interface SearchCharacterType extends BaseMedia {
    mal_id: number;
    url: string;
    images: MediaImages;
    name: string;
    name_kanji?: string;
    nicknames: string[];
    favorites: number;
    about?: string;
}

// Search Anime Response
export type SearchAnimeResponse = ApiResponse<SearchAnimeType[]>;
export type SearchMangaResponse = ApiResponse<SearchMangaType[]>;
export type SearchCharacterResponse = ApiResponse<SearchCharacterType[]>;