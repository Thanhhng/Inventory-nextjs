"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'

function Input() {
    const [isOpen,setIsOpen] = useState(false)
    const [isShow,setIsShow] = useState(false)
    function closeModal(){
        console.log(1)
        setIsOpen(!isOpen)
    }
    return (
        <div className='text-white flex flex-col gap-4 items-center sm:justify-between sm:flex-row'>
            <form className='flex flex-col w-full justify-center items-center gap-8' onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-col gap-4'>
                    <p className='text-md px-2'>Input(Text)</p>
                    <input type='text' className='mx-2 text-black text-sm md:text-md font-semibold w-60 shadow-2xl px-4 h-8 border-solid border-[1px] rounded-md border-white outline-none' placeholder='Please input your name'></input>
                </div>
                <div className='flex flex-col gap-4 relative'>
                    <p className='text-md px-2'>Input(password)</p>
                    <div className='relative w-fit h-fit'>
                        <input type={isShow ? 'text':'password'} className='mx-2 text-black text-sm md:text-md font-semibold w-60 shadow-2xl px-4 h-8 border-solid border-[1px] rounded-md border-white outline-none' placeholder='Input your password'></input>
                        <Image onClick={() => {setIsShow(!isShow)}} src={isShow ? "/eye-open-svgrepo-com.svg" : "/eye-close-svgrepo-com.svg"} width={20} height={20} alt='eyes-svg' className='absolute z-[5] cursor-pointer left-[85%] top-[0.5rem]'/>
                    </div>
                </div>
                <div>
                    <p className='text-md px-2'>Button</p>
                    <button className='w-60 bg-white mx-2 text-black text-sm md:text-md font-medium my-2 w-50 shadow-2xl px-4 h-8 border-solid border-[1px] rounded-md'>
                        Submit
                    </button>
                </div>
            </form>
            <div className='w-full flex justify-center items-center gap-4 relative mt-12 sm:mt-0'>
                <button onClick={() => {setIsOpen(!isOpen)}} className='h-12 w-60 p-4 rounded-md bg-blue-500 text-white text-md hover:bg-blue-700 relative group'>
                    Usage with Drawer
                    <div className="absolute invisible group-hover:visible bg-white text-black top-[-120%] text-xs rounded py-2 px-4 shadow-md left-[0,1%]">
                        Click the button below to see how i use these input/button
                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 -mb-2 w-0 h-0 border-l-8 border-r-8 border-l-transparent border-r-transparent border-t-8 border-t-blue-500">
                            <div className='tooltip'></div>
                        </div>
                    </div>
                </button>
                {createPortal(
                    <div className={`absolute my-6 w-full h-full ${isOpen ? "" : "visible"}`}>
                        <button onClick={() => closeModal()} className={`${isOpen ? "" : "hidden"} absolute text-white w-full opacity-70 bg-black z-20 h-full top-0 left-0 cursor-default `}></button>
                        <AnimatePresence initial={false}>
                            <motion.div className='absolute text-white w-[25rem]  bg-[#1f1f1f] z-[25] h-full' initial={{x:-500,opacity:0}} animate={{x:isOpen ? 0 : -500,opacity:1}}  transition={{ duration: 0.6,ease: "easeInOut"}}>
                                <form className='fixed flex flex-col w-[25rem] h-100% justify-center gap-8' onSubmit={(e) => e.preventDefault()}>
                                    <div className='flex items-center justify-between px-4 pt-4 w-full gap-4 mb-4'>
                                        <p className='text-md font-bold'>Authentication</p>
                                        <button onClick={() => {closeModal()}} className='cursor-pointer text-md'>X</button>
                                    </div>
                                    <div className='flex flex-col gap-4 px-4 '>
                                        <p className='text-md'>User Name</p>
                                        <input type='text' className='w-full text-black text-sm md:text-md font-semibold shadow-2xl px-4 h-8 border-solid border-[1px] rounded-md border-white outline-none' placeholder='Please input your name'></input>
                                    </div>
                                    <div className='flex flex-col gap-4 px-4'>
                                        <p className='text-md'>Password</p>
                                        <div className='relative h-fit'>
                                            <input type={isShow ? 'text':'password'} className='w-full text-black text-sm md:text-md font-semibold shadow-2xl px-4 h-8 border-solid border-[1px] rounded-md border-white outline-none' placeholder='Input your password'></input>
                                            <Image onClick={() => {setIsShow(!isShow)}} src={isShow ? "/eye-open-svgrepo-com.svg" : "/eye-close-svgrepo-com.svg"} width={20} height={20} alt='eyes-svg' className='absolute z-[5] cursor-pointer left-[85%] top-[0.5rem]'/>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center mt-2 w-full px-4'>
                                        <button onClick={() => closeModal()} className='w-full min-w-fit bg-blue-500  text-white text-sm md:text-md font-medium my-2 w-50 shadow-2xl px-4 h-[2.5rem] text-md rounded-md hover:bg-blue-700 hover:text-white hover:border-none'>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    ,document.body)
                }
            </div>
        </div>
    )
}

export default Input