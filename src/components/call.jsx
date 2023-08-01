import React from 'react';
import './call.css';
import { AiOutlineSchedule } from 'react-icons/ai';

export default function Call() {

    return (
        <div className="w-[80vw] bg-white mx-[auto] schedule h-[50%] " style={{ marginTop: '-140px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px', borderRadius: '10px' }}>
            <div className='flex flex-row w-[100%] justify-around s1 text-black mx-[auto] my-[auto]'>
                <div className='flex flex-col s2 my-[40px]'>
                    <h1 className='text-4xl'><b>Schedule A Meet</b></h1>
                    <p className='text-xl opacity-60'>Start your Project With Spotmies</p>
                </div>
                <div className='s3 flex flex-col  my-[40px]'>
                    <a className='text-white bg-black w-[200px] h-[50px] px-4 py-2 rounded-xl' href="https://calendly.com/sekhar_javvadi/30min" target="_blank">Schedule a Call</a>
                </div>
            </div>
        </div>
    );
}
