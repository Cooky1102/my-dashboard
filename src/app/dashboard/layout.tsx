import Sidebar from "@/components/sidebar/sidebar.tsx";
import { Outlet } from "react-router-dom";
import Header from "@/components/header.tsx";

const DashboardLayout = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Left */}
      <Sidebar />

      {/* Right */}
      <div className="xl:pr-6 xl:pb-6 xl:pl-72 flex-1 flex flex-col">
        <div className="bg-white xl:rounded-b-2xl flex-1">
          <Header />
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
