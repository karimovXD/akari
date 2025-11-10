import type { Metadata } from "next";

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

  return (
    <div>
      {title}
      {id}
    </div>
  );
};

export default page;
