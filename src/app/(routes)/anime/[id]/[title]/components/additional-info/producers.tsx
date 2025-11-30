import { Button } from "@/components/ui/button";
import { Title } from "./Title";
import type { Entity } from "@/types/anime/helpers/shared";
import { WithData } from "@/utils/api/with-data";

interface PropsType {
  data: Entity[] | undefined;
}

const ProducersBase: React.FC<PropsType> = ({ data }) => (
  <Title ifIcon={false} title="Producers">
    {(data ?? []).map((item) => (
      <Button key={item.mal_id} variant="outline" type="button" size={"sm"}>
        {item.name}
      </Button>
    ))}
  </Title>
);

export const Producers = WithData<Entity>(ProducersBase);
