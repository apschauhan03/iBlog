"use client"
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoSend } from "react-icons/io5";





const UserResponse: React.FC = () => {
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const likedBlogHandler = () => {
        if (disliked) {
            setDisliked(false);
        }
        setLiked(!liked);
    }
    const dislikedBlogHandler = () => {
        if (liked) {
            setLiked(false);
        }
        setDisliked(!disliked);
    }
    return (
        <form>
            <div className="py-10  flex w-full justify-center items-center">
                    <div className=" cursor-pointer p-2" onClick={likedBlogHandler}>
                        {
                            liked ? <BiSolidLike /> : <BiLike />}
                    </div>
                    <div className=" cursor-pointer p-2" onClick={dislikedBlogHandler}>
                        {
                            disliked ? <BiSolidDislike /> : <BiDislike />
                        }
                    </div>

                    <input className=" mx-4 rounded-sm text-sm w-[60%] py-2 px-1 bg-black" placeholder=" Type your comment here" /><button><IoSend /></button>

            </div>
        </form>
    )
}

export default UserResponse