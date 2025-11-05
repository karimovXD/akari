import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { MenuTitles } from "../types/menu.data";

interface propsType {
  title: MenuTitles;
  link: string;
  isActive: boolean;
}

export const MenuItem: React.FC<propsType> = ({ link, title, isActive }) => {
  const button = (
    <Button variant={"ghost"} className="capitalize" disabled={isActive}>
      {title}
    </Button>
  );

  return isActive ? button : <Link href={link}>{button}</Link>;
};
