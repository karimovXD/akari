import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuData } from "./tabs.data";
import { EnumTabsInfoType } from "./types";
import Overview from "./components/overview";

const TabsInfo = ({ id }: { id: number }) => {
  const TabsListTrigger = menuData?.map((item) => (
    <TabsTrigger key={item.id} value={item.title} className="cursor-pointer">
      <item.icon /> {item.title}
    </TabsTrigger>
  ));

  return (
    <Tabs defaultValue={EnumTabsInfoType.OVERVIEW} className="w-full">
      <TabsList className="w-full">{TabsListTrigger}</TabsList>
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
