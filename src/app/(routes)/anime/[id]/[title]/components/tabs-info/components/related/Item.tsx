import { ViewMoreButton } from "@/components/ui/dashboard-ui/buttons/ViewMoreButton";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { memo } from "react";

interface PropsType {
  title: string;
  type: string;
  url: string;
}

const RelatedItem: React.FC<PropsType> = ({ title, type, url }) => (
  <Item variant="outline">
    <ItemContent>
      <ItemTitle>{title}</ItemTitle>
      <ItemDescription>{type}</ItemDescription>
    </ItemContent>
    <ItemActions>
      <ViewMoreButton url={url} />
    </ItemActions>
  </Item>
);

export default memo(RelatedItem);
