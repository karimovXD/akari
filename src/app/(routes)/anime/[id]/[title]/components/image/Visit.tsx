import { ViewMoreButton } from "@/components/ui/dashboard-ui/buttons/ViewMoreButton";

export const Visit: React.FC<{ anime_list_id: string }> = ({
  anime_list_id,
}) => (
  <ViewMoreButton
    url={anime_list_id}
    title="Visit on MyAnimeList"
    className="w-full"
  />
);
