import type { PersonFullByIdType } from "@/types/anime/people";
import { EnumInfoItemType, type InfoItem } from "./types";
import { format } from "date-fns";

export const infoData = (item: PersonFullByIdType): InfoItem[] => [
    {
        title: EnumInfoItemType.ID,
        response: item.mal_id,
    },
    {
        title: EnumInfoItemType.GIVEN_NAME,
        response: item.given_name,
    },
    {
        title: EnumInfoItemType.FAMILY_NAME,
        response: item.family_name,
    },
    {
        title: EnumInfoItemType.BIRTHDAY,
        response: item.birthday
            ? format(item.birthday, "dd.MM.yyyy")
            : "—",
    },
    {
        title: EnumInfoItemType.FAVORITES,
        response: item.favorites,
    },
    {
        title: EnumInfoItemType.ANIME,
        response: item.anime?.length,
    },
] as const;