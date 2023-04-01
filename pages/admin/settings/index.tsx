import AdminLayout from "@/components/layout/AdminLayout";
import React, { ReactElement } from "react";

const Settings = () => {
  return <div>Settings</div>;
};

export default Settings;

Settings.getLayout = function (page: ReactElement) {
  return (
    <AdminLayout>
      <>{page}</>
    </AdminLayout>
  );
};
