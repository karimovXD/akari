import type { Metadata } from "next";
import { Hajime } from "./Hajime";

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
  const { id } = params;

  return <Hajime id={Number(id)} />;
};

export default page;
