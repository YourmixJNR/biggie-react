import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./header";
import Sidebar from "./sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Sidebar />
    </>
  );
};

export default DashboardLayout;
