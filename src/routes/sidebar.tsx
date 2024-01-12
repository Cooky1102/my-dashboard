import { ChartBarIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { SidebarRouteConfig } from "@/types/sidebar.ts";

export const iconClasses = `h-6 w-6`;

const routes: SidebarRouteConfig[] = [
  {
    category: "Dashboards",
    menus: [
      {
        path: "/dashboard",
        name: "Overview",
        icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
      },
      {
        path: "/dashboard/analytics",
        name: "Analytics",
        icon: <ChartBarIcon className={`${iconClasses} inline`} />,
      },
    ],
  },
  {
    category: "Concepts",
    menus: [
      {
        name: "Products",
        icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
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
        icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
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
        name: "Products3",
        icon: <Squares2X2Icon className={`${iconClasses} inline`} />,
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
    ],
  },
];

export default routes;
