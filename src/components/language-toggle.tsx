import { LanguageIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { iconClasses } from "@/routes/sidebar.tsx";
import { cn } from "@/lib/utils.ts";
import { useToast } from "@/components/ui/use-toast";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const { toast } = useToast();

  const handleChangeLng = async (lng: string) => {
    await i18n.changeLanguage(lng);
    toast({
      duration: 2000,
      description: <div>123</div>,
      title: (
        <div className="flex gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <span>Language changed</span>
        </div>
      ),
    });
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
              <LanguageIcon className={cn(iconClasses)} />
              <span className="sr-only">Toggle language</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <DropdownMenuContent align="end" onCloseAutoFocus={handleCloseAutoFocus}>
          <DropdownMenuItem onClick={() => handleChangeLng("zh_HK")}>繁体中文</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleChangeLng("en_US")}>English</DropdownMenuItem>
        </DropdownMenuContent>
        <TooltipContent side="bottom">
          <p>Language</p>
        </TooltipContent>
      </Tooltip>
    </DropdownMenu>
  );
};

export default LanguageToggle;
