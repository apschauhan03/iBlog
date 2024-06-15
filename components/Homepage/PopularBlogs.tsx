import Image from "next/image";
import { SlLike } from "react-icons/sl";
import { GoCommentDiscussion } from "react-icons/go";
import Link from "next/link";

export default function PopularBlogs() {
    return (
        <Link href={"/blog-id"}>
            <div className="flex justify-evenly items-center p-5 rounded-sm my-1 hover:bg-slate-500 md:text-[12px]">
                <div className="relative h-12 w-12">
                    <Image quality={90} className=" rounded-full object-cover" fill alt="popular blogs image" src={"https://images.unsplash.com/photo-1680638862735-81f9859b0b8d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
                </div>
                <div className="flex flex-col ">
                    <div className=" flex flex-end md:ml-1">
                        Lorem Ipsum
                    </div>
                    <div className="flex flex-end gap-5 md:ml-1">
                        <div className="flex gap-1 justify-center items-center font-extralight">
                            <SlLike />
                            <div className=" text-[12px]">54</div>
                        </div>
                        <div className=" flex gap-1 font-extralight justify-center items-center">
                            <GoCommentDiscussion/>
                            <div className=" text-[12px]">9</div>
                        </div>
                    </div>
                </div>

            </div>
        </Link>
    )
}
