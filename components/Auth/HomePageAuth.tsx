"use client"
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function HomePageAuth({sessionString}:any) {
    const handleLogout = async ()=>{
        await signOut();
    }
    return (
        <>
            <Link href='/createpost'>Write</Link>
            { sessionString ? (<>
                <span className=' cursor-pointer' onClick={handleLogout}>Logout</span></>) : (<Link href='/login'>Login</Link>)}
        </>
    )
}
