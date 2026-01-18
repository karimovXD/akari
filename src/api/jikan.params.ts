import type { DefaultJikanParams } from "@/api/jikan.type";

export const defaultParams: Partial<DefaultJikanParams> = {
    sfw: true,
    min_score: 4,
    min_members: 1000,
    order_by: "members",
    sort: "desc",
};