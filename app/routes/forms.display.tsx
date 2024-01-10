import Display from "~/components/forms/modules/display";
import Header from "~/components/forms/modules/header";

export default function FormsDisplay() {
  return (
    <div className="text-primary">
      <Header
        title="Display"
        description="Turn items on or off to control what's displayed in the app."
      />
      <Display />
    </div>
  );
}
