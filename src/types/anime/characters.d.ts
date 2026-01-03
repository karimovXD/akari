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

export type CharacterFullByIdTypeResponse = ApiResponseWithoutPagination<CharacterFullByIdType>;