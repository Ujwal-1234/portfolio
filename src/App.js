import { useState } from "react";
import { BsFolderFill } from "react-icons/bs";
import Display from "./Display";
import { AiFillCloseCircle } from "react-icons/ai";

function App() {
  var [show, setShow] = useState(false)
  var [switch_value, setSwitch]= useState("skills")
  return (
    <div className="App">
      <main className='bg-black min-h-screen'>
      <section  x-data="{modalOpen: false}" className=' bg-red-300 w-full h-1/2 flex items-center justify-center text-white'>
        <div className=' my-40 justify-center items-center'>
          <h1 className=' text-4xl border p-10 rounded-full shadow-xl hover:shadow-white hover:shadow-inner hover:cursor-pointer  text-slate-900'> <b className='underline'>UJWAL</b> KUMAR MAHATO</h1>
        </div>
      </section>
        <div className='bg-red-300 pb-20 text-center text-2xl'> {"<"} Developer {"/ >"}</div>
      <section className='flex justify-center h-auto text-white'>
        
          <a className='p-14 hover:text-2xl hover:cursor-pointer' onClick={()=>{setSwitch("skills");setShow(true)}}><span className='justify-center text-4xl'><BsFolderFill /></span>SKILLS</a>
        
          <a className='p-14 hover:text-2xl hover:cursor-pointer' onClick={()=>{setSwitch("projects");setShow(true)}}><span className='text-4xl'><BsFolderFill /></span>PROJECTS</a>
        
          <a className='p-14 hover:text-2xl hover:cursor-pointer' onClick={()=>{setSwitch("about");setShow(true)}}><span className='text-4xl'><BsFolderFill /></span>ABOUT</a>
      </section>
      {show?<><Display show={switch_value} /><div onClick={()=>setShow(false)} className="absolute left-1/2 text-4xl text-white bottom-10 hover:text-6xl hover:cursor-pointer">
          <AiFillCloseCircle />
    </div></>:''}
    </main>
    </div>
  );
}
export default App;