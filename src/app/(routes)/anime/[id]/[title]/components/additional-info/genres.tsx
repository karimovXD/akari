import { Button } from "@/components/ui/button";
import { Title } from "./Title";
import type { Entity } from "@/types/anime/helpers/shared";
import { Tag } from "lucide-react";
import { WithData } from "@/utils/api/with-data";

interface PropsType {
  data: Entity[] | undefined;
}

const GenresBase: React.FC<PropsType> = ({ data }) => (
  <Title ifIcon={true} title="Genres" icon={Tag}>
    {(data ?? []).map((item) => (
      <Button key={item.mal_id} variant="secondary" type="button" size={"sm"}>
        {item.name}
      </Button>
    ))}
  </Title>
);

export const Genres = WithData<Entity>(GenresBase);