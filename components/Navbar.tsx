import Link from "next/link";
import HomePageAuth from "./Auth/HomePageAuth";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Image from "next/image";
import Hammenu from "./Responsive/Hammenu";

export default function Navbar() {
  return (
    <div className=" flex h-24 items-center flex-1 justify-between">
      <div className=" flex flex-1 items-center gap-1 md:hidden">
        <Link href='/linkedIN'><FaLinkedin/></Link>
        <Link href='/github'><FaGithub/></Link>
        <Link href='/leetcode'><SiLeetcode/></Link>
        <Link href='/instagram'><FaInstagram/></Link>
      </div>
      <div className=" flex justify-center flex-1 text-center font-bold text-2xl md:justify-start md:text-3xl"><Link href='/'>iBlog</Link></div>
      <div className=" flex flex-1 gap-3 text-sm font-light items-center justify-end md:hidden">
        {/* <Link href='/'>Homepage</Link> */}
        {/* <Link href='/contact'>Contact</Link>
        <Link href='/about'>About</Link> */}
        <HomePageAuth/>
      </div>
      <Hammenu/>
    </div>
  )
}
