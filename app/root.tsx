import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  NavLink,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { Toaster } from "~/components/ui/toaster";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const navbar = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Music",
      link: "/music",
    },
    {
      name: "Mail",
      link: "/mail",
    },
    {
      name: "Tasks",
      link: "/tasks",
    },
    {
      name: "Forms",
      link: "/forms",
    },
  ];
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="container">
          <nav>
            <ul className="flex mb-4 mt-10">
              {navbar.map((menu) => (
                <li key={menu.name}>
                  <NavLink
                    className={({ isActive }) =>
                      `flex h-7 items-center justify-center text-muted-foreground  rounded-full ${
                        isActive && "bg-muted text-primary"
                      } font-medium transition-colors px-4 text-center text-sm h-7  hover:text-primary`
                    }
                    to={menu.link}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Outlet />
          <Toaster />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
      </body>
    </html>
  );
}
