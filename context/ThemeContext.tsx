import { useContext, useState, createContext } from "react";

export type ThemeName = 'Petal' | 'Mint' | 'Neutral';

type Theme = {
    name: string
    gradient: string;
    primaryColor: string;
    primaryLight: string;
    primaryDark: string;
    border: string;
    borderHover: string;
    bg: string;
    bgHover: string;
    accent: string;
    glowColor: string;
}

export const themes : Record <ThemeName, Theme> = {
    Petal: {
    name: 'Petal',
    gradient: 'from-gray-900 via-pink-900 to-black',
    primaryColor: '#ec4899',
    primaryLight: '#f9a8d4',
    primaryDark: '#be185d',
    border: 'rgba(236, 72, 153, 0.3)',
    borderHover: 'rgba(236, 72, 153, 0.4)',
    bg: 'rgba(0, 0, 0, 0.4)',
    bgHover: 'rgba(236, 72, 153, 0.1)',
    accent: 'rgba(236, 72, 153, 0.2)',
    glowColor: '#ec4899',
  },
    
    Mint: {
    name: 'Mint',
    gradient: 'from-gray-900 via-emerald-900 to-black',
    primaryColor: '#10b981',
    primaryLight: '#6ee7b7',
    primaryDark: '#047857',
    border: 'rgba(16, 185, 129, 0.3)',
    borderHover: 'rgba(16, 185, 129, 0.4)',
    bg: 'rgba(0, 0, 0, 0.4)',
    bgHover: 'rgba(16, 185, 129, 0.1)',
    accent: 'rgba(16, 185, 129, 0.2)',
    glowColor: '#10b981',
    },

    Neutral: {
    name: 'Neutral',
    gradient: 'from-gray-900 via-gray-800 to-black',
    primaryColor: '#6b7280',
    primaryLight: '#d1d5db',
    primaryDark: '#374151',
    border: 'rgba(107, 114, 128, 0.3)',
    borderHover: 'rgba(107, 114, 128, 0.4)',
    bg: 'rgba(0, 0, 0, 0.4)',
    bgHover: 'rgba(107, 114, 128, 0.1)',
    accent: 'rgba(107, 114, 128, 0.2)',
    glowColor: '#6b7280',
    }
}

type ThemeContextType = {
    themeName: ThemeName;
    theme: Theme;
    setThemeName: (name: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeName, setThemeName] = useState<ThemeName>('Petal')


return (
        <ThemeContext.Provider value={{ themeName, theme: themes[themeName], setThemeName }}>
            {children}
        </ThemeContext.Provider>
)
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
        return context;
    }