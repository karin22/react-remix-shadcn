import SelectDashboard from "~/components/dashboard/header/modules/select";
export default function DashboardHeader() {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
      <div className="border-b">
        <SelectDashboard />
      </div>
    </div>
  );
}
