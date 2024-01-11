import DashboardHeader from "~/components/dashboard/header";
import DashboardContent from "~/components/dashboard/content";

export default function DashboardPage() {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl text-primary">
      <DashboardHeader />
      <DashboardContent />
    </div>
  );
}
