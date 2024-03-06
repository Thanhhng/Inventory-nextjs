"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { easeInOut } from 'framer-motion/dom';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import useWindowSize from '../hooks/useWindow';

const NOTIFITICATION_TIMEOUT = 3000;
const MAXIMUM_NOTIFICATION = 2;

function Toast() {
    const windowWidth = useWindowSize()
    const [notifications,setNotifications] = useState <Array<any>>([])
    useEffect(() => {
        if (notifications.length === 0) {
            return;
        }
        const timer = setTimeout(() => {
            setNotifications((currentNotifications) => currentNotifications.slice(1));
        }, NOTIFITICATION_TIMEOUT);
        return () => clearTimeout(timer);
    }, [notifications]);

    function handleRemove(number:number){
        setNotifications((notification) => notification.filter((_,index) => {
            return index !== number;
        }),)
    }

    function handleAdd(){
        if(notifications.length > MAXIMUM_NOTIFICATION){return}
        // setNotifications((notifications) => [...notifications, could using some thing else , dentist is just a demo])
        setNotifications((notifications) => [...notifications,"go to dentist"])
    }

    const displayMessage = () => {
        if (typeof window === 'undefined') {
            return null;
        }
        return (
            <>
                {createPortal(
                    <div className={`fixed ${notifications.length > 0 ? "w-full" : "w-fit"} flex flex-col  p-4 top-[10%] z-10 rounded-md gap-4 sm:justify-center sm:items-end `}>
                        <AnimatePresence >
                            { notifications.map((notification,index) => {
                                return (
                                    <Message key={index} index={index} handleRemove={handleRemove} message={notification} currentWidth={windowWidth} />
                                )
                            })}
                        </AnimatePresence>
                    </div>
                ,document.body)}
            </>
        )
    }
    
    return (
        <div className='w-full flex justify-center'>
            <button
                onClick={handleAdd}
                className='w-[12rem] min-w-fit bg-blue-500  text-white text-sm md:text-md font-medium shadow-2xl px-4 h-12 text-md rounded-md hover:bg-blue-700 hover:text-white hover:border-none'>
                    Add To My Calendar
            </button>
            {displayMessage()}
        </div>
  )
}

function Message({ index, handleRemove, message, currentWidth } : {index: number, handleRemove: Function, message: string, currentWidth:number}){
    return (
                <motion.div
                    className='flex items-center justify-between px-4 py-3 rounded-md bg-gray-200 shadow-lg mx-8 sm:w-fit sm:gap-8'
                    initial={{y:-200,x:0,opacity:0}}
                    animate={{y:0, opacity:1}}
                    exit={{x:currentWidth > 640 ? 500 : -300,opacity:0}}
                    transition={{duration:0.5,ease:easeInOut}}
                >
                    <div className='flex flex-col gap-2 '>
                        <p className='text-sm font-semibold text-gray-800'>Scheduled: {message} </p>
                        <p className='text-xs text-gray-500'>Monday,Dec 6,2001 at 11.48PM </p>
                    </div>
                    <button onClick={() => handleRemove(index)} className=' text-gray-400 hover:text-gray-600  rounded-full p-1 transition duration-300 ease-in-out"'>
                        <Image src={'/close-svgrepo-com.svg'} width={24} height={24} alt='Close-svg'/>
                    </button>
                </motion.div>
    )
}

export default Toast

