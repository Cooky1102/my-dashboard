import { createBrowserRouter, redirect } from "react-router-dom";
import { lazy } from "react";
import { fakeAuthProvider } from "@/lib/auth.ts";

import {
  loader as loginLoader,
  action as loginAction,
} from "@/app/login/login.route.ts";
import RootErrorPage from "@/app/global-error.tsx";
import DashboardLayout from "@/app/dashboard/layout.tsx";
import OverviewPage from "@/app/dashboard/overview/page.tsx";
import { dashboardLoader, rootLoader } from "@/lib/loader.ts";
import Root from "@/app/root.tsx";
import AuthPage from "@/app/auth/page.tsx";
import AnalyticsPage from "@/app/dashboard/analytics/page.tsx";
import ProductsListPage from "@/app/products/page.tsx";
import CreateProductsPage from "@/app/products/create/page.tsx";
const LoginPage = lazy(() => import("@/app/login/login.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Root />,
    errorElement: <RootErrorPage />,
    children: [
      {
        path: "auth",
        element: <AuthPage />,
        children: [
          {
            path: "login",
            // loader: loginLoader,
            // action: loginAction,
            element: <LoginPage />,
          },
        ],
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
    ],
  },
]);

export default router;
