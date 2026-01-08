import type { Metadata } from "next";
import { People } from "./People";

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

  return <People id={id} />;
};

export default page;
