import React from "react";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

interface AnimeItemProps {
  title: string;
  description: React.ReactNode;
  logo: React.ReactNode;
}

const AnimeItem: React.FC<AnimeItemProps> = ({ title, description, logo }) => (
  <Item size="sm" className="w-full p-2" variant="outline">
    <ItemMedia variant="image">{logo}</ItemMedia>
    <ItemContent>
      <ItemTitle className="capitalize">{title}</ItemTitle>
      <ItemDescription>{description}</ItemDescription>
    </ItemContent>
  </Item>
);

export default React.memo(AnimeItem);
