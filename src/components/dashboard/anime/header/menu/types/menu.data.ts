export type MenuTitles = "home" | "mangas" | "genres" | "study"

export interface menuDataType {
    id: 1 | 2 | 3 | 4,
    title: MenuTitles,
    link: string;
}