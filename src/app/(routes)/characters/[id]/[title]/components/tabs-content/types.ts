import type { LucideIcon } from "lucide-react";

export const EnumTabsContentType = {
    BIOGRAPHY: "biography",
    PICTURES: "pictures",
    ANIME: "anime",
    MANGA: "manga",
    VOICE_ACTORS: "voice actors",
} as const

export type EnumTabsContentType = (typeof EnumTabsContentType)[keyof typeof EnumTabsContentType];

export interface tabsContentType {
    id: number,
    title: EnumTabsContentType,
    icon: LucideIcon
}