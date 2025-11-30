import type { LucideIcon } from "lucide-react";

export const EnumTabsInfoType = {
    OVERVIEW: "overview",
    EPISODES: "episodes",
    CHARACTERS: "characters",
    RELATED: "related",
} as const

export type EnumTabsInfoType = (typeof EnumTabsInfoType)[keyof typeof EnumTabsInfoType];

export interface tabsInfoType {
    id: number,
    title: EnumTabsInfoType,
    icon: LucideIcon
}