'use client'
import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export default function Slideshow() {
    const [imageNumber,setImageNumber] = useState(0);
    
    const images = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        { url: "https://images.unsplash.com/photo-1709566805289-881acfe97bbc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { url: "https://images.unsplash.com/photo-1709625862206-84f82e0754a8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { url: "https://plus.unsplash.com/premium_photo-1709475755653-f93e204bf938?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { url: "https://plus.unsplash.com/premium_photo-1707030602987-8ca280726bdb?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ]
    const leftImageHandler = ()=>{
        if(imageNumber!==0)
                setImageNumber(imageNumber-1);
        else
                setImageNumber(images.length-1);
    }
    const rightImageHandler = ()=>{
        if(imageNumber<images.length-1)
                setImageNumber(imageNumber+1);
        else    
                setImageNumber(0);
    }
    return (
        <div className="w-full h-full relative group">
            <div style={{ backgroundImage: `url(${images[imageNumber].url})` }} className="relative rounded-2xl w-full h-full bg-center bg-cover">
                <span className="absolute bottom-4 left-4 text-2xl font-semibold">Lorem Epsum</span>
                <div onClick={leftImageHandler} className="hidden absolute top-1/2 pl-5 cursor-pointer group-hover:block">
                    <BsChevronLeft />
                </div>
                <div onClick={rightImageHandler} className="hidden absolute right-0 top-1/2 pr-5 cursor-pointer group-hover:block">
                    <BsChevronRight />
                </div>
            </div>
            <div className="flex items-center justify-center">
                {images.map((image, imageIndex) => {
                    return (
                        <div onClick={()=>setImageNumber(imageIndex)} className="cursor-pointer" key={imageIndex}>
                            <RxDotFilled />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
