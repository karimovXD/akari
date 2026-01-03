import type { CharacterFullByIdType } from "@/types/anime/characters";

export const infoData = (item: CharacterFullByIdType) => [
    {
        title: "MAL ID",
        response: item.mal_id,
    },
    {
        title: "favorites",
        response: item.favorites,
    },
    {
        title: "anime",
        response: item.anime?.length,
    },
    {
        title: "manga",
        response: item.manga?.length,
    },
    {
        title: "voice actors",
        response: item.voices?.length,
    },
    {
        title: "languages",
        response: new Set(item.voices?.map(v => v.language)).size,
    },
    {
        title: "japanese name",
        response: item.name_kanji,
    },
] as const;