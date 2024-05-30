import FooterBar from '@/components/footer'
import { Navbarr } from '@/components/landing_slide'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='bg-white text-black'>
            <Navbarr noScrollEffect={true} career={true} />
            <div className='h-[100vh] bg-white flex justify-center flex-col items-center'>
                <h1 className='text-black text-center md:text-5xl lg:text-5xl text-2xl gil-bold opacity-75'>Help us build technology for  <br /> the next era of insuration</h1>
                <p className='md:text-lg lg:text-lg text-[10px] text-center mt-5 gil-bold opacity-60'>We'r looking for execptional talent  to join us in creating <br /> technology  that propels the insurance industry forward </p>
            </div>
            <div className='bg-[#ebeaea] px-16 py-16'>
                <div className='flex gap-20'>
                    <h1 className='text-4xl gil-bold opacity-80 px-5 w-[75vw] '>Our Mission is clear: Leveragethe best  of today's technology  to revolutionise how insures  and broke operate tomorrow.</h1>
                    <p className='text-lg opacity-75 gil-med px-5 w-[80vw]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime iusto expedita veniam nemo. Laudantium nam, odit corrupti deserunt maxime quaerat, rem magnam mollitia quia dolores, facilis voluptatum. Illum, repellat ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, facilis!</p>
                </div>
                <div className='flex md:flex-wrap lg:flex-wrap flex-wrap gap-10 w-fit mx-auto '>
                    <Link href="/blog/blogs">
                        <img className='h-[50vh] rounded-3xl mt-10' src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        {/* <p className='ml-2 g'>Blog 1</p> */}
                    </Link>
                    <Link href="/blog/blogs">
                        <img className='h-[50vh] rounded-3xl mt-10' src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                     </Link>
                    <Link href="/blog/blogs">
                        <img className='h-[50vh] rounded-3xl mt-10' src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> 
                    </Link>
                    <Link href="/blog/blogs">
                        <img className='h-[50vh] rounded-3xl mt-10' src="https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Link>
                </div>
            </div>
            <FooterBar />
        </div>
    )
}
