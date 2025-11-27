import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Visit: React.FC<{ anime_list_id: string }> = ({
  anime_list_id,
}) => (
  <Link href={anime_list_id} className="w-full">
    <Button
      type="button"
      aria-label="visit button"
      variant={"outline"}
      className="w-full"
    >
      Visit on MyAnimeList
    </Button>
  </Link>
);
