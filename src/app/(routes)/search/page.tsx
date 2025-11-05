import type { Metadata } from "next";
import { Search } from "./Search";

export const metadaData: Metadata = {
  title: "Search",
};

export default function ResultsPage() {
  return <Search />;
}
