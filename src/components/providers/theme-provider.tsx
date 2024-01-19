import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  PropsWithChildren,
  Dispatch,
} from "react";

import { THEME_STORAGE_KEY } from "@/lib/config.ts";
import { ETheme, Theme } from "@/types/theme.ts";

type ThemesState = {
  isDark: boolean;
  theme: Theme;
};

type ThemesAction = {
  type: Theme;
};

const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

const ThemeContext = createContext<ThemesState>(null!);
const ThemeDispatchContext = createContext<Dispatch<ThemesAction>>(null!);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themes, dispatch] = useReducer(
    themesReducer,
    null,
    createInitialThemes,
  );

  useEffect(() => {
    // 移除之前的主题
    const root = window.document.documentElement;
    root.classList.remove(ETheme.light, ETheme.dark);
    // 添加新的主题
    root.classList.add(themes.isDark ? ETheme.dark : ETheme.light);
  }, [themes.isDark]);

  useEffect(() => {
    const theme = themes.theme;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function systemThemeListener(e: MediaQueryListEvent) {
      dispatch({ type: ETheme.system });
    }

    if (theme === ETheme.system) {
      localStorage.removeItem(THEME_STORAGE_KEY);

      // 订阅系统主题变化
      prefersDarkTheme.addEventListener("change", systemThemeListener);

      // 移除订阅
      return () =>
        prefersDarkTheme.removeEventListener("change", systemThemeListener);
    }

    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [themes.theme]);

  return (
    <ThemeContext.Provider value={themes}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export const useThemeDispatch = () => {
  const context = useContext(ThemeDispatchContext);

  if (context === undefined)
    throw new Error("useThemeDispatch must be used within a ThemeProvider");

  return context;
};

function createInitialThemes(): ThemesState {
  const theme = localStorage.getItem(THEME_STORAGE_KEY) as Theme;

  if (theme) {
    return { isDark: theme === ETheme.dark, theme };
  }

  return { isDark: prefersDarkTheme.matches, theme: ETheme.system };
}

function themesReducer(themes: ThemesState, action: ThemesAction): ThemesState {
  switch (action.type) {
    case ETheme.light:
      return { isDark: false, theme: ETheme.light };
    case ETheme.dark:
      return { isDark: true, theme: ETheme.dark };
    case ETheme.system:
      return { isDark: prefersDarkTheme.matches, theme: ETheme.system };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
