"use client"
import React, { useState } from 'react'

const tabName = ["Tab1", "Tab2", "Tab3"]
const tabContent = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium tenetur dolore, nihil cupiditate voluptatem dolor ipsum officiis magni quas sit?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, velit!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus blanditiis nostrum cupiditate nam quasi."
]

function Tab() {
    const [currentTab,setCurrentTab] = useState(0)
    function handleClick(index:number){
        setCurrentTab(index)
    }
    return (
        <div className='text-white w-full flex items-center justify-center'>
            <div className='w-[40rem] flex flex-col gap-4 border border-white border-solid'>
                <div className='flex items-center justify-around '>
                    {tabName.map((e,index) => {
                        return (
                            <button key={index} onClick={() => handleClick(index)} className={`${currentTab === index ? "bg-white text-black" : ""} h-12  w-full border border-white cursor-pointer text-md lg:text-xl`}>{e}</button>
                        )
                    })}
                </div>
                <div className='w-full mb-4 px-4'>
                    {
                        tabContent.map((e,index) => {
                            return (
                                <div key={index} className={`${currentTab !== index ? "hidden" : "block"}`}>
                                    <p>{e}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Tab