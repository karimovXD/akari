import { Logs, Tag, Users, Info } from "lucide-react";
import { EnumTabsInfoType } from "./types";
import type { tabsInfoType } from "./types";

export const menuData: tabsInfoType[] = [
    {
        id: 1,
        title: EnumTabsInfoType.OVERVIEW,
        icon: Info
    },
    {
        id: 2,
        title: EnumTabsInfoType.EPISODES,
        icon: Logs
    },
    {
        id: 3,
        title: EnumTabsInfoType.CHARACTERS,
        icon: Users
    },
    {
        id: 4,
        title: EnumTabsInfoType.RELATED,
        icon: Tag
    },
]