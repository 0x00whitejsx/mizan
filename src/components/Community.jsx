import React from 'react'

function Community() {
  return (
    <div className='w-full mb-10 bg-white h-[15vh] p-10 md:flex justify-around text-slate-600 align-middle items-center '>
        <div className='text-center'>
            <h1 className='md:text-5xl font-extrabold mb-3'>150<sup>+</sup>K</h1>
            <p className='text-sm mb-2'>Community</p>
        </div>
        <div className='text-center'>
        <h1 className='md:text-5xl font-extrabold mb-3'>75<sup>+</sup>K</h1>
        <p className='text-sm mb-2'>Networks</p>
        </div>
        <div className='text-center'>
        <h1 className='md:text-5xl font-extrabold mb-3'>50<sup>+</sup>K</h1>
        <p className='text-sm mb-2'>Products</p>
        </div>
    </div>
  )
}

export default Community