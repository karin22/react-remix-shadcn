import DateRangePicker from "~/components/dashboard/content/modules/dateRangePicker";
import MenuBar from "~/components/dashboard/content/modules/menuBar";
import Card from "~/components/dashboard/content/modules/card";
import Chart from "~/components/dashboard/content/modules/chart";
import RecentSales from "~/components/dashboard/content/modules/recentSales";

import { Button } from "~/components/ui/button";

export default function DashboardContent() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <DateRangePicker />
          <Button size="sm">Download</Button>
        </div>
      </div>
      <MenuBar />
      <div>
        <Card />
      </div>
      <div className="grid gap-4  md:grid-cols-2 lg:grid-cols-7">
        <Chart />
        <RecentSales />
      </div>
    </div>
  );
}
