import Accordion from "./components/Accordion";
import Carousels from "./components/Carousels";
import Navbar from "./components/Navbar";
import Tab from "./components/Tab";

interface CombinerProps{
  name : string
  component : React.JSX.Element
}

function Combiner({name,component}:CombinerProps){
  return (
    <div className="mt-6 h-fit bg-[#424242] w-full flex flex-col rounded-md">
      <div className="flex px-6 h-16 border-b-[1px] border-solid border-b-[#1f1f1f] items-center">
        <h2 className="text-lg md:text-xl text-gray-300 pt-2 font-sans font-medium leading-10">{name}</h2>
        <hr />
      </div>
      <div className="mt-4 py-4 px-4">
        {component}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className="mt-20">
        <h1 className="w-full text-white text-xl md:text-2xl font-sans font-bold flex items-center justify-center">Components</h1>
        <div className="px-8 my-8 flex gap-12 flex-col">
          <Combiner name="Accordion" component={<Accordion/>}/>
          <Combiner name="Tab" component={<Tab />}/>
          <Combiner name="Carousels" component={<Carousels />}/>
        </div>
      </div>
    </main>
  );
}