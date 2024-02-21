import React from 'react'
import Image from 'next/image'


function Navbar() {
  return (
    <header>
        <nav className="fixed top-0 left-0 z-10 flex px-4 bg-[#1f1f1f] text-gray-300 h-16 w-full shadow-[0_1px_0_0_rgba(255,255,255,0.4)]  ">
          <div className="py-4 flex items-center justify-between gap-2 w-full">
            <div className="flex gap-1 items-center justify-center pl-4">
              <Image src="/chest-gold-svgrepo-com.svg" alt="logo" width={40} height={40} className=' cursor-pointer'/>
              <h1 className=" mt-2 text-1xl font-bold tracking-tight text-softWhite  sm:text-xl cursor-pointer">Inventory</h1>
            </div>
            <ul className='flex flex-cols gap-4 pr-4 text-gray-300'>
                <li className=" text-lg hover:text-gray-300 cursor-pointer">Home</li>
                <li className=" text-lg hover:text-gray-300 cursor-pointer">About</li>
                <li className=" text-lg hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Navbar