import type { LucideIcon } from "lucide-react";

export const EnumTabsContentType = {
    GITHUB: "GitHub",
    LINKEDIN: "LinkedIn",
    EMAIL: "Email",
} as const

export type EnumTabsContentType = (typeof EnumTabsContentType)[keyof typeof EnumTabsContentType];

export interface footerType {
    id: number;
    title: EnumTabsContentType;
    url: string;
    icon: LucideIcon;
}