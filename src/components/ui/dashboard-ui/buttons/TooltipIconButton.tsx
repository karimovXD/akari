"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type BasePosition = "top" | "left" | "right" | "bottom";
type Align = "start" | "center" | "end";
type TooltipPlacement = `${BasePosition}-${Align}` | BasePosition;

interface TooltipIconButtonProps {
  title: string;
  position?: TooltipPlacement;
  icon: LucideIcon;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export const TooltipIconButton: React.FC<TooltipIconButtonProps> = ({
  title,
  icon: Icon,
  className,
  position = "top",
  onClick,
  href,
  disabled,
}) => {
  const button = (
    <Button
      variant="ghost"
      size="icon"
      aria-label={title}
      onClick={onClick}
      disabled={disabled}
      className={cn(className)}
    >
      <Icon className="w-5 h-5" />
    </Button>
  );

  const [side, align] = position.split("-") as [BasePosition, Align?];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {disabled ? (
            button
          ) : href ? (
            <Link href={href}>{button}</Link>
          ) : (
            button
          )}
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align ?? "center"}
          className="text-sm"
        >
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
