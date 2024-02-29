"use client"
import { AnimatePresence, easeIn, easeInOut, motion } from 'framer-motion'
import React, { useState } from 'react'

const content = ["Edit","Delete" ,"Add","Adjust"]

function Dropdown() {

  const [isDropDownOpen,setDropDownOpen] = useState(false)
  return (
    <div className='min-h-30 flex flex-col px-4 py-4 w-full items-center justify-center relative text-white gap-2'>
      <button  onClick={() => {setDropDownOpen(!isDropDownOpen)}} className='w-60 min-w-fit bg-blue-500  text-white text-sm md:text-md font-medium shadow-2xl px-4 h-12 text-md rounded-md hover:bg-blue-700 hover:text-white hover:border-none'>Options</button>
        <AnimatePresence initial={false}>
          <motion.div className={`flex flex-col relative py-2 px-2 border-solid origin-top`} initial={{scale:0}} animate={{scale:isDropDownOpen ? 1 : 0}} transition={{duration:0.2,ease:easeInOut}} exit={{scaleY:0}}>
            <div className='DropDownToolTip'></div>
            <div className='flex flex-col justify-center items-center rounded-md border-2 bg-white text-black py-2 px-2'>
              {
                content.map((e:any,index:number) => {
                  return (
                    <motion.div initial={{x:-70,opacity:0}} animate={{x:isDropDownOpen ? 0 : -70,opacity:isDropDownOpen ? 1 : 0}} transition={{duration:0.3,ease:'easeInOut'}} exit={{opacity:0}} key={index} className={`w-[14rem] rounded-md h-12 z-[2] flex justify-start px-4 items-center border-solid border-black text-black cursor-pointer hover:bg-[#e2e8f0]`}>{e}</motion.div>
                  )
                })
              }
            </div>
          </motion.div>
        </AnimatePresence>
    </div>
  )
}

export default Dropdown
