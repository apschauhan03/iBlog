import React from 'react'
import Pagination from './Pagination'
import RecentBlogsCard from './Homepage/RecentBlogsCard'

export default function Recent() {
  return (
    <div style={{ flex: 5 }} className=''>
      <div>
        <div className=' font-semibold'>Recent Blogs
          <RecentBlogsCard />
          <RecentBlogsCard />
          <RecentBlogsCard />
          <RecentBlogsCard />
          <RecentBlogsCard />
        </div>
      </div>
      <Pagination />
    </div>
  )
}
