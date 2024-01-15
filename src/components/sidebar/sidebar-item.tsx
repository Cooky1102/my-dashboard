import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Button, buttonVariants } from "@/components/ui/button";
import { MenusConfig } from "@/types/sidebar.ts";
import { iconClasses } from "@/routes/sidebar.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { cn } from "@/lib/utils.ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const SidebarItem = ({ path, name, icon, submenus }: MenusConfig) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (path) {
    return (
      <Link
        to={path}
        className={buttonVariants({
          variant: "ghost",
          className: "w-full !justify-normal gap-3",
        })}
      >
        {icon}
        <span>{name}</span>
      </Link>
    );
  }

  if (submenus) {
    return (
      <Accordion type="multiple">
        <AccordionItem value={name} className="border-b-0">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between"
                onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
              >
                <span className="flex items-center gap-3">
                  {icon}
                  <span>{name}</span>
                </span>
                <ChevronDownIcon
                  className={cn(iconClasses, "transition-transform", {
                    "rotate-180": isExpanded,
                  })}
                />
              </Button>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent>
            <div className="pl-12 relative">
              <Separator
                orientation="vertical"
                className="absolute left-7 top-0 h-full"
              />
              <ul>
                {submenus?.map((submenu) => (
                  <li key={submenu.name}>
                    <SidebarItem {...submenu} />
                  </li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
};

export default SidebarItem;
