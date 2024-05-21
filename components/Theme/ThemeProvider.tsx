"use client"

import React, { useContext } from 'react'
import { themeContext } from '@/context/ThemeContext';

export default function ThemeProvider({children}:{children:React.ReactNode}) {
  const themeInfo = useContext(themeContext);
  const themeClass = themeInfo?.theme==="light"?"relative w-full ml-auto mr-auto bg-white text-black pl-20 pr-20 lg:w-full sm:ml-0 sm:mr-0 sm:w-full md:pl-10 md:pr-10":" relative w-full ml-auto mr-auto bg-slate-800 text-white pl-20 pr-20 sm:ml-0 sm:mr-0 sm:w-full md:pl-10 md:pr-10 ";
  return (
    <div className={themeClass}>
      {children}
    </div>
  )
}
