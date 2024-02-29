"use client"
import Image from 'next/image'
import React from 'react'

function UserCard(){
  return (
    <div className='my-6  w-fit pb-8  hover:bg-[#303030] bg-[#242424] rounded-2xl peer'>
      <div className='rounded-2xl'>
        <div className='relative w-full text-gray-300 rounded flex items-center justify-center'>
          <Image src={'https://picsum.photos/id/237/200/300'} height={50} width={50} alt='random-img' className='w-[5rem] h-[5rem] absolute top-[75%] rounded-full'></Image>
          <Image src={'https://picsum.photos/id/300/200/300'} height={100} width={100} alt='random-img' className='w-[15rem] h-[10rem] rounded-t-md'></Image>
        </div>
        <div className='w-full flex flex-col gap-2 justify-center items-center mt-12 text-gray-300'>
          <p className='text-lg md:text-xl lg:text-2xl'>Lorem</p>
          <p className='text-md'>My Name Is Lorem</p>
        </div>
        <div className='w-full flex items-center justify-center mt-8'>
          <button className='w-[80%] h-[2.5rem] mx-2 text-white text-md py-2 px-4 border-solid border-[1px] border-white rounded-lg hover:bg-white hover:text-black text-md font-sans'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

function User() {
  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:justify-around items-center justify-center'>
      <button className='text-gray-300 hover:bg-[white] hover:text-black border-[1px] w-full sm:w-fit border-solid rounded-md '>
        <div className='flex justify-between items-center w-full px-4 sm:h-min'>
          <div className='flex gap-4 rounded px-6 py-4 justify-between'>
            <Image src={'https://picsum.photos/id/237/200/300'} height={40} width={40} alt='random-img' className='w-12 h-12 rounded-full'></Image>
            <div className='flex flex-col my-auto h-full items-start'>
              <h4 className='text-xl text-bold'>Lorem</h4>
              <p className='text-sm'>lorem@gmail.com</p>
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

