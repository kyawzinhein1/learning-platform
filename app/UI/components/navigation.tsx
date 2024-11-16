import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { BellIcon } from "./icons/bell-icon";
import { UserIcon } from "./icons/user-icon";
import { MagnificationIcon } from "./icons/magnification-icon";

export function Navigation() {
  return (
    <Navbar maxWidth="full">
      <NavbarBrand>
        <div className="flex gap-4 items-center">
          <p className="font-bold text-primary text-3xl">WTF</p>
          <MagnificationIcon className="w-6 h-6 text-primary" />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">
            <BellIcon className="w-8 h-8 text-primary" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" variant="bordered" radius="none" isIconOnly>
            <UserIcon className="w-5 h-5 text-primary" />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
