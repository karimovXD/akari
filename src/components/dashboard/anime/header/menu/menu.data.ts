import type { menuDataType } from "./types/menu.data";
import { DASHBOARD_PAGES } from "@/configs/pages.config";
import { House, BookA, Library, Drama, Search } from "lucide-react";

export const menuData: menuDataType[] = [
    {
        id: 1,
        title: "home",
        link: DASHBOARD_PAGES.HOME,
        icon: House
    },
    {
        id: 2,
        title: "mangas",
        link: DASHBOARD_PAGES.MANGA.ROOT,
        icon: Library
    },
    {
        id: 3,
        title: "genres",
        link: DASHBOARD_PAGES.GENRES,
        icon: Drama
    },
    {
        id: 4,
        title: "study",
        link: DASHBOARD_PAGES.STUDY,
        icon: BookA
    },
    {
        id: 5,
        title: "search",
        link: DASHBOARD_PAGES.SEARCH.ROOT,
        icon: Search
    },
]