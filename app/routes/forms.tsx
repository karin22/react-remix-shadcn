import { Outlet } from "@remix-run/react";
import FormsLayout from "~/components/forms/layout";

export default function Forms() {
  return (
    <FormsLayout>
      <Outlet />
    </FormsLayout>
  );
}
