import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { infoData } from "./info.data";
import type { PersonFullByIdType } from "@/types/anime/people";

interface PropsType {
  person: PersonFullByIdType;
}

export const MiniInfo: React.FC<PropsType> = ({ person }) => {
  const miniInfo = infoData(person);

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
                <CardTitle className="capitalize">{item.title}</CardTitle>
                <CardDescription>{item.response}</CardDescription>
              </div>
            )
        )}
      </CardContent>
    </Card>
  );
};
