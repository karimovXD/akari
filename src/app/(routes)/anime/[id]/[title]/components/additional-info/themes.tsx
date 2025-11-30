import { Button } from "@/components/ui/button";
import { Title } from "./Title";
import type { Entity } from "@/types/anime/helpers/shared";
import { Bookmark } from "lucide-react";
import { WithData } from "@/utils/api/with-data";

interface PropsType {
  data: Entity[] | undefined;
}

const ThemesBase: React.FC<PropsType> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Title ifIcon={true} title="Themes" icon={Bookmark}>
      {(data ?? []).map((item) => (
        <Button key={item.mal_id} variant="secondary" type="button" size={"sm"}>
          {item.name}
        </Button>
      ))}
    </Title>
  );
};

export const Themes = WithData<Entity>(ThemesBase);
