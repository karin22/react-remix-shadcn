import ToggleMenu from "~/components/utils/toggleMenu";
import Task from "~/components/task";

export default function TaskPage() {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
      <div className=" h-full flex-1 flex-col space-y-8 p-8 flex text-primary">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div>
            <ToggleMenu />
          </div>
        </div>
        <Task />
      </div>
    </div>
  );
}
