"use client"

import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { useContext } from "react";
import { themeContext } from "@/context/ThemeContext";


export default function ToggleDark() {
    const themeInfo = useContext(themeContext);
    const togleStyle = themeInfo?.theme === "light"? "w-3 h-3 absolute bg-black  rounded-lg":"w-3 h-3 absolute bg-white right-1 rounded-lg";
    const toggleTheme = ()=>{
        if(themeInfo?.theme==="light")
            themeInfo?.setTheme("dark");
        else
            themeInfo?.setTheme("light");
    }
    return (
        <div onClick={toggleTheme} className={themeInfo?.theme==="dark"?"absolute cursor-pointer border-white border p-1 rounded-2xl flex m-2 right-0 top-0 ":"absolute cursor-pointer border-black border p-1 rounded-2xl flex m-2 right-0 top-0 "}>
            <div>
                <IoSunny size="12"/>
            </div>
            <div  className={togleStyle}>
            </div>
            <div>
                <FaMoon size="12" />
            </div>

        </div>
    )
}
