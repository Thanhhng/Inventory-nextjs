"use client"
import React from 'react'
import Image from 'next/image';

function Carousels() {
  return (
    <div className='text-white'>
        <Image src={"https://picsum.photos/200/300"} height={50} width={50} alt='' />
        <Image src={"https://picsum.photos/200/300"} height={50} width={50} alt='' />
        <Image src={"https://picsum.photos/200/300"} height={50} width={50} alt='' />
        <Image src={"https://picsum.photos/200/300"} height={50} width={50} alt='' />
    </div>
)
}

export default Carousels