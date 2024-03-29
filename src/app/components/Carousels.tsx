"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type Expression = "next" | "prev";

const data = [
    {
      image:
        'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Best forests to visit in North America',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Hawaii beaches review: better than you think',
      category: 'beach',
    },
    {
      image:
        'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Mountains at night: 12 best locations to enjoy the view',
      category: 'nature',
    },
    {
      image:
        'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Aurora in Norway: when to visit for best experience',
      category: 'nature',
    },
    {
      image:'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Best places to visit this winter',
      category: 'tourism',
    },
    {
      image:'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'Active volcanos reviews: travel at your own risk',
      category: 'nature',
    },
];

const variants = {
  initial : (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }
  },
  animate: (direction: number) => {
    return {
      zIndex: 1,
      x: 0,
      opacity: 1,
    }
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? -300 : 300,
      opacity: 0
    };
  }
}



function Carousels() {
  const [currentPic, setCurrentPic] = useState(0)
  const [direction, setDirection] = useState(0);

  function handleClick(expression : Expression){
      if(!expression){return}
      if(expression === "next"){
          setDirection(1)
          currentPic === data.length - 1 ? setCurrentPic(0) : setCurrentPic(currentPic + 1 )
      } else if (expression === "prev"){
          setDirection(-1)
          currentPic === 0 ? setCurrentPic(data.length - 1  ) : setCurrentPic(currentPic - 1 )
      }
  }

  function setCurrentByDot(index:number){
    setCurrentPic(index)
  }

  return (
        <div className='text-white w-full  flex h-[20rem] relative sm:items-center sm:justify-center'>
            <AnimatePresence initial={true} custom={direction}>
              <div
                className={`sm:flex sm:items-center sm:justify-center absolute w-full`}>
                <div className='w-full h-full sm:h-fit sm:w-fit relative'>
                  <motion.img custom={direction} key={currentPic} variants={variants} initial="initial" animate="animate" exit="exit" src={data[currentPic]?.image} height={200} width={200} alt='picture'  className='w-[30rem] h-[20rem] object-fill sm:w-[30rem] sm:h-[20rem] rounded-md shadow-lg'></motion.img>
                  <Image onClick={() => handleClick("next")} src="/right.svg" height={50} width={50} alt='picture' className='absolute top-[40%] right-4 shadow-md   cursor-pointer hover:scale-125'></Image>
                  <Image onClick={() => handleClick("prev")} src="/arrow-sm-left-svgrepo-com.svg" height={50} width={50} alt='picture' className='absolute top-[40%] shadow-md  left-4  cursor-pointer hover:scale-125'></Image>
                  <div className='flex gap-4 relative w-full items-center justify-center bottom-6'>
                    {[...Array(6)].map((_, index) => (
                      <button
                        key={index}
                        className={`w-4 h-4 rounded-xl ${index === currentPic ? "bg-white w-8 opacity-80" : "bg-transparent"}  border border-solid border-neutral-50`}
                        onClick={() => {setCurrentByDot(index)}}>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatePresence>
        </div>
    )
}

export default Carousels

