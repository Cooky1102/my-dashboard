import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { iconClasses } from "@/routes/sidebar.tsx";
import { cn } from "@/lib/utils.ts";

const languageList = [
  {
    name: "繁体中文",
    value: "zh_HK",
  },
  {
    name: "English",
    value: "en_US",
  },
];

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const handleChangeLng = async (lng: string) => {
    await i18n.changeLanguage(lng);
    toast.success("Language changed");
  };

  const handleCloseAutoFocus = (event: Event) => {
    event.preventDefault();
  };

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Languages className={cn(iconClasses)} />
              <span className="sr-only">Toggle language</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <DropdownMenuContent
          align="end"
          onCloseAutoFocus={handleCloseAutoFocus}
        >
          {languageList.map((item) => (
            <DropdownMenuItem
              key={item.value}
              className={cn({
                "!text-active": i18n.language === item.value,
              })}
              onClick={() => handleChangeLng(item.value)}
            >
              {item.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
        <TooltipContent side="bottom">
          <p>Language</p>
        </TooltipContent>
      </Tooltip>
    </DropdownMenu>
  );
};

export default memo(LanguageToggle);
