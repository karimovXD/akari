import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const Nicknames = ({ nicknames }: { nicknames: string[] }) => {
  if (nicknames.length === 0) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Nicknames</CardTitle>
        <CardDescription>ニックネーム</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 flex-wrap">
        {nicknames?.map((item) => (
          <Badge variant={"secondary"} key={item}>
            {item}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};
