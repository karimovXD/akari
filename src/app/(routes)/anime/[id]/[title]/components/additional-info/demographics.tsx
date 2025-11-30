import { Button } from "@/components/ui/button";
import { Title } from "./Title";
import type { Entity } from "@/types/anime/helpers/shared";
import { Users } from "lucide-react";
import { WithData } from "@/utils/api/with-data";

interface PropsType {
  data: Entity[] | undefined;
}

const DemographicsBase: React.FC<PropsType> = ({ data }) => (
  <Title ifIcon={true} title="Demographics" icon={Users}>
    {(data ?? []).map((item) => (
      <Button key={item.mal_id} variant="secondary" type="button" size={"sm"}>
        {item.name}
      </Button>
    ))}
  </Title>
);

export const Demographics = WithData<Entity>(DemographicsBase);
