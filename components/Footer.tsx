import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-black w-full text-white flex justify-center items-center min-h-[240px] md:p-8 md:flex-col">
      <div className="flex justify-center items-center flex-1 gap-5 md:mt-8 flex-col">
        <div className=" font-semibold text-lg  ">Help</div>
        <Link className=" text-sm font-light" href='/contact'>{"> "}Help Center</Link>
        <Link className=" text-sm font-light" href='/about'>{"> "}Help Form</Link>
      </div>
      <div className="flex justify-center items-center flex-1 gap-5 md:mt-8 flex-col">
        <div className=" font-semibold text-lg  ">Links</div>
        <Link className=" text-sm font-light" href='/contact'>{"> "}Contact</Link>
        <Link className=" text-sm font-light" href='/about'>{"> "}About</Link>
      </div>
      <div className="flex justify-center items-center flex-1 gap-5 md:mt-8 flex-col">
        <div className=" font-semibold text-lg ">Developers [Hello World]</div>
        <Link className=" text-sm font-light" href={"/github"}><div>{"> "}Github</div></Link>
      </div>
    </div>
  )
}
