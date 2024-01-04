import * as React from "react";
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("Alicia Koch");

  const menu = [
    {
      groupName: "Personal Account",
      option: [
        {
          name: "Alicia Koch",
        },
      ],
    },
    {
      groupName: "Teams",
      option: [
        {
          name: "Acme Inc.",
        },
        {
          name: "Monsters Inc.",
        },
      ],
    },
  ];

  const findSelect = () => {
    const group = menu.find(
      (x) => x.option.filter((c) => c.name === value).length
    );

    return group?.option.find((c) => c.name === value)?.name;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-primary"
        >
          <div className="flex">
            <Avatar className="h-5 w-5 mr-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {value ? findSelect() : "Select framework..."}
          </div>

          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          {menu.map((m) => (
            <CommandGroup key={m.groupName} heading={m.groupName}>
              {m.option.map((c) => (
                <CommandItem
                  value={c.name}
                  key={c.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : c.name);
                    setOpen(false);
                  }}
                >
                  <div className="flex ">
                    <Avatar className="h-5 w-5 mr-2">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {c.name}
                  </div>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === c.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <Separator className="my-1 -mx-1" />

          <CommandItem className="mx-1 mb-1" onSelect={() => setOpen(false)}>
            <div className=" flex items-center">
              <PlusCircledIcon className="h-5 w-5" />
              <div className="ml-2  text-sm">Create Team</div>
            </div>
          </CommandItem>
          {/* <CommandItem className="hover:bg-accent">
          <div className="px-2 flex items-center">
            <PlusCircledIcon className="h-5 w-5" />
            <div className="ml-2  text-sm">Create Team</div>
          </div>
          <CommandItem /> */}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
