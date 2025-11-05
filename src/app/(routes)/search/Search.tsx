"use client";
import { useSearchParams } from "next/navigation";

export const Search = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">
        Результаты поиска {!!result && `by #${result}`}
      </h1>
    </div>
  );
};
