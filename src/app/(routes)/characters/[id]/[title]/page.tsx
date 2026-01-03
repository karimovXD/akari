import type { Metadata } from "next";
import { Characters } from "./Characters";

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

  return <Characters id={id} />;
};

export default page;
