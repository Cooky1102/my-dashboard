import { ThemeModeToggle } from "@/components/theme-mode-toggle.tsx";
import SidebarModeToggle from "@/components/sidebar/sidebar-mode-toggle.tsx";
import ProfileToggle from "@/components/profile-toggle.tsx";
import { fakeAuthProvider } from "@/lib/auth.ts";
import LanguageToggle from "@/components/language-toggle.tsx";
import { cn } from "@/lib/utils.ts";

const Header = () => {
  // TODO
  const isAuthenticated = fakeAuthProvider.checkAuth();

  return (
    <header
      className={cn("sticky left-0 top-0 z-10", {
        "pt-0": !isAuthenticated,
        "xl:pt-6 xl:bg-app": isAuthenticated,
      })}
    >
      <div
        className={cn(
          "h-20 px-5 flex items-center justify-between xl:justify-end bg-main",
          { "border-b xl:rounded-t-2xl": isAuthenticated },
          { "justify-end": !isAuthenticated },
        )}
      >
        {isAuthenticated && (
          <div className="xl:hidden">
            <SidebarModeToggle />
          </div>
        )}
        <div className={cn("flex items-center gap-5")}>
          <LanguageToggle />
          <ThemeModeToggle />
          {isAuthenticated && <ProfileToggle />}
        </div>
      </div>
    </header>
  );
};

export default Header;
