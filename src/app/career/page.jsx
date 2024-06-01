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
  function jobRoles({title,skills,desc,link}){
    return (
        <div className='border-t-4 border-primary rounded-xl shadow-xl text-black gil-med lg:w-[27vw] lg:h-[55vh] md:w-[27vw] md:h-[55vh] h-[55vh] w-[100%] mt-5 bg-white px-10 py-10'>
             <div className='h-full flex flex-col justify-evenly'><div>
              <div className="flex items-center">
                <BsFillLaptopFill   className=' text-primary text-3xl '/> 
                <p className='opacity-75 text-primary ml-3 mt-1'>Job</p>
              </div>
              <h1 className='text-3xl opacity-75 gil-med mt-5'>{title}</h1>
              <p className='text-sm opacity-75 mt-3'>
                  Primary skills:{skills}<br/>
                  {desc}
                </p>
              </div>
             <div className='flex items-center'>
              <a href={link} target='_blank'><button className='text-sm bg-primary text-white px-5 hover:bg-white border-2 hover:border-primary hover:text-primary rounded-xl py-3'>Take interview</button></a>
             </div></div>
        </div>
    )
  }
  return (
    <div className='bg-[rgb(248,248,248)]'>
    <Navbarr noScrollEffect={true} career={true} />
      <div className='h-[100vh] bg-[#60f4ff] flex items-center  flex-col'>
        <h1 className='text-7xl sm:text-8xl gil-med mt-[20vh]'>Technologies</h1>
        {/* <div className='bg-white mt-14 items-center flex justify-center py-2 px-2 md:w-[40vw] lg:w-[40vw] w-[80%] rounded-md'>
          <CiSearch className='text-black'/>
          <input type="text" className='bg-white outline-none h-7 text-black ml-1 w-[95%] ' />
        </div> */}
        <div className='flex flex-wrap justify-center mt-32  gap-16'>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiMongodb className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>MERN stack</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiNodedotjs className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Node JS</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiTensorflow  className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Artificial Intellegence</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiPython className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Python</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiLinux className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Linux</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiBlockchaindotcom  className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Blockchain</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiBugcrowd className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Security</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiReact className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>React</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiFlutter  className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Flutter</p>
          </div>
          <div className='p-2 flex flex-col justify-center items-center cursor-pointer rounded tech-stack transition-all delay-100 overflow-hidden ease-linear'>
            <SiGit  className='text-4xl xl:text-3xl transition-all delay-100'/>
            <p className='text-lg xl:text-base mt-2 transition-all delay-100'>Git</p>
          </div>
        </div>
      </div>
      {/* middle  */}
      <div className='hidden md:block lg:block' >
        <div className='image-div h-[50vh] w-[40vw] mt-[-5rem] shadow-lg mx-auto relative rounded-lg overflow-hidden '>
          <div className='linear-image-gradient w-full h-full absolute flex flex-col px-10'>
          <p className='bg-black text-primary w-fit px-4 py-2 text-gil-med text-sm rounded-full mt-10'>Featured Interview</p>
          <h1 className='z-2 text-black text-xl mt-7 gil-med font-bold'>What is your Interview <br /> Percentage telling you?</h1>
          <p className='w-[60%] mt-5 text-sm text-black font-semibold'>We have made a Website that keeps track of your interviews and help in preparing for your Interview.</p>
          <br />
          <a target='_blank' href="https://www.reaidy.io" className='text-white w-28 justify-center flex items-center h-8 mt-5 cursor-pointer rounded-lg border-2 text-sm border-white hover:bg-white hover:text-black'>Take Interview</a>
          </div>
        </div>
      </div>
        {/* webinars.. */}

        <div className='mx-auto w-[85%] flex flex-wrap justify-around mt-20 mb-20'>
            {jobRoles({
                title:"React Developer",
                skills:"React.js, JavaScript, HTML, CSS, Redux.",
                desc:"Design and develop reusable UI components, implement state management using Redux, collaborate with design teams to implement UI/UX designs.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=6659761687d9fd5837701947"
            })}
            {jobRoles({
                title:"Node JS Developer",
                skills:"Node.js, Express.js, MongoDB, SQL, RESTful APIs.",
                desc:"Maintain backend systems, optimize performance, integrate with frontend applications, manage databases, and implement security protocols.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=6659767af7bc14981aef4b68"
            })}
            {jobRoles({
                title:"Flutter Developer",
                skills:"Dart, Flutter, Firebase, RESTful APIs.",
                desc:"Develop and maintain cross-platform mobile applications using Flutter framework, integrate with backend services, ensure app performance.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=6659775862c7f1f38bb54cc9"
            })}
            {jobRoles({
                title:"AI ML Developer",
                skills:"Python, TensorFlow, PyTorch, scikit-learn, RESTful APIs.",
                desc:"Develop ML models, optimize algorithms, integrate AI into mobile apps, collaborate with frontend/backend teams, ensure efficiency of AI/ML components.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=66597793f7bc14981aef4e2a"
            })}
            {jobRoles({
                title:"Blockchain Developer",
                skills:"Solidity, Ethereum, Hyperledger Fabric, Smart Contracts, Web3.js.",
                desc:"Develop smart contracts, architect blockchain solutions, integrate blockchain into applications, ensure efficiency of blockchain components.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=665977d487d9fd58377019c6"
            })}
            {jobRoles({
                title:"Devops Engineer",
                skills:"Docker, Kubernetes, Ansible, Terraform, CI/CD pipelines.",
                desc:"Orchestrate containers, automate deployment, manage CI/CD pipelines, collaborate with teams, ensure infrastructure scalability.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=6659780162c7f1f38bb54cd0"
            })}
            {jobRoles({
                title:"Mern stack Developer",
                skills:"Proficiency in MongoDB, Express.js, React.js, Node.js, JavaScript, HTML, and CSS.",
                desc:"Develop and maintain MERN web apps, collaborate with cross-functional teams, troubleshoot issues.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=6659772287d9fd58377019a3"
            })}
            {jobRoles({
                title:"Sales executive",
                skills:"Excellent communication, negotiation skills, customer relationship management, market knowledge.",
                desc:"Generate leads, achieve sales targets, maintain client relationships, provide solutions to customer needs.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=66597846f7bc14981aef4e31"
            })}
            {jobRoles({
                title:"Marketing Executive",
                skills:"Market research, strategic planning, digital marketing, content creation, analytical skills.",
                desc:"Develop marketing campaigns to drive brand awareness and lead generation, analyze metrics for optimization.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=6659787b87d9fd58377019cd"
            })}
            {jobRoles({
                title:"Social media manager",
                skills:"Social media platform expertise, content creation, community management, analytics, creativity.",
                desc:"Implement social media strategies, manage channels, create content, analyze metrics.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=665978d962c7f1f38bb54cd7"
            })} 
            {jobRoles({
                title:"Lead generation Manager",
                skills:"Excellent communication, research skills, persistence, attention to detail, sales acumen.",
                desc:"Identify leads via cold calling, emails, maintain CRM records.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=6659797b87d9fd5837701a08"
            })}
            {jobRoles({
                title:"Graphic designer",
                skills:"Graphic design software (e.g., Adobe Photoshop, Illustrator, InDesign), creativity, typography.",
                desc:"Create graphics for print and digital, collaborate, deliver high-quality designs within deadlines.",
                link:"https://app.reaidy.io/share?page=interview_invitation&id=665979ad62c7f1f38bb54cde"
            })}
        </div>
      <FooterBar />
    </div>
  )
}
