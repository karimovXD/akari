import { Button } from "@/components/ui/button";
import { Title } from "./Title";
import type { Entity } from "@/types/anime/helpers/shared";
import { Users } from "lucide-react";

interface PropsType {
  data: Entity[] | undefined;
}

export const Demographics: React.FC<PropsType> = ({ data }) => (
  <Title ifIcon={true} title="Demographics" icon={Users}>
    {(data ?? []).map((item) => (
      <Button key={item.mal_id} variant="secondary" type="button">
        {item.name}
      </Button>
    ))}
  </Title>
);
