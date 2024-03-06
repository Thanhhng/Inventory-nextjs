"use client"
import Image from 'next/image'
import React from 'react'

function UserCard(){
  return (
    <div className='w-fit pb-8  hover:bg-[#303030] bg-[#242424] rounded-2xl shadow-2xl'>
      <div className='rounded-2xl flex flex-col gap-4 px-4 py-4'>
        <div className='relative w-full text-gray-300 rounded flex items-center justify-center '>
          <Image src={'https://picsum.photos/id/251/200/300'} height={100} width={100} alt='random-img' className='w-[18rem] h-[13rem] rounded-md'></Image>
        </div>
        <div className='w-[17rem] flex flex-col justify-center text-gray-300 gap-2'>
          <p className='text-lg md:text-xl lg:text-2xl'>Title</p>
          <p className='text-sm leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, iusto?</p>
          <div className='w-full flex mt-4'>
            <button className='w-full text-sm sm:text-md shadow-lg z-30 h-[2.5rem] bg-white rounded-md px-4 hover:bg-gray-300 text-black'>
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function User() {
  return (
    <div className='flex flex-col sm:flex-row gap-12 sm:justify-around items-center justify-center '>
      <button className='text-gray-300 hover:scale-[101%]  hover:bg-[#323232]  w-full sm:w-fit border-solid rounded-md shadow-2xl'>
        <div className='flex justify-between items-center w-full px-4 sm:h-min  '>
          <div className='flex gap-12 rounded px-6 py-4 justify-between'>
            <Image src={'https://picsum.photos/id/237/200/300'} height={40} width={40} alt='random-img' className='w-12 h-12 rounded-full'></Image>
            <div className='flex flex-col my-auto h-full items-start gap-2'>
              <h4 className='text-lg sm:text-xl font-medium'>User Name</h4>
              <p className='text-sm sm:text-md'>user@gmail.com</p>
            </div>
          </div>
          <Image src="/right.svg" height={40} width={40} alt='picture' className='cursor-pointer '></Image>
        </div>
      </button>
      <UserCard/>
    </div>
  )
}

export default User

