import type { menuDataType } from "./types/menu.data";
import { DASHBOARD_PAGES } from "@/configs/pages.config";

export const menuData: menuDataType[] = [
    {
        id: 1,
        title: "home",
        link: DASHBOARD_PAGES.HOME,
    },
    {
        id: 2,
        title: "mangas",
        link: DASHBOARD_PAGES.MANGA.ROOT,
    },
    {
        id: 3,
        title: "genres",
        link: DASHBOARD_PAGES.GENRES,
    },
    {
        id: 4,
        title: "study",
        link: DASHBOARD_PAGES.STUDY,
    },
]