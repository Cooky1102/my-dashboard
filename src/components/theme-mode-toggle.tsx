import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { useTheme } from "@/components/providers/theme-provider";
import { iconClasses } from "@/routes/sidebar.tsx";
import { cn } from "@/lib/utils.ts";

export function ThemeModeToggle() {
  const { setTheme } = useTheme();

  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun className={cn(iconClasses, "dark:hidden")} />
              <Moon className={cn(iconClasses, "hidden dark:block")} />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>

        <DropdownMenuContent
          align="end"
          onCloseAutoFocus={handleCloseAutoFocus}
        >
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
        <TooltipContent side="bottom">
          <p>Theme</p>
        </TooltipContent>
      </Tooltip>
    </DropdownMenu>
  );
}
