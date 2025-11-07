import { MediaImages, Entity, Trailer } from "./shared";
import { AnimeType, AnimeStatus, AnimeRating } from "./enums";
import { ApiResponse } from "@/types/responses";

// Main Anime model (used everywhere)
export interface SearchAnimeType {
    mal_id: number;
    url: string;
    images: MediaImages;
    trailer?: Trailer | null;
    title: string;
    title_english?: string;
    title_japanese?: string;
    title_synonyms: string[];
    type?: AnimeType;
    source?: string;
    episodes?: number;
    status?: AnimeStatus;
    airing?: boolean;
    aired?: {
        from?: string;
        to?: string;
        string?: string;
    };
    duration?: string;
    rating?: AnimeRating;
    score?: number;
    scored_by?: number;
    rank?: number;
    popularity?: number;
    members?: number;
    favorites?: number;
    synopsis?: string;
    background?: string;
    season?: string;
    year?: number;
    genres: Entity[];
    studios: Entity[];
    producers: Entity[];
    licensors: Entity[];
}

// Search Anime Response
export type SearchAnimeResponse = ApiResponse<SearchAnimeType[]>;