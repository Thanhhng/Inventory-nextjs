import Accordion from "./components/Accordion";
import Carousels from "./components/Carousels";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import User from "./components/User";

interface CombinerProps{
  name : string
  component : React.JSX.Element
  minH?:any
}

export function Section({name,component,minH}:CombinerProps){
  return (
    <div className="mt-6 h-fit bg-[#424242] w-full flex flex-col rounded-md">
      <div className="flex px-6 h-16 border-b-[1px] border-solid border-b-[#1f1f1f] items-center">
        <h2 className="text-lg md:text-xl text-gray-300 pt-2 font-sans font-medium leading-10">{name}</h2>
        <hr />
      </div>
      <div className={`mt-4 py-4 px-4 ${minH}`}>
        {component}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <div className="mt-12 pt-12">
        <h1 className="w-full text-white text-xl md:text-2xl font-sans font-bold flex items-center justify-center">Components</h1>
        <div className="px-8 my-8 flex gap-12 flex-col">
          <Section name="Accordion" component={<Accordion/>}/>
          <Section name="Tab" component={<Tab />}/>
          <Section name="Carousels" component={<Carousels />}/>
          <Section name="User info and controls" component={<User/>}/>
          <Section name="Toggle/Toggle with icon" component={<Toggle/>}/>
          <Section name="Form Element" component={<Input/>}/>
          <Section name="Drop Down" component={<Dropdown/>} minH={"min-h-[17rem]"}/>
        </div>
      </div>
    </main>
  );
}