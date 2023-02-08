import { useState } from "react";
import { BsFolderFill } from "react-icons/bs";
import Display from "./Display";
import { AiFillCloseCircle } from "react-icons/ai";
function App() {
  var [show, setShow] = useState(false)
  var [switch_value, setSwitch]= useState("skills")
  return (
    <div className="App">
      <div>
        <svg viewBox="0 0 100 45" className="min-h-screen w-full">
        <defs>
        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)"></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)"></stop></radialGradient>
        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient>
        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient>
        <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient>
        <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient>
        <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient>
        </defs>
        
        <rect x="13.744%" y="1.18473%" width="200%" height="550%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect>
        <rect x="-2.17916%" y="35.4267%" width="200%" height="550%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform></rect>
        <rect x="9.00483%" y="14.5733%" width="200%" height="550%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform></rect>
        </svg>
      </div>
      <main className=' absolute top-0 w-full'>
        <section className='  w-full h-1/2 flex items-center justify-center text-black'>
          <div className=' my-40 justify-center items-center'>
            <h1 className=' text-4xl border p-10 rounded-full shadow-xl hover:shadow-white hover:shadow-inner hover:cursor-pointer  text-slate-900'> <b className='underline'>UJWAL</b> KUMAR MAHATO</h1>
          </div>
        </section>
          <div className=' pb-20 text-center text-2xl'> {"<"} Developer {"/ >"}</div>
        <section className='  sm:top-0 flex justify-center text-black'>
            <a className=' p-5 lg:p-14 hover:text-2xl hover:cursor-pointer' onClick={()=>{setSwitch("skills");setShow(true)}}><span className='justify-center text-4xl'><BsFolderFill /></span>SKILLS</a>
            <a className=' p-5 lg:p-14 hover:text-2xl hover:cursor-pointer' onClick={()=>{setSwitch("projects");setShow(true)}}><span className='text-4xl'><BsFolderFill /></span>PROJECTS</a>
            <a className=' p-5 lg:p-14 hover:text-2xl hover:cursor-pointer' onClick={()=>{setSwitch("about");setShow(true)}}><span className='text-4xl'><BsFolderFill /></span>ABOUT</a>
        </section>
        {show?<><Display show={switch_value} /><div onClick={()=>setShow(false)} className="absolute left-1/2 text-4xl text-white bottom-10 hover:text-6xl hover:cursor-pointer">
            <AiFillCloseCircle /></div></>:''}
      </main>
    </div>
  );
}
export default App;