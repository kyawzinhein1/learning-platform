import { Tabs, Tab } from "@nextui-org/react";
import { UserProfileCard } from "./user-profile-card";

export default function UserProfileTabs() {
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
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
          </div>
        </Tab>
        <Tab key="programming" title="Programming">
          <div className="grid grid-cols-3 gap-3">
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
          </div>
        </Tab>
        <Tab key="videoedit" title="Video Editing">
          <div className="grid grid-cols-3 gap-3">
            <UserProfileCard />
            <UserProfileCard />
            <UserProfileCard />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
