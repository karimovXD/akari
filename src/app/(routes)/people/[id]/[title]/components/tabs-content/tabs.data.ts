import { BookImage, User, Shell } from "lucide-react";
import { EnumTabsContentType } from "./types";
import type { tabsContentType } from "./types";

export const menuData: tabsContentType[] = [
    {
        id: 1,
        title: EnumTabsContentType.BIOGRAPHY,
        icon: User
    },
    {
        id: 2,
        title: EnumTabsContentType.PICTURES,
        icon: BookImage
    },
    {
        id: 3,
        title: EnumTabsContentType.ANIME,
        icon: Shell
    },
]