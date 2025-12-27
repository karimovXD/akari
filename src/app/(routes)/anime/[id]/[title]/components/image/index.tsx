import WhereToWatch from "../where-to-watch";
import { AnimeImage } from "./AnimeImage";
import { Visit } from "./Visit";

interface PropsType {
  large_image_url?: string;
  title?: string;
  anime_list_id?: string;
  id: number;
}

const MainImage: React.FC<PropsType> = ({
  large_image_url,
  title,
  anime_list_id,
  id,
}) => {
  const hasImageData = large_image_url && title;

  const animeListId = anime_list_id && <Visit anime_list_id={anime_list_id} />;

  return (
    <div className="w-auto h-auto relative">
      <div className="sticky top-[5rem] flex flex-col items-center justify-center gap-2">
        {hasImageData && (
          <AnimeImage large_image_url={large_image_url} title={title} />
        )}
        {animeListId}
        <WhereToWatch id={id} />
      </div>
    </div>
  );
};

export default MainImage;
