"use client"

import { LoginAction, SignUpAction, loginWithGit, loginWithGoogle } from "@/actions/AuthActions";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const initialState = {
    message: ""
}
const page = () => {

    const [signUp, setSignUp] = useState(false);
    const [formState, formAction] = useFormState(SignUpAction, initialState);
    const [loginFormState, loginFormAction] = useFormState(LoginAction, initialState);
    const { pending } = useFormStatus();

    if (signUp) {
        return (
        
            <form action={formAction} className="flex justify-center items-center w-full  h-[450px]">
                <div className=" flex flex-col justify-center w-1/3 md:w-full items-center">
                    <h2 className=" font-semibold text-2xl" >Sign Up</h2>
                    <div className="md:w-full w-full">
                        <div className=" flex flex-col justify-between m-2">
                            <label className=" text-sm">Name</label>
                            <input name="name" className=" rounded-sm outline-none bg-slate-600 px-3 text-[12px] py-1 w-full" />
                        </div>
                        <div className=" flex flex-col justify-between m-2">
                            <label className=" text-sm">Email</label>
                            <input name="email" className=" rounded-sm outline-none bg-slate-600 px-3 text-[12px] py-1 w-full" />
                        </div>
                        <div className=" flex flex-col justify-between m-2">
                            <label className=" text-sm">Password</label>
                            <input name="password" className=" rounded-sm outline-none bg-slate-600 px-3 text-[12px] py-1 w-full" type="password" />
                        </div>
                        <div className=" flex flex-col justify-between m-2">
                            <label className=" text-sm">Re-enter Password</label>
                            <input name="RePassword" className=" rounded-sm outline-none bg-slate-600 px-3 text-[12px] py-1 w-full" type="password" />
                        </div>
                        <div className=" flex flex-col justify-between m-2">
                            {formState?.message && <p className="flex justify-center items-center text-sm text-red-500">{formState.message}</p>}
                        </div>
                        <div onClick={() => setSignUp(true)} className=" m-2">
                            <button disabled={pending} type="submit" className="px-4 rounded-sm py-1 hover:bg-slate-600 bg-slate-400 text-sm w-full">SignUp</button>
                        </div>
                        <div onClick={() => setSignUp(false)} className=" m-2">
                            <button className="px-4 py-1 hover:bg-slate-600 rounded-sm bg-slate-400 text-sm w-full">Login</button>
                        </div>
                    </div>
                </div>
            </form>)
    }
    return (<div className=" py-10 flex flex-col w-full justify-center items-center"><form action={loginFormAction} className="flex md:w-full w-1/3 justify-center items-center">
        <div className=" flex flex-col justify-center items-center w-full">
            <h2 className=" font-semibold  text-2xl">Login</h2>
            <div className="md:w-full w-full">
                <div className=" flex flex-col justify-between m-2">
                    <label className=" text-sm">Email</label>
                    <input name="email" className=" rounded-sm outline-none bg-slate-600 px-3 text-[12px] py-1 w-full" />
                </div>
                <div className=" flex flex-col justify-between m-2">
                    <label className=" text-sm">Password</label>
                    <input name="password" className=" rounded-sm outline-none bg-slate-600 px-3 text-[12px] py-1 w-full" type="password" />
                </div>
                <div className=" flex flex-col justify-between m-2">
                    {loginFormState?.message && <p className="flex justify-center items-center text-sm text-red-500">{loginFormState.message}</p>}
                </div>
                <div className=" m-2">
                    <button disabled={pending} className="px-4 py-1 rounded-sm hover:bg-slate-600 bg-slate-400 text-sm w-full">Login</button>
                </div>
                <div onClick={() => setSignUp(true)} className=" m-2">
                    <button className="px-4 py-1 hover:bg-slate-600 rounded-sm bg-slate-400 text-sm w-full">SignUp</button>
                </div>

            </div>
        </div>
    </form>
        <div className="md:w-full w-1/3 justify-center items-center flex flex-col">
            <form action={loginWithGit} className="  w-full md:mr-0 mb-2">
                <div className=" m-2 mb-0">
                    <button className="px-4 rounded-sm py-1 flex justify-center items-center gap-2 bg-black hover:bg-gray-900 text-sm w-full text-white"><FaGithub/>Github</button>
                </div>
            </form>
            <form action={loginWithGoogle} className="  w-full">
                <div className="m-2 mb-0">
                    <button className="px-4 rounded-sm py-1 flex justify-center items-center gap-2  bg-red-500 hover:bg-red-900 text-sm w-full text-white"><FaGoogle/>Google</button>
                </div>
            </form>
        </div>
    </div>
    );
}
export default page;