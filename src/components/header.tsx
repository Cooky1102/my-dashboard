import { ThemeModeToggle } from "@/components/theme-mode-toggle.tsx";
import SidebarModeToggle from "@/components/sidebar/sidebar-mode-toggle.tsx";
import ProfileToggle from "@/components/profile-toggle.tsx";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 xl:pt-6 xl:bg-appBackground">
      <div className="h-20 border-b bg-containerBackground xl:rounded-t-2xl px-5 flex items-center justify-between xl:justify-end">
        <div className="xl:hidden">
          <SidebarModeToggle />
        </div>
        <div className="flex items-center gap-5">
          <ThemeModeToggle />
          <ProfileToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
