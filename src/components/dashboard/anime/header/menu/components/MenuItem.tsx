import type { MenuTitles } from "../types/menu.data";
import type { LucideIcon } from "lucide-react";
import { TooltipIconButton } from "@/components/ui/dashboard-ui/buttons/TooltipIconButton";

interface propsType {
  title: MenuTitles;
  link: string;
  isActive: boolean;
  icon: LucideIcon;
}

export const MenuItem: React.FC<propsType> = ({
  link,
  title,
  isActive,
  icon,
}) => {
  const button = (
    <TooltipIconButton
      title={title}
      icon={icon}
      href={link}
      position="bottom-center"
      disabled={isActive}
    />
  );

  return button;
};
