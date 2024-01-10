import Account from "~/components/forms/modules/account";
import Header from "~/components/forms/modules/header";

export default function FormsAccount() {
  return (
    <div className="text-primary">
      <Header
        title="Account"
        description=" Update your account settings. Set your preferred language and
        timezone."
      />
      <Account />
    </div>
  );
}
