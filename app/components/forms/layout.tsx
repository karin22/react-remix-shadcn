import { Separator } from "~/components/ui/separator";
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { useLocation } from "react-router-dom";

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/forms",
  },
  {
    title: "Account",
    href: "/forms/account",
  },
  {
    title: "Appearance",
    href: "/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/forms/notifications",
  },
  {
    title: "Display",
    href: "/forms/display",
  },
];

interface Props {
  children: React.ReactNode;
}

export default function FormsLayout({ children }: Props) {
  const pathname = useLocation();
  console.log({ pathname });

  return (
    <div className="space-y-6 p-10 block border rounded-lg">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight text-primary">
          Settings
        </h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <Separator className="my-6 " />
      <div className="flex  space-x-12 space-y-0">
        <aside className="-mx-4 w-1/5">
          <nav className="flex flex-col space-x-0 space-y-1 text-primary">
            {sidebarNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  pathname.pathname === item.href
                    ? "bg-muted hover:bg-muted"
                    : "hover:bg-transparent hover:underline",
                  "justify-start "
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1 max-w-2xl">{children}</div>
      </div>
    </div>
  );
}
