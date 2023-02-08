import React, { useEffect } from 'react'
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import { useState } from 'react';

export default function Display({show}) {
    const [skills, showSkill] = useState(false)
    const [projects, showprojects] = useState(false)
    const [about, setAbout] = useState(false)
    console.log(show)
    useEffect(()=>{
        if(show == 'skills'){
            showSkill(true)
        }
        if(show == 'projects'){
            showprojects(true)
        }
        if(show == 'about'){
            setAbout(true)
        }
    },[])
    return (
    <>
      <div className='absolute flex text-white bg-black justify-center top-0 left-0 w-full h-full bg-opacity-80'>
        <div className='bg-slate-900 bg-opacity-70 overflow-auto scrollbar-hide text-white my-40  h-auto w-96'>
          {/* {show_switch} */}
          {skills?<Skills  />:''}
          {projects?<Projects  />:''}
          {about?<About  />:  ''}
        </div>
      </div>
    </>
  )
}
