import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
export default function RecentSales() {
  const items = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      value: "+$1,999.00",
      img: "https://ui.shadcn.com/avatars/01.png",
    },
    {
      name: "Jackson Lee",
      email: "jackson.lee@email.com",
      value: "+$39.00",
      img: "https://ui.shadcn.com/avatars/02.png",
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      value: "+$299.00",
      img: "https://ui.shadcn.com/avatars/03.png",
    },
    {
      name: "William Kim",
      email: "will@email.com",
      value: "+$99.00",
      img: "https://ui.shadcn.com/avatars/04.png",
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      value: "+$39.00",
      img: "https://ui.shadcn.com/avatars/05.png",
    },
  ];
  return (
    <div className="rounded-xl border bg-background text-primary shadow col-span-3">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">
          Recent Sales
        </h3>
        <p className="text-sm text-muted-foreground">
          You made 265 sales this month.
        </p>
      </div>

      <div className="p-6 pt-0">
        <div className="space-y-8">
          {items.map((i) => (
            <div className="flex items-center" key={i.name}>
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={i.img} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{i.name}</p>
                <p className="text-sm text-muted-foreground">{i.email}</p>
              </div>
              <div className="ml-auto font-medium">{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
