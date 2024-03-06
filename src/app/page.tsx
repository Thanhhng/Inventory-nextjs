"use client"
import Accordion from "./components/Accordion";
import Carousels from "./components/Carousels";
import Dropdown from "./components/Dropdown";
import HomePageButton from "./components/HomePageButton";
import Input from "./components/Input";
import ProgressBar from "./components/ProgressBar";
import Tab from "./components/Tab";
import Toast from "./components/Toast";
import Toggle from "./components/Toggle";
import User from "./components/User";
import Image from "next/image";
import { RefObject, useRef } from 'react';



interface CombinerProps{
  name : string
  component : React.JSX.Element
  minH?:any,
  forwardedRef?: RefObject<HTMLDivElement>
}


function Section({name,component,minH,forwardedRef}:CombinerProps){
  return (
    <div className="mt-6 h-fit bg-[#424242] w-full flex flex-col rounded-md shadow-md" ref={forwardedRef}>
      <div className="flex px-6 h-16 border-b-[1px] border-solid border-b-[#1f1f1f] items-center shadow-md">
        <h2 className="text-lg md:text-xl text-gray-300 pt-2 font-sans font-medium leading-10">{name}</h2>
      </div>
      <div className={`mt-4 py-4 px-4 ${minH} shadow-md`}>
        {component}
      </div>
    </div>
  )
}

export default function Home() {
  const accordionRef = useRef<HTMLDivElement>(null)
  return (
    <main>
      <div className="mt-4 pt-12 ">
        <div className="w-full h-screen hidden sm:flex flex-col sm:flex-row justify-center gap-4 py-12 my-12 sm:my-0 sm:py-0 my:pb-12">
          <div className=" pl-12 w-full py-12">
            <Image src="/hanson-lu-LjhhutXPuW0-unsplash.jpg" width={200} height={200} alt={"technology-svg"} className="w-full h-full rounded-lg" />
          </div>
          <div className="flex text-white justify-center items-center w-full text-center px-12">
            <div className="text-white text-xl text-pretty py-2 mb-[5rem] flex flex-col gap-6 justify-center items-center">
              <h1 className="text-bold text-2xl sm:text-4xl text-center text-white"> My Inventory</h1>
              <p className="text-md text-gray-200">This is where i put a few of my product</p>
              <HomePageButton accordionRef={accordionRef}/>
            </div>
          </div>
        </div>
        <div className="text-white flex items-center justify-center flex-col gap-4 sm:hidden w-full py-4">
            <h1 className="text-bold text-3xl text-center text-white"> My Inventory</h1>
            <p className="text-md text-gray-200 ">This is where i put a few of my product</p>
          </div>
        <div className="px-8 my-8 flex gap-12 flex-col">
          <Section name="Accordion" component={<Accordion />} forwardedRef={accordionRef}/>
          <Section name="Tab" component={<Tab />}/>
          <Section name="Carousels" component={<Carousels />}/>
          <Section name="Card" component={<User/>}/>
          <Section name="Toggle/Toggle with icon" component={<Toggle/>}/>
          <Section name="Form Element" component={<Input/>}/>
          <Section name="Drop Down" component={<Dropdown/>}/>
          <Section name="Toast" component={<Toast/>}/>
          <Section name="Progress Bar" component={<ProgressBar/>}/>
        </div>
      </div>
    </main>
  );
}