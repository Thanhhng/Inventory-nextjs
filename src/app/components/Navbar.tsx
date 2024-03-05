import React from 'react'
import Image from 'next/image'


function Navbar() {
  return (
        <nav className="fixed top-0 left-0 z-50 flex px-4 bg-[#1f1f1f] text-gray-300 h-16 w-full shadow-sm shadow-black">
          <div className="py-4 flex items-center justify-between gap-2 w-full">
            <div className="flex gap-1 items-center justify-center pl-4">
              <Image src="/chest-gold-svgrepo-com.svg" alt="logo" width={40} height={40} className=' cursor-pointer shadow-xl'/>
              <h1 className=" mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-yellow-300 tracking-tight text-softWhite hover:text-white sm:text-xl cursor-pointer shadow-lg">Inventory</h1>
            </div>
            <ul className='flex flex-cols gap-6 pr-4 text-gray-300'>
                <li className=" text-lg text-gray-300 hover:text-white cursor-pointer shadow-md">About Me</li>
                <li className=" text-lg text-gray-300 hover:text-white cursor-pointer shadow-md">Contact</li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar