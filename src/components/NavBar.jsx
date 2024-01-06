import React from 'react'
import { MdSchool } from "react-icons/md";

const NavBar = () => {

  return (
    <header className='max-w-7xl m-auto flex justify-between p-8 relative z-10'>
        <nav className='flex flex-row items-center gap-16 text-white'>

            <div className='flex flex-row items-center gap-4'> 
               <MdSchool className='text-4xl'/>
                <span className='text-4xl font-bold'>Right Trails</span>
            </div>

            <ul className='flex flex-row gap-8 font-bold text-md'>
                <li className='cursor-pointer'><a href="/">Student</a></li>
                <li><a href="#">Counselor</a></li>
                <li><a href="#">Institute</a></li>
            </ul>

        </nav>
        <div className='space-x-8 font-bold'>
            <button className='bg-white text-[#3659d8] px-8 py-2 rounded-full'>Login</button>
            <button className='bg-white text-[#3659d8] px-8 py-2 rounded-full'>Register</button>
        </div>
    </header>
  )
}

export default NavBar