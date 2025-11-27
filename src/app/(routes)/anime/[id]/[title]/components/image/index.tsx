import { AnimeImage } from "./AnimeImage";
import Trailer from "./trailer";
import { Visit } from "./Visit";

interface PropsType {
  large_image_url: string;
  title: string;
  anime_list_id: string;
  embed_url: string;
}

const MainImage: React.FC<PropsType> = ({
  large_image_url,
  title,
  anime_list_id,
  embed_url,
}) => {
  return (
    <div className="w-auto h-auto relative">
      <div className="sticky top-[5rem] flex flex-col items-center justify-center gap-2">
        <AnimeImage large_image_url={large_image_url} title={title} />
        <Trailer trailerId={embed_url} />
        <Visit anime_list_id={anime_list_id} />
      </div>
    </div>
  );
};

export default MainImage;
