import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData } from "./tabs.data";
import { EnumTabsInfoType } from "./types";
import Overview from "./components/overview";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
      <TabsContent value={EnumTabsInfoType.EPISODES}>epi</TabsContent>
      <TabsContent value={EnumTabsInfoType.CHARACTERS}>charac</TabsContent>
      <TabsContent value={EnumTabsInfoType.RELATED}>relat</TabsContent>
    </Tabs>
  );
};

export default TabsInfo;
