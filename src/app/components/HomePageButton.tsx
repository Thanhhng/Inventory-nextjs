"use client"
import React, { RefObject } from 'react'

function HomePageButton({accordionRef}: {accordionRef:  RefObject<HTMLDivElement>}) {
    const scrollToAccordion = () => {
        if (!accordionRef || !accordionRef.current) return null;
        scrollToTargetAdjusted(accordionRef);
    };
    return (
        <button onClick={scrollToAccordion} className='w-32 h-[2.5rem] text-[1rem] shadow-sm bg-gray-300 shadow-white text-gray-800 rounded-xl'>Explore</button>
    )
}


function scrollToTargetAdjusted(element: RefObject<HTMLDivElement>){
    if (!element || !element.current) return;
    var headerOffset = 130;
    var elementPosition = element.current.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

export default HomePageButton;