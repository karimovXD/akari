import { LargeImage } from "@/components/ui/dashboard-ui/images/large-image/LargeImage";
import { Visit } from "./Visit";
import { Nicknames } from "./Nicknames";
import type { CharacterFullByIdType } from "@/types/anime/characters";
import { MiniInfo } from "./mini-info";

interface PropsType {
  character: CharacterFullByIdType;
}

const MainImage: React.FC<PropsType> = ({ character }) => {
  const hasImageData = character?.images?.webp?.image_url && character?.name;

  const animeListId = character?.url && (
    <Visit anime_list_id={character?.url} />
  );

  return (
    <div className="w-auto h-auto relative">
      <div className="sticky top-[5rem] flex flex-col items-center justify-center gap-2">
        {hasImageData && (
          <LargeImage
            large_image_url={character?.images?.webp?.image_url!}
            title={character?.name}
          />
        )}
        {animeListId}
        <MiniInfo character={character} />
        <Nicknames nicknames={character?.nicknames!} />
      </div>
    </div>
  );
};

export default MainImage;
