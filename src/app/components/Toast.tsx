"use client"
import { motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import useWindowSize from '../hooks/useWindow';


function Toast() {
    const [notifications,setNotifications] = useState <Array<any>>([])
    useEffect(() => {
        if (notifications.length === 0) {
            return;
        }
        const timer = setTimeout(() => {
            setNotifications((currentNotifications) => currentNotifications.slice(1));
        }, 20000);
        return () => clearTimeout(timer);
    }, [notifications]);

    function handleRemove(number:number){
        setNotifications((notification) => notification.filter((_,index) => {
            return index !== number;
        }),)
    }

    function handleAdd(){
        if(notifications.length > 2){return}
        setNotifications((notifications) => [...notifications,"go to dentist"])
    }

    return (
        <div className='w-full flex justify-center'>
            <button
                onClick={handleAdd}
                className='w-[12rem] min-w-fit bg-blue-500  text-white text-sm md:text-md font-medium shadow-2xl px-4 h-12 text-md rounded-md hover:bg-blue-700 hover:text-white hover:border-none'>Add To My Calendar</button>
            {createPortal(
                <div className={`fixed w-full flex flex-col  p-4 top-[10%] z-50 rounded-md gap-4 sm:w-fit)`}>
                    { notifications.map((notification,index) => {
                        return (
                            <Message key={index} index={index} handleRemove={handleRemove} message={notification}/>
                        )
                    })}
                </div>
            ,document.body)}
        </div>
  )
}

function Message({ index, handleRemove, message } : {index: number, handleRemove: Function, message: string}){
    const windowSize = useWindowSize()
    return (
        <motion.div
            className='flex gap-4 justify-between text-black px-4 py-4 rounded-md bg-white mx-4 md:w-fit shadow-lg'
            initial={{y:-200,x:windowSize > 678 ? 250 : 0,opacity:0}}
            animate={{y:0,opacity:1}}
            exit={{x:-200,opacity:0}}
            transition={{duration:0.3,ease:easeInOut}}
        >
            <div className='flex flex-col gap-2 text-black'>
                <p className='text-md'>Scheduled: {message} </p>
                <p className='text-sm'>Monday,Dec 6,2001 at 11.48PM </p>
            </div>
            <button onClick={() => handleRemove(index)} className=' hover:bg-gray-300  rounded-lg px-2 border-gray-300'>
                <Image src={'/close-svgrepo-com.svg'} width={30} height={30} alt='Close-svg'/>
            </button>
        </motion.div>
    )
}

export default Toast

