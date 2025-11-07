"use client";
import { useSearchAnime } from "@/hooks/anime/useSearchAnime";
import { useSearchParams } from "next/navigation";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import Image from "next/image";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";

export const Search = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result") ?? "";
  const { data, isLoading, isError } = useSearchAnime(result);

  if (!data) return null;

  return (
    <QueryState isLoading={isLoading} isError={isError} data={data}>
      <ItemGroup className="grid grid-cols-5 gap-2">
        {data.data.map((item, i) => (
          <Item
            key={item.title + i}
            variant="default"
            className="hover:bg-muted/50"
            size={"sm"}
          >
            <ItemHeader>
              <Image
                src={item.images.webp?.large_image_url as string}
                alt={item.title}
                width={200}
                height={300}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.rating}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </QueryState>
  );
};
