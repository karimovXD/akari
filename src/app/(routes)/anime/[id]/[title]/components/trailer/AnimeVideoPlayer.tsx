"use client";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  embedUrl?: string | null;
  title?: string;
};

export const AnimeVideoPlayer = ({ embedUrl, title }: Props) => {
  if (!embedUrl) return null;

  return (
    <Card className="relative overflow-hidden w-full">
      <CardContent className="p-0 aspect-video overflow-hidden relative">
        <iframe
          src={`${embedUrl}?autoplay=1`}
          title={title ?? "Anime video"}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};
