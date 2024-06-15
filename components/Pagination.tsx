import React from 'react'

export default function Pagination() {
  return (
    <div className='flex justify-between items-center m-4'>
      <button className=' bg-slate-500 hover:bg-slate-400 px-4 py-2 rounded-sm text-sm'>Prev</button>
      <button className=' bg-slate-500 hover:bg-slate-400 px-4 py-2 rounded-sm text-sm'>Next</button>
    </div>
  )
}
