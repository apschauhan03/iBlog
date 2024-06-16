import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const colorMap = {
    "coding" : "bg-green-600",
    "food" : "bg-red-600",
    "travel" : "bg-yellow-600",
    "culture" : "bg-cyan-600",
    "style" : "bg-pink-600",
    "fashion" : "bg-red-600"
}
export default function CategoryList() {
  return (<>
    <h1 className='pt-5 pb-1 font-semibold'>Popular Categories</h1>
    <div className='flex flex-wrap justify-between p-4'>
      <Link href={"/category/coding"} className= {colorMap.coding +' flex items-center gap-2 cursor-pointer w-[15%] p-2 px-4 rounded-sm md:w-[48%] mb-2'}>
        <div>
          <Image style={{ objectFit: "cover", borderRadius: "50%" }} src={"https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Coding image' width={32} height={32} />
        </div>
        <span className='text-[10px] font-semibold'>Coding</span>
      </Link>
      <Link href={"/category/food"} className= {colorMap.food +' flex items-center gap-2 cursor-pointer w-[15%] p-2 px-4 rounded-sm md:w-[48%] mb-2'}>
        <div>
          <Image style={{ objectFit: "cover", borderRadius: "50%" }} src={"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Coding image' width={32} height={32} />
        </div>
        <span className='text-[10px] font-semibold'>Food</span>
      </Link>
      <Link href={"/category/travel"} className= {colorMap.travel +' flex items-center gap-2 cursor-pointer w-[15%] p-2 px-4 rounded-sm md:w-[48%] mb-2'}>
        <div>
          <Image style={{ objectFit: "cover", borderRadius: "50%" }} src={"https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Coding image' width={32} height={32} />
        </div>
        <span className='text-[10px] font-semibold'>Travel</span>
      </Link>
      <Link href={"/category/culture"} className= {colorMap.culture +' flex items-center gap-2 cursor-pointer w-[15%] p-2 px-4 rounded-sm md:w-[48%] mb-2'}>
        <div>
          <Image style={{ objectFit: "cover", borderRadius: "50%" }} src={"https://images.unsplash.com/photo-1526785654655-e01ea2b6e2cf?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Coding image' width={32} height={32} />
        </div>
        <span className='text-[10px] font-semibold'>Culture</span>
      </Link>
      <Link href={"/category/style"} className= {colorMap.style +' flex items-center gap-2 cursor-pointer w-[15%] p-2 px-4 rounded-sm md:w-[48%] mb-2'}>
        <div>
          <Image style={{ objectFit: "cover", borderRadius: "50%" }} src={"https://images.unsplash.com/photo-1621341103818-01dada8c6ef8?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Coding image' width={32} height={32} />
        </div>
        <span className='text-[10px] font-semibold'>Style</span>
      </Link>
      <Link href={"/category/fashion"} className= {colorMap.fashion +' flex items-center gap-2 cursor-pointer w-[15%] p-2 px-4 rounded-sm md:w-[48%] mb-2'}>
        <div>
          <Image style={{ objectFit: "cover", borderRadius: "50%" }} src={"https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt='Coding image' width={32} height={32} />
        </div>
        <span className='text-[10px] font-semibold'>Fashion</span>
      </Link>
    </div>
  </>
  )
} 
