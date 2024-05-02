import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "../layout/Sidebar";
// import Dashboard from "../pages/dashboard/Dashboard";
import DashboardWithLayout from "../pages/dashboard/Dashboard";
import SettingsWithLayout from "../pages/settings/Settings";
import UserWithLayout from "../pages/users/User";
import NotFound from "../pages/notfound/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/dashboard" element={<DashboardWithLayout />} />
        <Route path="/settings" element={<SettingsWithLayout />} />
        <Route path="/users" element={<UserWithLayout/>} />
        <Route path="*" element={<NotFound/>} />
        
      </Routes>
    </Router>
  );
}
