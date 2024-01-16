import { Outlet, useNavigation } from "react-router-dom";

import Sidebar from "@/components/sidebar/sidebar.tsx";
import Header from "@/components/header.tsx";
import { Suspense } from "react";
import { cn } from "@/lib/utils.ts";
import SuspenseFallback from "@/components/skeleton/suspense-fallback.tsx";

/*
  参考的 https://lotru.devias.io/dashboard，body背景无论主题固定黑色
*/
const DashboardLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="h-full flex flex-col bg-app overflow-auto">
      {/* Left */}
      <Sidebar />

      {/* Right */}
      <div className="xl:pr-6 xl:pb-6 xl:pl-72 flex-1 flex flex-col">
        <div className="bg-main dark:bg-main xl:rounded-b-2xl flex-1 flex flex-col">
          <Header key="dashboard" />
          <main
            className={cn("p-6 flex-1", {
              "opacity-25 transition-opacity": navigation.state === "loading",
            })}
          >
            <Suspense fallback={<SuspenseFallback />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
