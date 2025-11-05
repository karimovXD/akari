import { Moon, Sun, Monitor } from "lucide-react";
import type { themeDataType } from "./types/themeSwitcher";

export const themeData: themeDataType[] = [
    {
        id: 1,
        title: "light",
        icon: Sun
    },
    {
        id: 2,
        title: "dark",
        icon: Moon
    },
    {
        id: 3,
        title: "system",
        icon: Monitor
    }
]