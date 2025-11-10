import type { BasePerson, MediaImages, Entity } from "./shared";
import type { ApiResponse } from "@/types/anime/helpers/responses";

// Character
export interface Character extends BasePerson {
    role?: "Main" | "Supporting" | string;
    favorites?: number;
    url: string;
    images: MediaImages;
    anime?: {
        name: string;
        url: string;
        role?: string;
    }[];
    manga?: {
        name: string;
        url: string;
        role?: string;
    }[];
}

// Staff
export interface Staff extends BasePerson {
    positions?: string[];
    anime?: {
        mal_id: number;
        title: string;
        url: string;
        images?: MediaImages;
        role?: string;
    }[];
}

// Voice Actor
export interface VoiceActor extends BasePerson {
    language: string;
    anime?: {
        mal_id: number;
        title: string;
        url: string;
        images?: MediaImages;
        role?: string;
    }[];
}

// Responses
export type CharacterResponse = ApiResponse<Character[]>;
export type StaffResponse = ApiResponse<Staff[]>;
export type VoiceActorResponse = ApiResponse<VoiceActor[]>;