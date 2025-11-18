"use client";
import { menuData } from "./menu.data";
import { MenuItem } from "./components/MenuItem";
import { usePathname } from "next/navigation";
import { match } from "path-to-regexp";
import { cn } from "@/lib/utils";

const HeaderMenu = () => {
  const pathname = usePathname();

  return (
    <div className={cn(`hidden md:flex items-center`)}>
      {menuData?.map((item) => (
        <MenuItem
          key={item.id}
          link={item.link}
          title={item.title}
          isActive={!!match(item.link)(pathname)}
        />
      ))}
    </div>
  );
};

export default HeaderMenu;
