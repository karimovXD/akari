import type { CharacterFullByIdType } from "@/types/anime/characters";
import { EnumInfoItemType, type InfoItem } from "./types";

export const infoData = (item: CharacterFullByIdType): InfoItem[] => [
    {
        title: EnumInfoItemType.ID,
        response: item.mal_id,
    },
    {
        title: EnumInfoItemType.FAVORITES,
        response: item.favorites,
    },
    {
        title: EnumInfoItemType.ANIME,
        response: item.anime?.length,
    },
    {
        title: EnumInfoItemType.MANGA,
        response: item.manga?.length,
    },
    {
        title: EnumInfoItemType.VOICE_ACTORS,
        response: item.voices?.length,
    },
    {
        title: EnumInfoItemType.LANGUAGES,
        response: new Set(item.voices?.map(v => v.language)).size,
    },
    {
        title: EnumInfoItemType.JAPANESE_NAME,
        response: item.name_kanji,
    },
] as const;