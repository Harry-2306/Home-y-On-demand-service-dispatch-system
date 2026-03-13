import React from 'react'
import "./Navbar.css"
import logo from '../assets/logo3.png'; 

const Navbar = () => {
  return (
    <div className=' h-15  flex flex-row items-center justify-center gap-[30%] sm:gap-[40%] md:gap-[70%] xl:gap-[80%] '>
      <div className=" w-50 h-15 cursor-pointer ">
        <img src={logo} className='w-[100%] h-[100%] object-contain' alt="" />
      </div>
      <button className="bg-cyan-500 w-35 h-10 text-center text-white   flex flex-row items-center justify-center rounded-l-full rounded-r-full font-bold text-[12px] cursor-pointer hover:bg-cyan-700">Sign up/Login</button>
    </div>
  )
}

export default Navbar
