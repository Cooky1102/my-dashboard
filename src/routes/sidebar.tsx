import {
  ChartBarIcon,
  Squares2X2Icon,
  CalendarIcon,
} from "@heroicons/react/24/solid";

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
        name: "Products2",
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
];

export default routes;
