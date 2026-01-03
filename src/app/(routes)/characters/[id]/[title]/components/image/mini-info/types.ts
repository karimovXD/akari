export const EnumInfoItemType = {
    ID: "id",
    FAVORITES: "favorites",
    ANIME: "anime",
    MANGA: "manga",
    VOICE_ACTORS: "voice actors",
    LANGUAGES: "languages",
    JAPANESE_NAME: "japanese name",
} as const

export type EnumInfoItemType = (typeof EnumInfoItemType)[keyof typeof EnumInfoItemType];

export interface InfoItem {
    title: EnumInfoItemType,
    response: string | number | null,
}