import { Fragment } from "react";
import Brand from "@/components/sidebar/brand.tsx";
import routes from "@/routes/sidebar.tsx";
import SidebarItem from "@/components/sidebar/sidebar-item.tsx";

const Menus = () => {
  return (
    <div className="h-full w-full p-5 overflow-y-auto dark text-foreground">
      <Brand className="justify-start my-5" />
      {routes.map((route) => (
        <Fragment key={route.category}>
          <div className="h-12 font-semibold flex items-center">
            {route.category}
          </div>
          <ul>
            {route.menus.map((menu) => (
              <li key={menu.name}>
                <SidebarItem {...menu} />
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </div>
  );
};

export default Menus;
