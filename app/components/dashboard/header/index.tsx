import SelectDashboard from "~/components/dashboard/header/modules/select";
import { NavLink } from "@remix-run/react";
import { Input } from "~/components/ui/input";
import ToggleMenu from "~/components/dashboard/header/modules/toggleMenu";
import { useState } from "react";
import DialogHeaderDB from "~/components/dashboard/header/modules/dialog";
export default function DashboardHeader() {
  const [open, setOpen] = useState(false);
  const menu = [
    {
      name: "Overview",
      active: true,
    },
    {
      name: "Customers",
      active: false,
    },
    {
      name: "Products",
      active: false,
    },
    {
      name: "Settings",
      active: false,
    },
  ];

  return (
    <div>
      <DialogHeaderDB open={open} onOpenChange={setOpen} />
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <SelectDashboard onClickAction={() => setOpen(true)} />

          <div>
            <ul className="flex items-center space-x-4 lg:space-x-6 mx-6">
              {menu.map((m) => (
                <li key={m.name}>
                  <NavLink
                    className={`${
                      m.active && "text-primary"
                    } text-sm font-medium text-muted-foreground transition-colors hover:text-primary`}
                    to="/dashboard"
                  >
                    {m.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <div className="lg:w-[300px] md:w-[100px]">
              <Input placeholder="search..." />
            </div>

            <div>
              <ToggleMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
