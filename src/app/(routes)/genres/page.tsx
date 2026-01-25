import type { Metadata } from "next";
import { Genres } from "./Genres";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: decodeURIComponent("Genres"),
  };
}

const page = () => <Genres />;

export default page;
