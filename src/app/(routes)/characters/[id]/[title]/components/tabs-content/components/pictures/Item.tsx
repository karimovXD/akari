import Image from "next/image";
import { Card } from "@/components/ui/card";
import { memo } from "react";

type PropsType = {
  src: string | null;
  alt?: string;
};

export const Item = memo(({ src, alt = "" }: PropsType) => {
  if (!src) return null;

  return (
    <Card className="grid overflow-hidden rounded-xl border-none">
      <div className="relative aspect-[2/3]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 320px"
        />
      </div>
    </Card>
  );
});

Item.displayName = "Item";
