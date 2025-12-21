import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData } from "./tabs.data";
import { EnumTabsInfoType } from "./types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Overview from "./components/overview";
import Characters from "./components/characters";
import Episodes from "./components/episodes/index";

interface PropsType {
  id: number;
}

const TabsInfo: React.FC<PropsType> = ({ id }) => {
  const TabsListTrigger = menuData?.map((item) => (
    <TabsTrigger key={item.id} value={item.title} className="cursor-pointer">
      <item.icon /> {item.title}
    </TabsTrigger>
  ));

  return (
    <Tabs defaultValue={EnumTabsInfoType.OVERVIEW} className="w-full">
      <ScrollArea className="w-auto rounded-md whitespace-nowrap">
        <TabsList className="w-[640px] sm:w-full">{TabsListTrigger}</TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value={EnumTabsInfoType.OVERVIEW}>
        <Overview id={id} />
      </TabsContent>
      <TabsContent value={EnumTabsInfoType.EPISODES}>
        <Episodes id={id} />
      </TabsContent>
      <TabsContent value={EnumTabsInfoType.CHARACTERS}>
        <Characters id={id} />
      </TabsContent>
      <TabsContent value={EnumTabsInfoType.RELATED}>relat</TabsContent>
    </Tabs>
  );
};

export default TabsInfo;
