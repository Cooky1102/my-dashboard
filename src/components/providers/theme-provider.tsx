import React, { createContext, useContext, useEffect, useState } from "react";

import { THEME_STORAGE_KEY } from "@/lib/config.ts";
import { ETheme, Theme } from "@/types/theme.ts";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: ETheme.system,
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

export function ThemeProvider({
  children,
  defaultTheme = ETheme.system,
  storageKey = THEME_STORAGE_KEY,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme,
  );

  useEffect(() => {
    function updateDocumentTheme(theme: Theme) {
      // 移除之前的主题
      const root = window.document.documentElement;
      root.classList.remove(ETheme.light, ETheme.dark);
      // 添加新的主题
      root.classList.add(theme);
    }

    function handleSystemThemeChange(e: MediaQueryListEvent) {
      const systemTheme = e.matches ? ETheme.dark : ETheme.light;
      updateDocumentTheme(systemTheme);
    }

    if (theme === ETheme.system) {
      const systemTheme = prefersDarkTheme.matches ? ETheme.dark : ETheme.light;
      updateDocumentTheme(systemTheme);
      localStorage.removeItem(storageKey);

      // 订阅系统主题变化
      prefersDarkTheme.addEventListener("change", handleSystemThemeChange);

      // 移除订阅
      return () => prefersDarkTheme.removeEventListener("change", handleSystemThemeChange);
    }

    updateDocumentTheme(theme);
    localStorage.setItem(storageKey, theme);
  }, [storageKey, theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
