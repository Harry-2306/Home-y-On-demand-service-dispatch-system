import React from 'react'
import landing from "../assets/landing.png"
import servicework from "../assets/servicework.png"
import sample from "../assets/sample.png"
import { TypeAnimation } from 'react-type-animation';



const Landing = () => {

    var wordarr=["\'massages\'?",1000,"\'Servicing\'?",1000,"\'Facials\'?",1000];

    return (
        <>

            <div className=' w-full h-100   flex flex-row flex-wrap justify-center font-extrabold items-center text-7xl gap-4'>
                <p className='text-center'>Are you looking for </p> <p className='text-center text-cyan-500 text-6xl'><TypeAnimation sequence={wordarr} repeat={Infinity} /></p>
                <p className='text-center w-full  text-[30px] font-bold'>Well,look no further!</p>
            </div>
            
            <div className='w-full  h-190  flex flex-row  justify-center items-center flex-wrap gap-14 md:gap-15 pt-8'>
                <div className=' h-70 w-140 flex flex-col gap-2 sm:gap-16 items-center'>
                    <div className=" w-full flex flex-row flex-wrap items-center justify-center  gap-2 font-bold text-[28px]">
                        <p>Providing solutions,</p>
                        <p className='text-cyan-500'>one service at a time</p>
                    </div>
                    <div className=" text-wrap text-[20px] w-full text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique odit nam nihil minus laborum maiores modi illo nostrum? Iste adipisci quisquam saepe sed vel qui necessitatibus veniam, pariatur perferendis non aperiam temporibus est modi odit repudiandae dolor voluptatibus eaque.
                    </div>
                </div>
                <div className='  h-90 w-100 '>
                    <img src={landing} className='object-contain h-full w-full' alt="" />
                </div>
            </div>

            <div className='w-full  h-190  flex flex-row  justify-center items-center flex-wrap-reverse gap-10 md:gap-15 pt-8'>
                <div className='  h-90 w-100 '>
                    <img src={servicework} className='object-contain h-full w-full' alt="" />
                </div>
                <div className=' h-70 w-140 flex flex-col gap-2 sm:gap-16 items-center'>
                    <div className=" w-full flex flex-row flex-wrap items-center justify-center  gap-2 font-bold text-[28px]">
                        <p>Providing solutions,</p>
                        <p className='text-cyan-500'>one service at a time</p>
                    </div>
                    <div className=" text-wrap text-[20px] w-full text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique odit nam nihil minus laborum maiores modi illo nostrum? Iste adipisci quisquam saepe sed vel qui necessitatibus veniam, pariatur perferendis non aperiam temporibus est modi odit repudiandae dolor voluptatibus eaque.
                    </div>
                </div>
                
            </div>

            <div className='w-full  h-190  flex flex-row  justify-center items-center flex-wrap gap-14 md:gap-15 pt-8'>
                <div className=' h-70 w-140 flex flex-col gap-2 sm:gap-16 items-center'>
                    <div className=" w-full flex flex-row flex-wrap items-center justify-center  gap-2 font-bold text-[28px]">
                        <p>Providing solutions,</p>
                        <p className='text-cyan-500'>one service at a time</p>
                    </div>
                    <div className=" text-wrap text-[20px] w-full text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique odit nam nihil minus laborum maiores modi illo nostrum? Iste adipisci quisquam saepe sed vel qui necessitatibus veniam, pariatur perferendis non aperiam temporibus est modi odit repudiandae dolor voluptatibus eaque.
                    </div>
                </div>
                <div className='  h-90 w-100 '>
                    <img src={sample} className='object-contain h-full w-full' alt="" />
                </div>
            </div>

        </>
    )
}

export default Landing
