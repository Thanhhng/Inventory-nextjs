"use client"
import { motion } from 'framer-motion'
import React, { useState } from 'react'

function ProgressBar() {
    const [width,setWidth] = useState<number>(20);
    function handleChange(){
        console.log(1)
        if(width === 1){setWidth(100)}
        setWidth(1)
    }
    return (
        <div>
            <div className='w-full flex items-center justify-center flex-col gap-6'>
                <div className='h-4 w-[25rem] rounded-lg shadow-xl bg-[#424548] relative '>
                    <motion.div
                        className={`absolute h-full w-[${width}%] bg-[#fabb05] z-20 rounded-lg`}
                        initial={{width:width}}
                        animate={{width: width === 100 ? "100%" : "1%"}}
                        transition={{duration:0.8, ease:"easeInOut"}}
                        >
                    </motion.div>
                </div>
                <button onClick={() => setWidth(width !== 100 ? 100 : 1 )} className='w-32 shadow-lg z-30 bg-white rounded h-12 hover:bg-gray-300 '>Run</button>
            </div>
        </div>
    )
}

export default ProgressBar
