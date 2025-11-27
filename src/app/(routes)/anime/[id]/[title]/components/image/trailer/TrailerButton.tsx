"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface Props {
  onClick: () => void;
  label?: string;
}

export function TrailerButton({ onClick, label = "Watch Trailer" }: Props) {
  return (
    <Button onClick={onClick} type={"button"} className="w-full" disabled>
      <Play className="w-4 h-4 fill-white" />
      {label}
    </Button>
  );
}
