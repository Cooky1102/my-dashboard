import Sidebar from "@/components/sidebar/sidebar.tsx";
import { Outlet } from "react-router-dom";
import Header from "@/components/header.tsx";

/*
  参考的 https://lotru.devias.io/dashboard，body背景无论主题固定黑色
*/
const DashboardLayout = () => {
  return (
    <div className="h-full flex flex-col bg-app overflow-auto">
      {/* Left */}
      <Sidebar />

      {/* Right */}
      <div className="xl:pr-6 xl:pb-6 xl:pl-72 flex-1 flex flex-col">
        <div className="bg-main dark:bg-main xl:rounded-b-2xl flex-1">
          <Header key="dashboard" />
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
