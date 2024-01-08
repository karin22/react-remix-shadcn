import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Calendar } from "~/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "~/components/ui/tooltip";

import { Clock, MoreVertical } from "lucide-react";
import { snooze, menuRight, menuLeft } from "../data";

import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";

export default function MenuDisplay() {
  return (
    <TooltipProvider>
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          {menuLeft.map((x) => (
            <Tooltip key={x.title}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <x.icon className="h-4 w-4" />
                  <span className="sr-only">{x.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{x.title}</TooltipContent>
            </Tooltip>
          ))}

          <Separator orientation="vertical" className="mx-1 h-6" />
          <Tooltip>
            <Popover>
              <PopoverTrigger asChild>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Clock className="h-4 w-4" />
                    <span className="sr-only">Snooze</span>
                  </Button>
                </TooltipTrigger>
              </PopoverTrigger>
              <PopoverContent className="flex w-[535px] p-0">
                <div className="flex flex-col gap-2 border-r px-2 py-4">
                  <div className="px-4 text-sm font-medium">Snooze until</div>
                  <div className="grid min-w-[250px] gap-1">
                    {snooze.map((x) => (
                      <Button
                        key={x.title}
                        variant="ghost"
                        className="justify-start font-normal"
                      >
                        {x.title}{" "}
                        <span className="ml-auto text-muted-foreground">
                          {x.date()}
                        </span>
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="p-2">
                  <Calendar />
                </div>
              </PopoverContent>
            </Popover>
            <TooltipContent>Snooze</TooltipContent>
          </Tooltip>
        </div>
        <div className="ml-auto flex items-center gap-2">
          {menuRight.map((x) => (
            <Tooltip key={x.title}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <x.icon className="h-4 w-4" />
                  <span className="sr-only">{x.title}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>{x.title}</TooltipContent>
            </Tooltip>
          ))}
        </div>
        <Separator orientation="vertical" className="mx-2 h-6" />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Mark as unread</DropdownMenuItem>
            <DropdownMenuItem>Star thread</DropdownMenuItem>
            <DropdownMenuItem>Add label</DropdownMenuItem>
            <DropdownMenuItem>Mute thread</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </TooltipProvider>
  );
}
