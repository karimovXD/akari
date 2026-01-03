import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { infoData } from "./info.data";
import type { CharacterFullByIdType } from "@/types/anime/characters";

interface PropsType {
  character: CharacterFullByIdType;
}

export const MiniInfo: React.FC<PropsType> = ({ character }) => {
  const miniInfo = infoData(character);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Info</CardTitle>
        <CardDescription>情報</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {miniInfo.map(
          (item) =>
            item.response && (
              <div key={item.title} className="flex items-center gap-2">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.response}</CardDescription>
              </div>
            )
        )}
      </CardContent>
    </Card>
  );
};
