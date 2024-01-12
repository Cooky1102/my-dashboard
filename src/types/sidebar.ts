import React from "react";
import { RequiredOneOf } from "@/types/assist.ts";

export type SidebarRouteConfig = {
  category: string;
  menus: MenusConfig[];
};

export type BaseMenusConfig = {
  path: string;
  name: string;
  icon?: React.ReactNode;
  submenus: MenusConfig[];
};

export type MenusConfig = RequiredOneOf<BaseMenusConfig, "path" | "submenus">;
