import Appearance from "~/components/forms/modules/appearance";
import Header from "~/components/forms/modules/header";

export default function FormsAppearance() {
  return (
    <div className="text-primary">
      <Header
        title="Appearance"
        description="Customize the appearance of the app. Automatically switch between day
        and night themes."
      />
      <Appearance />
    </div>
  );
}
