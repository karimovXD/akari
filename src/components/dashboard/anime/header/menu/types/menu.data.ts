import type { LucideIcon } from "lucide-react";

export type MenuTitles = "home" | "mangas" | "genres" | "study" | "search"

export interface menuDataType {
    id: number,
    title: MenuTitles,
    link: string;
    icon: LucideIcon;
}