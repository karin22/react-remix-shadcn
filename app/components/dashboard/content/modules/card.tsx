import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
export default function Card() {
  const item = [
    {
      title: "Total Revenue",
      svg: DollarSign,
      value: "$45,231.89",
      label: "+20.1% from last month",
    },
    {
      title: "Subscriptions",
      svg: Users,
      value: "+2350",
      label: "+180.1% from last month",
    },
    {
      title: "Sales",
      svg: CreditCard,
      value: "+12,234",
      label: "+19% from last month",
    },
    {
      title: "Active Now",
      svg: Activity,
      value: "+573",
      label: "+201 since last hour",
    },
  ];
  return (
    <div className="grid gap-4 grid-cols-4">
      {item.map((i) => (
        <div
          className="rounded-xl border bg-background text-primary shadow"
          key={i.title}
        >
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="tracking-tight text-sm font-medium">{i.title}</h3>
            <i.svg />
          </div>
          <div className="p-6 pt-0">
            <div className="text-2xl font-bold"> {i.value}</div>
            <p className="text-xs text-muted-foreground">{i.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
