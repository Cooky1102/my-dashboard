import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { useTheme, useThemeDispatch } from "@/components/providers/theme-provider";
import { iconClasses } from "@/routes/sidebar.tsx";
import { cn } from "@/lib/utils.ts";
import { ETheme } from "@/types/theme.ts";

const themeList = [
  {
    name: "Light",
    icon: <Sun className="w-4 h-4" />,
    value: ETheme.light,
  },
  {
    name: "Dark",
    icon: <Moon className="w-4 h-4" />,
    value: ETheme.dark,
  },
  {
    name: "System",
    icon: <Monitor className="w-4 h-4" />,
    value: ETheme.system,
  },
];

export function ThemeModeToggle() {
  const { theme } = useTheme();
  const dispatch = useThemeDispatch();

  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Sun
                className={cn(iconClasses, "dark:hidden", {
                  "text-active": theme === ETheme.light,
                })}
              />
              <Moon
                className={cn(iconClasses, "hidden dark:block", {
                  "text-active": theme === ETheme.dark,
                })}
              />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>

        <DropdownMenuContent align="end" onCloseAutoFocus={handleCloseAutoFocus}>
          {themeList.map((item) => (
            <DropdownMenuItem
              key={item.value}
              className={cn({
                "!text-active": theme === item.value,
              })}
              onClick={() => dispatch({ type: item.value })}
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
        <TooltipContent side="bottom">
          <p>Theme</p>
        </TooltipContent>
      </Tooltip>
    </DropdownMenu>
  );
}
