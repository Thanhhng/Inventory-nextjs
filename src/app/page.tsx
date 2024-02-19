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
    <div className="mt-6">
      <h2 className="text-xl text-white flex justify-start w-full mb-4">{name}</h2>
      {component}
    </div>
  )
}

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className="mt-20">
        <h1 className="w-full text-white text-2xl flex items-center justify-center">My components</h1>
        <div className="px-8 my-8 flex gap-12 flex-col">
          <div>
            <h2 className="text-xl text-white flex justify-start w-full mb-4">Accordion</h2>
            <Accordion/>
          </div>
          <Combiner name="Tab" component={<Tab />}/>
          <Combiner name="Carousels" component={<Carousels />}/>
        </div>
      </div>
    </main>
  );
}