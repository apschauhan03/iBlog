
import React from 'react'
import RecentBlogsCard from './Homepage/RecentBlogsCard'
import prisma from '@/prisma/base';
import Pagination from './Pagination';

export default async function Recent({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const numberOfPosts = await prisma.$transaction([
    prisma.iBlogPosts.count(),
  ])


  console.log("Search Params", searchParams);
  const currentPage = Number(searchParams?.page) || 0;
  const lastFivePosts = await prisma.iBlogPosts.findMany({
    skip: currentPage*numberOfPosts[0], // Offset for pagination (starts at 0)
    take: 5,  // Limit to 5 results
    orderBy: { createdAt: 'desc' }, // Order by creation date descending
  })

  
  console.log('====================================');
  console.log(currentPage);
  console.log('====================================');



  return (
    <div style={{ flex: 5 }} className=''>
      <div>
        <div className=' font-semibold'>Recent Blogs
          {lastFivePosts.map(post => <RecentBlogsCard key={post} postDetails={post} />)}
        </div>
        <Pagination numOfPosts = {numberOfPosts[0]}/>
      </div>
     
    </div>
  )
}
