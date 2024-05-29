'use client'

import { themeContext } from "@/context/ThemeContext"
import Link from "next/link";
import { useContext, useState } from "react"
import HomePageAuth from "../Auth/HomePageAuth";

export default function Hammenu() {
    const themeInfo = useContext(themeContext);
    const themeSetting = themeInfo?.theme === "light" ? "w-full h-1 bg-black" : "w-full h-1 bg-white";
    const navMenuSetting = themeInfo?.theme === "light" ? "md:absolute md:block hidden md:top-20 md:flex md:flex-col md:w-full md:m-auto md:h-3/4 md:overflow-y-hidden md:bg-white md:justify-center md:text-2xl md:items-center md:text-black md:gap-4 md:left-0 md:z-50":"md:absolute md:block hidden md:top-20 md:flex md:flex-col md:w-full md:m-auto md:h-3/4 md:overflow-y-hidden md:bg-slate-800 md:justify-center md:text-2xl md:items-center md:text-white md:gap-4 md:left-0 md:z-50";
    const [hamMenu, setHamMenu] = useState(false);
    return (
        <div>
            <div onClick={() => setHamMenu(!hamMenu)} className="hidden md:flex md:flex-col md:justify-center md:items-center gap-1 md:h-5 md:w-7">
                <div style={{ height: "2px" }} className={themeSetting}></div>
                <div style={{ height: "2px" }} className={themeSetting}></div>
                <div style={{ height: "2px" }} className={themeSetting}></div>
            </div>
            {hamMenu && <div className={navMenuSetting}>
                <Link href='/contact'>Contact</Link>
                <Link href='/about'>About</Link>
                <HomePageAuth />
            </div>}
        </div>
    )
}
