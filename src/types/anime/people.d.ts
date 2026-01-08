import type { BaseDateRange, BaseMedia, Entity, Trailer, Broadcast, BaseCharacter, MediaImages, Entity2 } from "./helpers/shared";
import { ApiResponse, ApiResponseWithoutPagination } from "./helpers/responses";

export interface PersonFullByIdType extends BaseCharacter {
    website_url: string | null,
    given_name: string | null,
    family_name: string | null,
    alternate_names: string[],
    birthday: string | null,
    favorites: number,
    about: string | null,
    anime: {
        position: string;
        anime: Entity2;
    }[],
    manga: {
        position: string;
        manga: Entity2;
    }[],
    voices: {
        role: string;
        anime: Entity2;
        character: BaseCharacter;
    }[],
}

export type PersonFullByIdTypeResponse = ApiResponseWithoutPagination<PersonFullByIdType>;