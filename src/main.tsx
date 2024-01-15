import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import "./styles/index.css";
import "./styles/router.css";
import "./styles/calendar.scss";
import "./lib/i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
  </React.StrictMode>,
);
