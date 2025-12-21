import type { MediaType } from "./enums";

// Basic image structure (used for characters, anime, manga, etc)
export interface MediaImages {
    jpg?: {
        image_url: string;
        small_image_url?: string;
        large_image_url?: string;
    } | null;
    webp?: {
        image_url: string;
        small_image_url?: string;
        large_image_url?: string;
    } | null;
}

// Common representation for producers, studios, licensors, etc.
export interface Entity {
    mal_id: number;
    type: MediaType;
    name: string;
    url: string;
}

// Trailer info (appears in anime, etc)
export interface Trailer {
    youtube_id?: string | null;
    url?: string | null;
    embed_url?: string | null;
    images?: MediaImages | null;
}

// Pagination
export interface Pagination {
    last_visible_page: number;
    has_next_page: boolean;
    current_page: number;
    items: {
        count: number;
        total: number;
        per_page: number;
    };
}

export interface Broadcast {
    day: string;
    time: string;
    timezone: string;
    string: string;
};

// Base Types
export interface BasePerson {
    mal_id: number;
    url: string;
    images: MediaImages;
    name: string;
    given_name?: string | null;
    family_name?: string | null;
    alternate_names?: string[] | null;
    birthday?: string | null;
    favorites?: number | null;
    about?: string | null;
}
export interface BaseMedia {
    mal_id: number;
    url: string;
    images: MediaImages;
    title: string;
    title_english?: string | null;
    title_japanese?: string | null;
    title_synonyms: string[];
    score?: number | null;
    scored_by?: number | null;
    rank?: number | null;
    popularity?: number | null;
    members?: number | null;
    favorites?: number | null;
    synopsis?: string | null;
    background?: string | null;
    genres: Entity[];
}
export interface BaseUser {
    username: string;
    url: string;
    images?: MediaImages | null;
}
export interface BaseDateRange {
    from?: string | null;
    to?: string | null;
    string?: string | null;
}
export interface BaseCharacter {
    mal_id: number;
    url: string;
    name: string;
    images: MediaImages
}