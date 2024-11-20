import { Avatar, Button } from "@nextui-org/react";

export default function UserProfileHeader() {
  return (
    <div className="border border-primary p-5">
      <div className="h-32 bg-primary"></div>

      <div className="mt-5 flex justify-between items-end">
        <div className="flex gap-3 items-center">
          <Avatar
            radius="none"
            className="border border-primary"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <div>
            <h1 className="text-primary text-xl font-bold">Kyaw Zin Hein</h1>
            <h1 className="text-primary opacity-70">@kzh</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button color="primary" radius="none" variant="bordered">
            Edit
          </Button>
          <Button color="primary" radius="none" variant="bordered">
            Publish
          </Button>
        </div>
      </div>
    </div>
  );
}
