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