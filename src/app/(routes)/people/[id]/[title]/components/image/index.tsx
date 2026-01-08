import { LargeImage } from "@/components/ui/dashboard-ui/images/large-image/LargeImage";
import { Visit } from "./Visit";
import { AlternativeNames } from "./AlternativeNames";
import type { PersonFullByIdType } from "@/types/anime/people";
import { MiniInfo } from "./mini-info";

interface PropsType {
  person: PersonFullByIdType;
}

const MainImage: React.FC<PropsType> = ({ person }) => {
  const hasImageData = person?.images?.jpg?.image_url && person?.name;

  const animeListId = person?.url && <Visit anime_list_id={person?.url} />;

  return (
    <div className="w-auto h-auto relative">
      <div className="sticky top-[5rem] flex flex-col items-center justify-center gap-2">
        {hasImageData && (
          <LargeImage
            large_image_url={person?.images?.jpg?.image_url!}
            title={person?.name}
          />
        )}
        {animeListId}
        <MiniInfo person={person} />
        <AlternativeNames nicknames={person?.alternate_names!} />
      </div>
    </div>
  );
};

export default MainImage;
