import type { Metadata } from "next";
import { AnimeByGenre } from "./AnimeByGenre";

type PropsType = {
  params: {
    title: string;
    id: string;
  };
};

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  return {
    title: decodeURIComponent(params.title),
  };
}

const page = ({ params }: PropsType) => {
  const { title, id } = params;

  return <AnimeByGenre title={title} id={id} />;
};

export default page;
