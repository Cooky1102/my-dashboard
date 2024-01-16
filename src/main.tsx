import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import SuspenseFallback from "@/components/skeleton/suspense-fallback.tsx";
import router from "@/routes";

import "./styles/index.css";
import "./lib/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<SuspenseFallback />} />
  </React.StrictMode>,
);
