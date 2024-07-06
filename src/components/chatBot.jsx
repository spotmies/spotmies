"use client";
import React, { useState, useEffect } from 'react';
import { FaRegCommentDots, FaTimes } from 'react-icons/fa';
import { BounceLoader } from 'react-spinners';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage chatbot visibility
    const [isLoading, setIsLoading] = useState(false); // State to manage loading

    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <div>
            {/* Placeholder for chat icon */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1001, color: 'white', padding: '10px', borderRadius: '50%', border: 'none', cursor: 'pointer' }}
                    className='bg-secundary'
                >
                    <FaRegCommentDots className='md:text-2xl' />
                </button>
            )}

            {/* Chatbot loader or iframe */}
            {isOpen && (
                <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }} className='w-[90%] md:w-[20%] h-[65%] md:h-[65%]'>
                    {isLoading && (
                        <div className='absolute left-[40%] top-[40%]'>
                            <BounceLoader color='#36d7b7' />
                        </div>
                    )}
                        <iframe
                            src="https://oscar1.vercel.app/bot/668797a02f12dfd9098e8baf"
                            className='w-full h-full'
                            style={{ border: 'none', borderRadius: '15px' }}
                            allow="microphone;"
                            title="Chatbot"
                        ></iframe>

                    {/* Close button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{ position: 'absolute', padding: '2px', top: '20px', right: '10px', cursor: 'pointer', border: '1px solid white', borderRadius: '50%' }}
                    >
                        <FaTimes />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatBot;
