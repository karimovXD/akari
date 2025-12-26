import { Button } from "../../button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropsType {
  title?: string;
  url: string;
  className?: string;
}

export const ViewMoreButton: React.FC<PropsType> = ({
  url,
  title = "View More",
  className,
}) => (
  <Button
    variant={"secondary"}
    size={"sm"}
    asChild
    type="button"
    className={cn(className)}
  >
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {title} <ExternalLink />
    </Link>
  </Button>
);
