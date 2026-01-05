import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData } from "./tabs.data";
import { EnumTabsContentType } from "./types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Biography from "./components/biography";
import Pictures from "./components/pictures";
import Anime from "./components/anime";
import Manga from "./components/manga";
import VoiceActors from "./components/voices";

interface PropsType {
  id: string;
  name: string | null;
  about: string | null;
}

const TabsInfo: React.FC<PropsType> = ({ id, name, about }) => {
  const TabsListTrigger = menuData?.map((item) => (
    <TabsTrigger key={item.title} value={item.title} className="cursor-pointer">
      <item.icon /> {item.title}
    </TabsTrigger>
  ));

  return (
    <Tabs
      defaultValue={EnumTabsContentType.BIOGRAPHY}
      className="w-full w-auto"
    >
      <ScrollArea className="min-w-auto rounded-md whitespace-nowrap">
        <TabsList className="w-[800px] lg:w-full">{TabsListTrigger}</TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value={EnumTabsContentType.BIOGRAPHY}>
        {name !== null && about !== null && (
          <Biography name={name} about={about} />
        )}
      </TabsContent>
      <TabsContent value={EnumTabsContentType.PICTURES}>
        <Pictures id={id} />
      </TabsContent>
      <TabsContent value={EnumTabsContentType.ANIME}>
        <Anime id={id} />
      </TabsContent>
      <TabsContent value={EnumTabsContentType.MANGA}>
        <Manga id={id} />
      </TabsContent>
      <TabsContent value={EnumTabsContentType.VOICE_ACTORS}>
        <VoiceActors id={id} />
      </TabsContent>
    </Tabs>
  );
};

export default TabsInfo;
