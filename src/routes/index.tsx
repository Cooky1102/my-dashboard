import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { dashboardLoader, rootLoader } from "@/lib/loader.ts";
import Root from "@/app/root.tsx";
import RootErrorPage from "@/app/global-error.tsx";

/* dashboard */
import DashboardLayout from "@/app/dashboard/layout.tsx";
import OverviewPage from "@/app/dashboard/overview/page.tsx";
import AnalyticsPage from "@/app/dashboard/analytics/page.tsx";

/* products */
import ProductsListPage from "@/app/products/page.tsx";
import CreateProductsPage from "@/app/products/create/page.tsx";
import NotFoundPage from "@/app/not-found/page.tsx";

const LoginPage = lazy(() => import("@/app/login/page.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <RootErrorPage />,
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
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
