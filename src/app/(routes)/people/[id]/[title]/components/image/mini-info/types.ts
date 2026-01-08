export const EnumInfoItemType = {
    ID: "id",
    FAVORITES: "favorites",
    ANIME: "anime",
    BIRTHDAY: "birthday",
    GIVEN_NAME: "given name",
    FAMILY_NAME: "Family name",
} as const

export type EnumInfoItemType = (typeof EnumInfoItemType)[keyof typeof EnumInfoItemType];

export interface InfoItem {
    title: EnumInfoItemType,
    response: string | number | null,
}