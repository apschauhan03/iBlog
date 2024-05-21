'use client'

import { themeContext } from "@/context/ThemeContext"
import Link from "next/link";
import { useContext, useState } from "react"
import HomePageAuth from "../Auth/HomePageAuth";

export default function Hammenu() {
    const themeInfo = useContext(themeContext);
    const themeSetting = themeInfo?.theme === "light" ? "w-full h-1 bg-black" : "w-full h-1 bg-white";
    const navMenuSetting = themeInfo?.theme === "light" ? "sm:absolute sm:h-2/3 sm:top-20 flex flex-col items-center justify-center gap-4 text-2xl w-full sm:left-0 bg-white" : "sm:absolute sm:h-2/3 sm:top-20 flex flex-col items-center justify-center gap-4 bg-slate-800 text-2xl w-full sm:left-0";
    const [hamMenu, setHamMenu] = useState(false);
    return (
        <>
            <div onClick={() => setHamMenu(!hamMenu)} className="hidden sm:flex sm:flex-col sm:justify-center sm:items-center gap-1 sm:h-5 sm:w-7">
                <div style={{ height: "2px" }} className={themeSetting}></div>
                <div style={{ height: "2px" }} className={themeSetting}></div>
                <div style={{ height: "2px" }} className={themeSetting}></div>
            </div>
            {hamMenu && <div className={navMenuSetting}>
                <Link href='/contact'>Contact</Link>
                <Link href='/about'>About</Link>
                <HomePageAuth />
            </div>}
        </>
    )
}
