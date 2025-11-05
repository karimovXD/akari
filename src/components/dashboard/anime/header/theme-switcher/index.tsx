"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { themeData } from "./theme.data";
import { useCallback } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const handleSelect = useCallback(
    (theme: string) => setTheme(theme),
    [setTheme]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" variant="ghost" size="icon">
          <Sun
            className={cn(
              "scale-100 rotate-0 dark:scale-0 dark:-rotate-90",
              styles.button_trigger_icon
            )}
          />
          <Moon
            className={cn(
              "absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0",
              styles.button_trigger_icon
            )}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="font-bold">
          Select the theme
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeData?.map((item) => (
          <DropdownMenuItem
            className={cn(
              styles.dropdown_menu_item,
              theme === item.title && "bg-accent text-accent-foreground"
            )}
            onClick={() => handleSelect(item.title)}
            key={item.id}
          >
            <item.icon /> {item.title}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
