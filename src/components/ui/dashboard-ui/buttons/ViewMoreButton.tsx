import { Button } from "../../button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropsType {
  title?: string;
  url: string;
  className?: string;
  size?: "sm" | "lg" | "default";
  variant?: "default" | "secondary" | "outline" | "ghost";
}

export const ViewMoreButton: React.FC<PropsType> = ({
  url,
  title = "View More",
  className,
  size = "sm",
  variant = "secondary",
}) => (
  <Button
    variant={variant}
    size={size}
    asChild
    type="button"
    className={cn(className)}
  >
    <Link href={url} target="_blank" rel="noopener noreferrer">
      {title} <ExternalLink />
    </Link>
  </Button>
);
