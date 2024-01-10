import Notifications from "~/components/forms/modules/notification";
import Header from "~/components/forms/modules/header";

export default function FormNotifications() {
  return (
    <div className="text-primary">
      <Header
        title="Notifications"
        description="Configure how you receive notifications."
      />
      <Notifications />
    </div>
  );
}
