import Profile from "~/components/forms/modules/profile";
import Header from "~/components/forms/modules/header";

export default function FormsIndex() {
  return (
    <div className="text-primary">
      <Header
        title="Profile"
        description="This is how others will see you on the site."
      />
      <Profile />
    </div>
  );
}
