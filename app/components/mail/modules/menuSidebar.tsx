"use client";

import { Link } from "@remix-run/react";

import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "~/components/ui/tooltip";
import { LucideIcon } from "lucide-react";

interface NavProps {
  isCollapsed: boolean;
  menu: {
    title: string;
    label: string;
    icon: LucideIcon;
    variant: string;
  }[];
}

export default function MenuSideBar({ isCollapsed, menu }: Readonly<NavProps>) {
  return (
    <TooltipProvider>
      <div
        data-collapsed={isCollapsed}
        className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
      >
        <nav className="grid gap-1  bg-background px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
          {menu.map((link) =>
            isCollapsed ? (
              <Tooltip key={link.title} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    to="#"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "h-9 w-9",
                      link.variant === "default" && "bg-accent "
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    <span className="sr-only">{link.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="flex items-center gap-4"
                >
                  {link.title}
                  {link.label && (
                    <span className="ml-auto text-primary">{link.label}</span>
                  )}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={link.title}
                to="#"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  link.variant === "default" && "bg-accent ",
                  "justify-start"
                )}
              >
                <link.icon className="h-4 w-4 mr-2" />
                {link.title}
                {link.label && (
                  <span
                    className={cn(
                      "ml-auto",
                      link.variant === "default" && "text-primary"
                    )}
                  >
                    {link.label}
                  </span>
                )}
              </Link>
            )
          )}
        </nav>
      </div>
    </TooltipProvider>
  );
}
