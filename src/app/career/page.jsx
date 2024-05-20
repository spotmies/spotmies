import FooterBar from '@/components/footer'
import { Navbarr } from '@/components/landing_slide'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { ImBook } from "react-icons/im";
import { FaRegLightbulb } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BiVideoRecording } from "react-icons/bi";
import { SiAib, SiBlockchaindotcom, SiBugcrowd, SiFlutter, SiGit, SiKeybase, SiLinux, SiMongodb, SiNodedotjs, SiNodered, SiPython, SiReact, SiTensorflow } from 'react-icons/si';
import { BsFillLaptopFill } from 'react-icons/bs';
export default function career() {
  return (
    <div className='bg-[rgb(248,248,248)]'>
    <Navbarr noScrollEffect={true} career={true} />
      <div className='h-[100vh] bg-[#825BEB] flex items-center  flex-col'>
        <h1 className='text-white text-8xl gil-med mt-[20vh]'>Technologies</h1>
        {/* <div className='bg-white mt-14 items-center flex justify-center py-2 px-2 md:w-[40vw] lg:w-[40vw] w-[80%] rounded-md'>
          <CiSearch className='text-black'/>
          <input type="text" className='bg-white outline-none h-7 text-black ml-1 w-[95%] ' />
        </div> */}
        <div className='flex flex-wrap justify-center mt-32  gap-16'>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiMongodb className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>MERN stack</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiNodedotjs className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Node JS</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiTensorflow  className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Artificial Intellegence</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiPython className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Python</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiLinux className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Linux</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiBlockchaindotcom  className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Blockchain</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiBugcrowd className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Security</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiReact className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>React</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiFlutter  className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Flutter</p>
          </div>
          <div className='flex flex-col justify-center items-center cursor-pointer'>
            <SiGit  className='text-3xl ml-2'/>
            <p className='mt-2 ml-2'>Git</p>
          </div>
        </div>
      </div>
      {/* middle  */}
      <div className='hidden md:block lg:block' >
        <div className='image-div h-[50vh] w-[40vw] mt-[-8rem] shadow-lg mx-auto relative rounded-lg overflow-hidden '>
          <div className='linear-image-gradient w-full h-full absolute flex flex-col px-10'>
          <p className='bg-[#825BEB] w-fit px-4 py-2 text-gil-med text-xs rounded-full mt-10'>Featured Interview</p>
          <h1 className='z-2 text-white text-xl mt-7 gil-med'>What is your Interview <br /> Percentage telling you?</h1>
          <p className='w-[60%] mt-5 text-sm'>We have made a Website that keeps track of your interviews and help in preparing for your Interview.</p>
          <br />
          <a target='_blank' href="https://www.reaidy.io" className='w-28 justify-center flex items-center h-8 mt-5 cursor-pointer rounded-lg border-2 text-sm border-white'>Take Interview</a>
          </div>
        </div>
        </div>
        {/* webinars.. */}

        <div className='mx-auto w-[85%] flex flex-wrap justify-between mt-20 mb-20'>
          <div className='border-t-4 border-[#825BEB] rounded-xl shadow-xl text-black gil-med lg:w-[25vw] lg:h-[55vw] md:w-[25vw] md:h-[55vh] h-[55vh] w-[100%] mt-5 bg-white px-10 '>
             <div className="flex mt-10 items-center">
              <BsFillLaptopFill   className=' text-[#825BEB] text-3xl '/> 
              <p className='opacity-75 text-[#825BEB] ml-3 mt-1'>Job</p>
             </div>
             <h1 className='text-3xl opacity-75 gil-med mt-5'>React Developer</h1>
             <p className='text-sm opacity-75 mt-5 h-16'>
                  Primary skills: ReactJS, NodeJS, Javascript, typescript, CSS, HTML. <br />
                  Analyzing user requirements, envisioning system features and functionality. <br />
                  In-depth knowledge of design issues and best practices. <br />
              </p>

             <div className='flex mt-24 items-center'>
              <button className='text-sm bg-[#825BEB] text-white px-5 hover:bg-white border-2 hover:border-[#825BEB] hover:text-[#825BEB] rounded-xl py-3'>Take interview</button>
             </div>
          </div>
          <div className='border-t-4 border-[#825BEB] rounded-xl shadow-xl text-black gil-med lg:w-[25vw] lg:h-[55vw] md:w-[25vw] md:h-[55vh] h-[55vh] w-[100%] mt-5 bg-white px-10 '>
             <div className="flex mt-10 items-center">
              <BsFillLaptopFill   className=' text-[#825BEB] text-3xl '/> 
              <p className='opacity-75 text-[#825BEB] ml-3 mt-1'>Job</p>
             </div>
             <h1 className='text-3xl opacity-75 gil-med mt-5'>React Developer</h1>
             <p className='text-sm opacity-75 mt-5 h-16'>
                  Primary skills: ReactJS, NodeJS, Javascript, typescript, CSS, HTML. <br />
                  Analyzing user requirements, envisioning system features and functionality. <br />
                  In-depth knowledge of design issues and best practices. <br />
              </p>

             <div className='flex mt-24 items-center'>
              <button className='text-sm bg-[#825BEB] text-white px-5 hover:bg-white border-2 hover:border-[#825BEB] hover:text-[#825BEB] rounded-xl py-3'>Take interview</button>
             </div>
          </div>
          <div className='border-t-4 border-[#825BEB] rounded-xl shadow-xl text-black gil-med lg:w-[25vw] lg:h-[55vw] md:w-[25vw] md:h-[55vh] h-[55vh] w-[100%] mt-5 bg-white px-10 '>
             <div className="flex mt-10 items-center">
              <BsFillLaptopFill   className=' text-[#825BEB] text-3xl '/> 
              <p className='opacity-75 text-[#825BEB] ml-3 mt-1'>Job</p>
             </div>
             <h1 className='text-3xl opacity-75 gil-med mt-5'>React Developer</h1>
             <p className='text-sm opacity-75 mt-5 h-16'>
                  Primary skills: ReactJS, NodeJS, Javascript, typescript, CSS, HTML. <br />
                  Analyzing user requirements, envisioning system features and functionality. <br />
                  In-depth knowledge of design issues and best practices. <br />
              </p>

             <div className='flex mt-24 items-center'>
              <button className='text-sm bg-[#825BEB] text-white px-5 hover:bg-white border-2 hover:border-[#825BEB] hover:text-[#825BEB] rounded-xl py-3'>Take interview</button>
             </div>
          </div>
          <div className='border-t-4 border-[#825BEB] rounded-xl shadow-xl text-black gil-med lg:w-[25vw] lg:h-[55vw] md:w-[25vw] md:h-[55vh] h-[55vh] w-[100%] mt-5 bg-white px-10 '>
             <div className="flex mt-10 items-center">
              <BsFillLaptopFill   className=' text-[#825BEB] text-3xl '/> 
              <p className='opacity-75 text-[#825BEB] ml-3 mt-1'>Job</p>
             </div>
             <h1 className='text-3xl opacity-75 gil-med mt-5'>React Developer</h1>
             <p className='text-sm opacity-75 mt-5 h-16'>
                  Primary skills: ReactJS, NodeJS, Javascript, typescript, CSS, HTML. <br />
                  Analyzing user requirements, envisioning system features and functionality. <br />
                  In-depth knowledge of design issues and best practices. <br />
              </p>

             <div className='flex mt-24 items-center'>
              <button className='text-sm bg-[#825BEB] text-white px-5 hover:bg-white border-2 hover:border-[#825BEB] hover:text-[#825BEB] rounded-xl py-3'>Take interview</button>
             </div>
          </div>
          <div className='border-t-4 border-[#825BEB] rounded-xl shadow-xl text-black gil-med lg:w-[25vw] lg:h-[55vw] md:w-[25vw] md:h-[55vh] h-[55vh] w-[100%] mt-5 bg-white px-10 '>
             <div className="flex mt-10 items-center">
              <BsFillLaptopFill   className=' text-[#825BEB] text-3xl '/> 
              <p className='opacity-75 text-[#825BEB] ml-3 mt-1'>Job</p>
             </div>
             <h1 className='text-3xl opacity-75 gil-med mt-5'>React Developer</h1>
             <p className='text-sm opacity-75 mt-5 h-16'>
                  Primary skills: ReactJS, NodeJS, Javascript, typescript, CSS, HTML. <br />
                  Analyzing user requirements, envisioning system features and functionality. <br />
                  In-depth knowledge of design issues and best practices. <br />
              </p>

             <div className='flex mt-24 items-center'>
              <button className='text-sm bg-[#825BEB] text-white px-5 hover:bg-white border-2 hover:border-[#825BEB] hover:text-[#825BEB] rounded-xl py-3'>Take interview</button>
             </div>
          </div>
          <div className='border-t-4 border-[#825BEB] rounded-xl shadow-xl text-black gil-med lg:w-[25vw] lg:h-[55vw] md:w-[25vw] md:h-[55vh] h-[55vh] w-[100%] mt-5 bg-white px-10 '>
             <div className="flex mt-10 items-center">
              <BsFillLaptopFill   className=' text-[#825BEB] text-3xl '/> 
              <p className='opacity-75 text-[#825BEB] ml-3 mt-1'>Job</p>
             </div>
             <h1 className='text-3xl opacity-75 gil-med mt-5'>React Developer</h1>
             <p className='text-sm opacity-75 mt-5 h-16'>
                  Primary skills: ReactJS, NodeJS, Javascript, typescript, CSS, HTML. <br />
                  Analyzing user requirements, envisioning system features and functionality. <br />
                  In-depth knowledge of design issues and best practices. <br />
              </p>

             <div className='flex mt-24 items-center'>
              <button className='text-sm bg-[#825BEB] text-white px-5 hover:bg-white border-2 hover:border-[#825BEB] hover:text-[#825BEB] rounded-xl py-3'>Take interview</button>
             </div>
          </div>
          
          
        </div>
      <FooterBar />
    </div>
  )
}
