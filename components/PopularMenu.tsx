import React from 'react'
import SearchBox from './Homepage/SearchBox'
import PopularBlogs from './Homepage/PopularBlogs'

export default function PopularMenu() {
  return (
    <>
      <div style={{ flex: 2 }} className=' md:flex md:flex-row'>
        <div className=' md:hidden'>
          <SearchBox />
        </div>
        <div className=' md:w-1/2'>
          <div className=' font-semibold mt-2 md:justify-center md:text-center'>Trending</div>
          <PopularBlogs />
          <PopularBlogs />
          <PopularBlogs />
          <PopularBlogs />
          <PopularBlogs />
        </div>
        <div className=' md:w-1/2'>
          <div className=' font-semibold mt-2 md:text-center '>History</div>
          <PopularBlogs />
          <PopularBlogs />
          <PopularBlogs />
          <PopularBlogs />
          <PopularBlogs />
        </div>
      </div>
    </>
  )
}
