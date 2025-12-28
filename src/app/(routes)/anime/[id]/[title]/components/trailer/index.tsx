import { useGetAnimeVideos } from "@/hooks/anime/useAnime";
import { QueryState } from "@/components/dashboard/anime/QueryState";
import { AnimeVideoPlayer } from "./AnimeVideoPlayer";

type Props = {
  id: number;
};

const AnimeTrailerViewer = ({ id }: Props) => {
  const { data, isLoading, isError } = useGetAnimeVideos(id);

  const promo = data?.data?.promo ?? [];
  const firstTrailer = promo[0]?.trailer;

  return (
    <QueryState
      isLoading={isLoading}
      isError={isError}
      data={data}
      loader="loading"
    >
      {firstTrailer?.embed_url ? (
        <AnimeVideoPlayer
          embedUrl={firstTrailer.embed_url}
          title={promo[0]?.title}
        />
      ) : (
        <div className="border border-dashed rounded-lg p-2 flex justify-center items-center">
          Video unavailable
        </div>
      )}
    </QueryState>
  );
};

export default AnimeTrailerViewer;
