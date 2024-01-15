import { Button } from "@/components/ui/button.tsx";
import { LanguageIcon } from "@heroicons/react/24/solid";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { useTranslation } from "react-i18next";
import { iconClasses } from "@/routes/sidebar.tsx";
import { cn } from "@/lib/utils.ts";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const handleChangeLng = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <LanguageIcon className={cn(iconClasses)} />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLng("zh_HK")}>
          繁体中文
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLng("en_US")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
