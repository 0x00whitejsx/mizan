import React from 'react'
import LOGO from "../assest/img/Orange Simple Online Shopping Logo.png"

function Menu() {
  return (
    <div className='bg-green-900 p-3 bg-blend-screen text-slate-100 text-lg w-full'>
        <div className='md:flex  justify-around'>
        <div>
            <img src={LOGO} alt="Logo"  className='w-15 h-10 bg-blend-multiply '/>
        </div>
        <div className='justify-around font-serif tracking-wider text-md'>
            <a href='/' className='p-2 hover:text-green-200'>Home</a>
            <a href='#' className='p-2 hover:text-green-200'>Products</a>
            <a href='/member' className='p-2 hover:text-green-200'>Member</a>
            <a href='/login' className='p-2 hover:text-green-200'>SC Login</a>
            <a href='register' className='p-2 hover:text-green-200'>Register</a>
            <a href='/contact' className='p-2 hover:text-green-200'>Contact</a>
            <a href='/about-us' className='p-2 hover:text-green-200'>About Us</a>
        </div>
        </div>
    </div>
  )
}

export default Menu