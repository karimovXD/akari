import { ViewMoreButton } from "@/components/ui/dashboard-ui/buttons/ViewMoreButton";
import { memo } from "react";

interface PropsType {
  title: string;
  url: string;
}

export const WhereToWatchItem = memo<PropsType>(({ title, url }) => (
  <ViewMoreButton url={url} title={title} variant="outline" />
));

WhereToWatchItem.displayName = "WhereToWatchItem";
