import { ViewMoreButton } from "@/components/ui/dashboard-ui/buttons/ViewMoreButton";
import { memo } from "react";

interface PropsType {
  title: string;
  url: string;
}

export const ExternalItem = memo<PropsType>(({ title, url }) => (
  <ViewMoreButton url={url} title={title} size="lg" variant="outline" />
));

ExternalItem.displayName = "ExternalItem";
