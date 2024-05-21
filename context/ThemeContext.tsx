'use client'

import { createContext, useState } from "react"

interface themeContextType {
    theme: string;
    setTheme: (value: string) => void;
}


export const themeContext = createContext<themeContextType|undefined>(undefined);

export function ThemeContextProvider({children}:{children:React.ReactNode}){
    const [theme,setTheme] = useState<string>("dark");
    return <themeContext.Provider value={{theme,setTheme}}>{children}</themeContext.Provider>
}