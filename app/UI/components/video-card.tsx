import { Avatar } from "@nextui-org/react";

export function VideoCard() {
  return (
    <div className="border border-primary grid p-4 gap-1 bg-gradient-to-t from-cyan-950 to-transparent">
      <div className="w-full bg-primary h-36"></div>
      <h1 className="text-xl font-semibold text-primary mb-2">
        How to make with AI?
      </h1>
      <div className="flex gap-3 items-center">
        <Avatar
          radius="none"
          className="border border-primary"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <div>
          <h1 className="text-primary font-bold">Kyaw Zin Hein</h1>
        </div>
      </div>
    </div>
  );
}
