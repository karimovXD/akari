// Genre type always returns "anime" or "manga"
export type MediaType = "anime" | "manga" | "character" | "person" | "producer" | "magazine" | "studio" | "licensor" | "theme" | "demographic" | "genre";

//Manga basicTypes
export type MangaType = "manga" | "novel" | "lightnovel" | "oneshot" | "doujin" | "manhwa" | "manhua";
export type MangaStatus = "publishing" | "complete" | "hiatus" | "discontinued" | "upcoming";

// Common enum for anime types
export const EnumAnimeType = {
    TV = "TV",
    MOVIE = "Movie",
    OVA = "OVA",
    SPECIAL = "Special",
    ONA = "ONA",
    MUSIC = "Music",
    CM = "CM"
} as const
export type EnumAnimeType = (typeof EnumAnimeType)[keyof typeof EnumAnimeType]

// Anime status values
export const EnumAnimeStatus = {
    AIRING = "Currently Airing",
    FINISHED = "Finished Airing",
    NOT_YET_AIRED = "Not yet aired",
} as const
export type EnumAnimeStatus = (typeof EnumAnimeStatus)[keyof typeof EnumAnimeStatus]

// Age ratings - as defined by Jikan (source: MyAnimeList)
export const EnumAnimeRating = {
    G = "G",
    PG = "PG",
    PG13 = "PG-13",
    R = "R",
    R17 = "R-17",
    RX = "Rx",
} as const
export type EnumAnimeRating = (typeof EnumAnimeRating)[keyof typeof EnumAnimeRating]

