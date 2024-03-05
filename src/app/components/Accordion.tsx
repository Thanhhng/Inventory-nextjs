"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

interface AccordionProps {
    accordionArr?: any[];
    ref? : any
}

const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];


function Accordion({accordionArr=accordionData,ref}: AccordionProps) {
    const [currentVal, setCurrentVal] = useState<number | null>(null);
    function handleClick(index:number){
        setCurrentVal(currentVal === index ? null : index);
    }

    const accordion = accordionArr.map((e,index) => {
        const isOpen = currentVal === index;
        const iconSrc = isOpen ? '/minus-svgrepo-com.svg' : '/add-plus-svgrepo-com.svg';
        return (
            <div key={index} ref={ref} >
                <motion.div key={index} ref={ref} initial={{height:56}} animate={{ height: "auto" }}   transition={{  ease: "linear", duration:4}}            >
                    <motion.button layout onClick={() => handleClick(index)} className='w-full h-14 border shadow-lg border-white cursor-pointer flex justify-between items-center px-4'>
                        <span>{e.title}</span>
                        {
                            <motion.img
                                src={iconSrc} alt="logo" width={30} height={30}
                                key={isOpen ? 'open' : 'close'}
                                initial={{ y:10, opacity: 0, rotate: '0deg' }}
                                animate={{ y:0, opacity: 1, rotate: '180deg' }}
                                exit={{ y:-10, opacity: 0, rotate: '0deg' }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* <Image src={iconSrc} alt="logo"  className='cursor-pointer'/> */}
                            </motion.img>
                        }
                    </motion.button>
                    <AnimatePresence initial={false}>
                        {
                            isOpen &&
                            <motion.section
                                key="content"
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: "auto" },
                                    collapsed: { opacity: 0, height: 0 }
                                }}
                                transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                                <motion.div
                                    className=' p-4 text-md text-left leading-8'
                                    variants={{ collapsed: { scale: 0.8,  opacity: 0 }, open: { opacity: 1, scale: 1 } }}
                                    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    {e.content}
                                </motion.div>
                            </motion.section>
                        }
                    </AnimatePresence>
                </motion.div>
            </div>
        )
    })

  return (
    <div className='px-12 text-white'>
      <div className='w-full shadow-2xl border-white'>
        {accordion}
      </div>
    </div>
  );
}

export default Accordion;
