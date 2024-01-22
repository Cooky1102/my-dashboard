import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import { dashboardLoader, rootLoader } from "@/lib/loader.ts";
import Root from "@/app/root.tsx";
import DashboardLayout from "@/app/dashboard/layout.tsx";
import OverviewPage from "@/app/dashboard/overview/page.tsx";
/* error */
import GlobalErrorPage from "@/app/error/global-error/page.tsx";
import NotFoundPage from "@/app/error/not-found/page.tsx";
import UnAuthorizedErrorPage from "@/app/error/unauthorized-error/page.tsx";
import InternalServerErrorPage from "@/app/error/internal-server-error/page.tsx";

const LoginPage = lazy(() => import("@/app/login/page.tsx"));
const AnalyticsPage = lazy(() => import("@/app/dashboard/analytics/page.tsx"));
const AccountPage = lazy(() => import("@/app/dashboard/account/page.tsx"));
const ProductsListPage = lazy(() => import("@/app/products/page.tsx"));
const CreateProductsPage = lazy(() => import("@/app/products/create/page.tsx"));
const CalendarPage = lazy(() => import("@/app/calendar/page.tsx"));
const TriggerDemo = lazy(
  () => import("@/app/error/global-error/trigger-demo.tsx"),
);

const routes = [
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
            path: "account",
            loader: dashboardLoader,
            element: <AccountPage />,
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
];

const router = createBrowserRouter(routes, {
  // basename: "/my-dashboard",
});

export default router;
