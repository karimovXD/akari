import type { MenuTitles } from "@/components/dashboard/anime/header/search/types/selectMenu.data";

interface PropsType {
  children: React.ReactNode;
  category: MenuTitles;
  categoryCurrentTitle: MenuTitles;
}

export const FilterCategoryComponent: React.FC<PropsType> = ({
  children,
  category,
  categoryCurrentTitle,
}) => {
  if (categoryCurrentTitle === "all" || categoryCurrentTitle === category) {
    return <>{children}</>;
  }
};
