import { Separator } from "~/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { useState } from "react";

export default function ToggleMenu() {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      name: "Profile",
      label: "⇧⌘P",
    },
    {
      name: "Billing",
      label: "⌘B",
    },
    {
      name: "Settings",
      label: "⌘S",
    },
    {
      name: "New Team",
      label: "",
    },
  ];
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end">
        <div className="w-[230px]">
          <div className="px-3 py-2.5 text-sm font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">shadcn</p>
              <p className="text-xs leading-none text-muted-foreground">
                m@example.com
              </p>
            </div>
          </div>
          <Separator className="my-1" />

          <div>
            <ul className="px-1">
              {menu.map((m) => (
                <li key={m.name}>
                  <button
                    className="w-full "
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <div
                      role="menuitem"
                      className="relative  hover:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                      tabIndex={-1}
                      data-orientation="vertical"
                      data-radix-collection-item=""
                    >
                      {m.name}{" "}
                      {m.label && (
                        <span className="ml-auto text-xs tracking-widest opacity-60">
                          {m.label}
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              ))}{" "}
            </ul>
            <Separator className="my-1" />

            <div className="mb-1 px-1">
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className="w-full"
              >
                <div
                  role="menuitem"
                  className="relative hover:bg-accent flex cursor-default select-none items-center rounded-sm px-2 py-2.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                  tabIndex={-1}
                  data-orientation="vertical"
                  data-radix-collection-item=""
                >
                  Log out{" "}
                  <span className="ml-auto text-xs tracking-widest opacity-60">
                    ⇧⌘Q
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
