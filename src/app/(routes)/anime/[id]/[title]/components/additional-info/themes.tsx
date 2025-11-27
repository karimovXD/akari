import { Button } from "@/components/ui/button";
import { Title } from "./Title";
import type { Entity } from "@/types/anime/helpers/shared";
import { Bookmark } from "lucide-react";

interface PropsType {
  data: Entity[] | undefined;
}

export const Themes: React.FC<PropsType> = ({ data }) => (
  <Title ifIcon={true} title="Themes" icon={Bookmark}>
    {(data ?? []).map((item) => (
      <Button key={item.mal_id} variant="secondary" type="button">
        {item.name}
      </Button>
    ))}
  </Title>
);
