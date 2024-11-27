import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-2 bg-slate-600'>
        <div className="logo">
            <span className='text-xl font-bold mx-8'>iTask</span>
        </div>
        <ul className='flex gap-8 mx-9 text-center'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all w-20'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
