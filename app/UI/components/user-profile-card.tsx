import { Avatar, Chip } from "@nextui-org/react";

export function UserProfileCard() {
  return (
    <div className="border border-primary grid justify-center text-center py-4 gap-1 bg-gradient-to-t from-cyan-950 to-transparent">
      <Avatar
        className="mx-auto w-20 h-20"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />
      <h1 className="text-center text-xl font-semibold text-primary">
        Kyaw Zin Hein
      </h1>
      <h1 className="text-center text-primary opacity-70">Web Developer</h1>

      <div className="flex gap-2">
        <Chip color="primary" variant="bordered" radius="none">
          Next.Js
        </Chip>
        <Chip color="primary" variant="bordered" radius="none">
          Next.Js
        </Chip>
        <Chip color="primary" variant="bordered" radius="none">
          Next.Js
        </Chip>
      </div>
      <h1 className="text-center text-primary opacity-70">500 Videos</h1>
    </div>
  );
}
