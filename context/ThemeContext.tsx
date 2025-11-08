import React, { createContext, useState, useContext } from 'react';
type ThemeType = 'petal' | 'mint' | 'neutral';

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider ({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<ThemeType>('neutral')
    return (
        <ThemeContext.Provider
        value={{
            theme,
            setTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )

    export function useTheme() {
        const context = useContext(ThemeContext)
        if (!context) {
            throw new Error('useTheme must be used within a ThemeProvider')
        }
        return context;