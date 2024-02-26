"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion"

function ToggleSwitchWithIcon() {
  const [isOpen, setIsOpen] = useState(false);
  function getBtnStateImg(state:boolean){
    let imgSrc;
    switch(state){
      case false :
        return imgSrc = "moon-svgrepo-com.svg"
      case true :
        return imgSrc = "sun-svgrepo-com.svg"
    }
  }
  const src = getBtnStateImg(isOpen)
  let btnMotion = {
    location: isOpen ? 25 : 0,
    duration: 0.25
  }

  return (
    <button className="flex" onClick={() => {setIsOpen(!isOpen)}}>
      <div className={`relative h-8 w-14 rounded-2xl`}>
        <motion.div animate={{x:btnMotion.location}} transition={{ duration:btnMotion.duration }}>
          <Image src={src} height={25} width={25} alt="chest" className={`max-w-fit max-h-fit absolute left-1 top-1 h-6 w-6 rounded-full transition-transform `}/>
        </motion.div>
        <motion.div className="w-full h-full" initial={{ opacity: 0 }} animate={{opacity:1}} >
          <Image src={`${isOpen ? "/dayBg.jpg" : "/nightBg.jpg"}`} height={25} width={25} alt="background" className={`w-full max-h-full rounded-full`}/>
        </motion.div>
      </div>
    </button>
  );
}


const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <div className="flex w-full items-center justify-center gap-8 sm:gap-12 md:gap-20">
      <button
        onClick={toggleSwitch}
        className={`relative h-8 w-14 rounded-2xl ${isEnabled ? "bg-green-500" : "bg-gray-500"}`}>
        <div className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition-transform ${isEnabled ? "translate-x-full" : ""}`}></div>
      </button>
      <ToggleSwitchWithIcon/>
    </div>
  );
};

export default ToggleSwitch;
