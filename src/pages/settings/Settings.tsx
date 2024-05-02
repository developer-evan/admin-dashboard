/* eslint-disable react-refresh/only-export-components */
import MainLayout from "../../layout/MainLayout";

function Settings() {
  return (
    <div>
      Settings
    </div>
  );
}

export default function SettingsWithLayout () {
  return (
    <MainLayout component={Settings}>
      <Settings />
    </MainLayout>
  );
}