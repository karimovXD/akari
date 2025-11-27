import type { MediaType } from "./enums";

// Basic image structure (used for characters, anime, manga, etc)
export interface MediaImages {
    jpg?: {
        image_url: string;
        small_image_url?: string;
        large_image_url?: string;
    };
    webp?: {
        image_url: string;
        small_image_url?: string;
        large_image_url?: string;
    };
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
    youtube_id?: string;
    url?: string;
    embed_url?: string;
    images?: MediaImages;
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
    given_name?: string;
    family_name?: string;
    alternate_names?: string[];
    birthday?: string;
    favorites?: number;
    about?: string;
}
export interface BaseMedia {
    mal_id: number;
    url: string;
    images: MediaImages;
    title: string;
    title_english?: string;
    title_japanese?: string;
    title_synonyms: string[];
    score?: number;
    scored_by?: number;
    rank?: number;
    popularity?: number;
    members?: number;
    favorites?: number;
    synopsis?: string;
    background?: string;
    genres: Entity[];
}
export interface BaseUser {
    username: string;
    url: string;
    images?: MediaImages;
}
export interface BaseDateRange {
    from?: string;
    to?: string;
    string?: string;
}