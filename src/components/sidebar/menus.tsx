import { Fragment } from "react";

import Brand from "@/components/sidebar/brand.tsx";
import routes from "@/routes/sidebar.tsx";
import SidebarItem from "@/components/sidebar/sidebar-item.tsx";
import { ScrollArea } from "@/components/ui/scroll-area";

const Menus = () => {
  return (
    <ScrollArea className="h-full w-full p-5 dark text-foreground">
      <Brand className="justify-start my-5" />
      {routes.map((route) => (
        <Fragment key={route.category}>
          <div className="h-12 flex items-center font-semibold">
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
    </ScrollArea>
  );
};

export default Menus;
