
import React, { useState } from 'react'
import RecentBlogsCard from './Homepage/RecentBlogsCard'
import prisma from '@/prisma/base';

export default async function Recent() {
  const lastFivePosts = await prisma.iBlogPosts.findMany({
    skip: 0, // Offset for pagination (starts at 0)
    take: 5,  // Limit to 5 results
    orderBy: { createdAt: 'desc' }, // Order by creation date descending
  })


  return (
    <div style={{ flex: 5 }} className=''>
      <div>
        <div className=' font-semibold'>Recent Blogs
          {lastFivePosts.map(post => <RecentBlogsCard key={post} postDetails={post} />)}
        </div>
      </div>
      <div className='flex justify-between items-center m-4'>
        <button className=' bg-slate-500 hover:bg-slate-400 px-4 py-2 rounded-sm text-sm'>Prev</button>
        <button className=' bg-slate-500 hover:bg-slate-400 px-4 py-2 rounded-sm text-sm'>Next</button>
      </div>
    </div>
  )
}
