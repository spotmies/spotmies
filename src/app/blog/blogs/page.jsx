import FooterBar from '@/components/footer'
import { Navbarr } from '@/components/landing_slide'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { CiMail } from "react-icons/ci";
export default function page() {
    return (
        <div className='bg-white text-black'>
            <Navbarr noScrollEffect={true} career={true} />
            <div className=' bg-white flex px-10 mb-10'>
                <div>
                    <div className='flex items-center gap-5 mt-32'>
                        <h1 className=' gil-bold opacity-75 text-black'>03 January 2023</h1>
                        <p className='border-2 border-slate-500 bg-slate-200 gil-med rounded-full px-3'>Business</p>
                    </div>
                    <h1 className='md:text-5xl lg:text-5xl mt-5 text-[25px] md:w-[70%] lg:w-[70%] w-full gil-med opacity-90 lg:leading-[55px] md:leading-[55px] leading:40'>
                        Streamline your project Management  with protask
                    </h1>
                    <div className='flex items-center mt-10'>
                        <img className='h-10 w-10  rounded-full object-cover mx-1' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p className='gil-bold ml-3 opacity-80'>Person Name</p>
                    </div>
                    <img className=' max-h-[100vh] md:w-[50vw] lg:w-[50vw] w-[80vw] mt-5 rounded-lg object-scale-down' src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h1 className='mt-5 text-4xl gil-bold opacity-80'>Introduction</h1>

                    <p className='md:w-[50vw] lg:w-[50vw] w-full mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis asperiores id, tenetur maxime maiores? Omnis aliquid porro dolore illo nemo libero. Sed placeat ipsa rem voluptates at iusto, odio nostrum tempora dolor quam id autem. Eveniet, ratione quas voluptates distinctio perferendis sapiente sed maxime aliquam est qui, ipsam officia.
                    </p>
                    <p className='md:w-[50vw] lg:w-[50vw] w-full mt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique perferendis asperiores id, tenetur maxime maiores? Omnis aliquid porro dolore illo nemo libero. Sed placeat ipsa rem voluptates at iusto, odio nostrum tempora dolor quam id autem. Eveniet, ratione quas voluptates distinctio perferendis sapiente sed maxime aliquam est qui, ipsam officia.
                    </p>

                </div>
                <div className='md:block lg:block hidden'>
                    {/* <div className='bg-white mt-32 border-2 border-slate-600 items-center flex justify-center py-2 px-2 md:w-[30vw] lg:w-[30vw] w-[70%] rounded-md'>
                        <CiSearch className='text-black' />
                        <input placeholder='Search' type="text" className='bg-white outline-none h-7 text-black ml-1 w-[95%] ' />
                    </div> */}
                    <div className='bg-[#f9fafc] rounded-lg mt-32 p-5 w-[35vw] '>
                        <h1 className='text-2xl gil-bold opacity-80 w-[80%]'>Weekly Newsletter</h1>
                        <p className='text-sm mt-5 gil-med opacity-80'>Join Our Community and Never Miss a Beat!
                            Stay updated with the latest news, exclusive content, and special offers by subscribing to our newsletter. As a member of our community, you'll receive:
                            Insider Information: Be the first to know about upcoming events, new releases, and exciting updates.
                        </p>
                        <div className='bg-white mt-5 border-2 border-slate-600 items-center flex justify-center py-2 px-2 md:w-[30vw] lg:w-[30vw] w-[70%] rounded-md'>
                            <CiMail  className='text-black' />
                            <input type="text" placeholder='Enter your Email' className='bg-white outline-none h-7 text-black ml-1 w-[95%] ' />
                        </div>
                            <p className='text-sm mt-2 opacity-80'>We care about your data</p>
                            <button className='bg-blue-600 rounded-lg text-white mt-5 hover:border-slate-700 w-[30vw] h-10'>Subscribe</button>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-2xl gil-med opacity-80'>Recent Blogs</h1>
                            <div className='flex flex-col'>
                                <div className='flex py-5 mt-5  rounded-sm border-b-[2px] border-opacity-25 border-slate-600'>
                                    <img className='h-14 w-14  rounded-full object-cover mx-1' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-sm  gil-bold opacity-80'>Launching our Product <br /> From Idea to market Success</h1>
                                        <p className='opacity-75 mt-5 '>Learn the essential steps to to success</p>
                                    </div>
                                </div>
                                <div className='flex py-5 mt-5  rounded-sm border-b-[2px] border-opacity-25 border-slate-600'>
                                    <img className='h-14 w-14  rounded-full object-cover mx-1' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-sm  gil-bold opacity-80'>Launching our Product <br /> From Idea to market Success</h1>
                                        <p className='opacity-75 mt-5 '>Learn the essential steps to to success</p>
                                    </div>
                                </div>
                                <div className='flex py-5 mt-5  rounded-sm border-b-[2px] border-opacity-25 border-slate-600'>
                                    <img className='h-14 w-14  rounded-full object-cover mx-1' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-sm  gil-bold opacity-80'>Launching our Product <br /> From Idea to market Success</h1>
                                        <p className='opacity-75 mt-5 '>Learn the essential steps to to success</p>
                                    </div>
                                </div>
                                <div className='flex py-5 mt-5  rounded-sm border-b-[2px] border-opacity-25 border-slate-600'>
                                    <img className='h-14 w-14  rounded-full object-cover mx-1' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-sm  gil-bold opacity-80'>Launching our Product <br /> From Idea to market Success</h1>
                                        <p className='opacity-75 mt-5 '>Learn the essential steps to to success</p>
                                    </div>
                                </div>
                                <div className='flex py-5 mt-5  rounded-sm border-b-[2px] border-opacity-25 border-slate-600'>
                                    <img className='h-14 w-14  rounded-full object-cover mx-1' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                    <div className='ml-5'>
                                        <h1 className='text-sm  gil-bold opacity-80'>Launching our Product <br /> From Idea to market Success</h1>
                                        <p className='opacity-75 mt-5 '>Learn the essential steps to to success</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <FooterBar />
        </div>
    )
}
