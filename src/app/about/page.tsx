"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


function About() {
  const route = useRouter()
  return (
    <div className='w-full flex justify-center items-center gap-4 text-2xl mt-[10rem] text-white flex-col'>
      <p>its Empty here</p>
      <button onClick={() => route.push("/")} className='w-60 text-sm sm:text-md shadow-lg  z-30 h-[2.5rem] md:h-12 md:w-[17rem] bg-white rounded-md px-4 hover:bg-gray-300 text-black'>click me to redirect homepage</button>
    </div>
  )
}

export default About