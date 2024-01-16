import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { dashboardLoader, rootLoader } from "@/lib/loader.ts";
import Root from "@/app/root.tsx";
import GlobalErrorPage from "@/app/error/global-error/page.tsx";
/* dashboard */
import DashboardLayout from "@/app/dashboard/layout.tsx";
import OverviewPage from "@/app/dashboard/overview/page.tsx";
import AnalyticsPage from "@/app/dashboard/analytics/page.tsx";
/* products */
import ProductsListPage from "@/app/products/page.tsx";
import CreateProductsPage from "@/app/products/create/page.tsx";
import NotFoundPage from "@/app/error/not-found/page.tsx";
import CalendarPage from "@/app/calendar/page.tsx";
import UnAuthorizedErrorPage from "@/app/error/unauthorized-error/page.tsx";
import InternalServerErrorPage from "@/app/error/internal-server-error/page.tsx";
import TriggerDemo from "@/app/error/global-error/trigger-demo.tsx";

const LoginPage = lazy(() => import("@/app/login/page.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <GlobalErrorPage />,
    children: [
      {
        path: "login",
        // loader: loginLoader,
        // action: loginAction,
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            loader: dashboardLoader,
            element: <OverviewPage />,
          },
          {
            path: "analytics",
            loader: dashboardLoader,
            element: <AnalyticsPage />,
          },
          {
            path: "products",
            loader: dashboardLoader,
            element: <ProductsListPage />,
          },
          {
            path: "products/create",
            loader: dashboardLoader,
            element: <CreateProductsPage />,
          },
          {
            path: "calendar",
            loader: dashboardLoader,
            element: <CalendarPage />,
          },
        ],
      },
      {
        path: "400",
        element: <TriggerDemo />,
      },
      {
        path: "401",
        element: <UnAuthorizedErrorPage />,
      },
      {
        path: "500",
        element: <InternalServerErrorPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
