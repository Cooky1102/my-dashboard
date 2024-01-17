import { Bars3Icon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button.tsx";
import Menus from "@/components/sidebar/menus.tsx";

const SidebarModeToggle = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Bars3Icon className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="dark text-foreground p-0">
        <Menus />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarModeToggle;
