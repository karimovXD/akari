import Image from "next/image";

interface PropsType {
  large_image_url: string;
  title: string;
}

export const AnimeImage: React.FC<PropsType> = ({ large_image_url, title }) => (
  <Image
    src={large_image_url as string}
    width={320}
    height={200}
    alt={title as string}
    loading="lazy"
    className="rounded-md"
  />
);
