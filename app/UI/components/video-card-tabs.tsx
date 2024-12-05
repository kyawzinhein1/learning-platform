import { Tabs, Tab } from "@nextui-org/react";
import { VideoCard } from "./video-card";

export default function VideoCardTabs() {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="primary"
        variant="underlined"
        classNames={{
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-divider border-cyan-900",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#00FFFF]",
        }}
      >
        <Tab key="all" title="All">
          <div className="grid grid-cols-3 gap-3">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </Tab>
        <Tab key="community" title="Community">
          <div className="grid grid-cols-3 gap-3">
            <h1>Community</h1>
          </div>
        </Tab>
        <Tab key="about" title="About">
          <div className="grid grid-cols-3 gap-3">
            <h1>About</h1>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
