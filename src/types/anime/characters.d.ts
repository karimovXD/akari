import type { BaseDateRange, BaseMedia, Entity, Trailer, Broadcast, BaseCharacter, MediaImages, Entity2 } from "./helpers/shared";
import { ApiResponse, ApiResponseWithoutPagination } from "./helpers/responses";

export interface CharacterFullByIdType extends BaseCharacter {
    name_kanji: string | null,
    nicknames: string[],
    favorites: number,
    about: string | null,
    anime: {
        role: string;
        anime: Entity2;
    }[],
    manga: {
        role: string;
        manga: Entity2;
    }[],
    voices: {
        language: string;
        person: BaseCharacter;
    }[],
}

export interface CharacterPicturesType {
    jpg: {
        image_url: string | null;
    }
}

export interface CharacterAnimeType {
    role: string;
    anime: Entity2;
};

export interface CharacterMangaType {
    role: string;
    manga: Entity2;
};

export interface CharacterVoiceActorsType {
    language: string;
    person: BaseCharacter;
};


export type CharacterFullByIdTypeResponse = ApiResponseWithoutPagination<CharacterFullByIdType>;
export type CharacterPicturesTypeResponse = ApiResponseWithoutPagination<CharacterPicturesType[]>;
export type CharacterAnimeTypeResponse = ApiResponseWithoutPagination<CharacterAnimeType[]>;
export type CharacterMangaTypeResponse = ApiResponseWithoutPagination<CharacterMangaType[]>;
export type CharacterVoiceActorsTypeResponse = ApiResponseWithoutPagination<CharacterVoiceActorsType[]>;