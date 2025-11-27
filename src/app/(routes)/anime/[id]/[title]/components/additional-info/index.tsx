import { Studios } from "./studios";
import { Producers } from "./producers";
import type { Entity } from "@/types/anime/helpers/shared";
import { Genres } from "./genres";
import { Themes } from "./themes";
import { Demographics } from "./demographics";

interface PropsType {
  studios: Entity[] | undefined;
  producers: Entity[] | undefined;
  genres: Entity[] | undefined;
  themes: Entity[] | undefined;
  demographics: Entity[] | undefined;
}

const AdditionInfo: React.FC<PropsType> = ({
  studios,
  producers,
  genres,
  themes,
  demographics,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <Studios data={studios} />
      <Producers data={producers} />
      <Genres data={genres} />
      <Themes data={themes} />
      <Demographics data={demographics} />
    </div>
  );
};

export default AdditionInfo;
