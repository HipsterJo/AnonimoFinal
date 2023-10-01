import {createContext} from "react";

export enum Theme {
    LIGHT = 'light__theme',
    DARK = 'dark__theme'
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
