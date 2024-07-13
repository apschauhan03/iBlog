"use client"

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation"

function Pagination({numOfPosts}:{numOfPosts:number}) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get('page')??'0';

    const decrementPage = ()=>{
        if(Number(page)-1>=0)
            router.push(`/?page=${Number(page)-1}`);
        else
            router.push('/');
    }
    const incrementPage = ()=>{
        if((Number(page)+1)*5<=numOfPosts)
            router.push(`/?page=${Number(page)+1}`);
        else
            router.push('/');
    }
    return (
        <div className='flex justify-between items-center m-4'>
            <button onClick={decrementPage} className=' bg-slate-500 hover:bg-slate-400 px-4 py-2 rounded-sm text-sm'>Prev</button>
            <button onClick={incrementPage} className=' bg-slate-500 hover:bg-slate-400 px-4 py-2 rounded-sm text-sm'>Next</button>
        </div>
    )
}

export default Pagination
