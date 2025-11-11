"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { menuData } from "./selectMenu.data";
import type { MenuTitles } from "../../types/selectMenu.data";

interface PropsType {
  selectQuery: MenuTitles;
  setSelectQuery: React.Dispatch<React.SetStateAction<MenuTitles>>;
}

export const SelectComponent: React.FC<PropsType> = ({
  selectQuery,
  setSelectQuery,
}) => {
  return (
    <Select
      value={selectQuery}
      onValueChange={(value) => setSelectQuery(value as MenuTitles)}
    >
      <SelectTrigger className="font-mono">{selectQuery}</SelectTrigger>
      <SelectContent className="min-w-24">
        {menuData.map((item) => (
          <SelectItem key={item.id} value={item.title}>
            <span className="text-muted-foreground">{item.title}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
