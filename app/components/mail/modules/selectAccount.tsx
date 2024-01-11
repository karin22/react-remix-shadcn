"use client";

import * as React from "react";

import { cn } from "~/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Vercel, Gmail, ICloud } from "~/assets/icons";

interface Props {
  isCollapsed: boolean;
}
const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: Vercel,
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: Gmail,
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: ICloud,
  },
];
export default function SelectAccount({ isCollapsed }: Readonly<Props>) {
  const [selectedAccount, setSelectedAccount] = React.useState<string>(
    accounts[0].email
  );

  return (
    <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <SelectTrigger
        className={cn(
          "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          isCollapsed &&
            "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
        )}
      >
        <SelectValue>
          {accounts
            .find((account) => account.email === selectedAccount)
            ?.icon()}
          <span className={cn("ml-2", isCollapsed && "hidden")}>
            {
              accounts.find((account) => account.email === selectedAccount)
                ?.label
            }
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {accounts.map((account) => (
          <SelectItem key={account.email} value={account.email}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 ">
              {account.icon()}
              {account.email}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
