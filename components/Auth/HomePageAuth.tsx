"use client"

import Link from 'next/link';
import React, { useState } from 'react'

export default function HomePageAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <>
            {isLoggedIn ? (<><Link href='/createpost'>Write</Link>
                <span className=' cursor-pointer' onClick={()=>setIsLoggedIn(false)}>Logout</span></>) : (<Link href='/login'>Login</Link>)}
        </>
    )
}
