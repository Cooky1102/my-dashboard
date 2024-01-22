import {
  ChartBarIcon,
  Squares2X2Icon,
  CalendarIcon,
} from "@heroicons/react/24/solid";
import { UserRoundCog, XSquare } from "lucide-react";

import { SidebarRouteConfig } from "@/types/sidebar.ts";

export const iconClasses = `h-6 w-6`;

const routes: SidebarRouteConfig[] = [
  {
    category: "Dashboards",
    menus: [
      {
        path: "/dashboard",
        name: "Overview",
        icon: <Squares2X2Icon className={`${iconClasses}`} />,
      },
      {
        path: "/dashboard/analytics",
        name: "Analytics",
        icon: <ChartBarIcon className={`${iconClasses}`} />,
      },
      {
        path: "/dashboard/account",
        name: "Account",
        icon: <UserRoundCog className={`${iconClasses}`} />,
      },
    ],
  },
  {
    category: "Concepts",
    menus: [
      {
        name: "Products",
        icon: <Squares2X2Icon className={`${iconClasses}`} />,
        submenus: [
          {
            path: "/dashboard/products",
            name: "List Products",
          },
          {
            path: "/dashboard/products/create",
            name: "Create Products",
          },
        ],
      },
      {
        path: "/dashboard/calendar",
        name: "Calendar",
        icon: <CalendarIcon className={`${iconClasses}`} />,
      },
    ],
  },
  {
    category: "Pages",
    menus: [
      {
        name: "Error",
        icon: <XSquare className={`${iconClasses}`} />,
        submenus: [
          {
            path: "/400",
            name: "400 (client error)",
          },
          {
            path: "/401",
            name: "401",
          },
          {
            path: "/404",
            name: "404",
          },
          {
            path: "/500",
            name: "500",
          },
        ],
      },
    ],
  },
];

export default routes;
