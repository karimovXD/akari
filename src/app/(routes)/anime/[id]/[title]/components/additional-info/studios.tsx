import { Button } from "@/components/ui/button";
import { Title } from "./Title";
import type { Entity } from "@/types/anime/helpers/shared";

interface PropsType {
  data: Entity[] | undefined;
}

export const Studios: React.FC<PropsType> = ({ data }) => (
  <Title ifIcon={false} title="Studios">
    {(data ?? []).map((item) => (
      <Button key={item.mal_id} variant="outline" type="button">
        {item.name}
      </Button>
    ))}
  </Title>
);