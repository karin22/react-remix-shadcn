export default function MenuBar() {
  const menu = [
    {
      name: "Overview",
      active: "active",
    },
    {
      name: "Analytics",
      active: "inactive",
    },
    {
      name: "Reports",
      active: "inactive",
    },
    {
      name: "Notifications",
      active: "inactive",
    },
  ];
  return (
    <ul className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
      {menu.map((m) => (
        <li key={m.name}>
          <button
            data-state={m.active}
            disabled={m.active === "inactive"}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow"
          >
            {m.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
