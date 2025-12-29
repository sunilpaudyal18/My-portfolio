import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import Profile from '../assets/sunil.png';

const Hero = ({ ref }) => {
    return (
        <div ref={ref} id='hero' className='scroll-mt-36 my-2 lg:my-12 px-2 lg:px-16 py-8'>
            <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center gap-6'>

                {/* Text Section */}
                <div className='flex-1 text-center lg:text-left'>
                    <h1 className='text-5xl lg:text-7xl font-bold mb-4 lg:mb-8'>
                        Sunil Paudyal
                    </h1>

                    <h3 className='text-xl lg:text-3xl font-semibold mb-4 lg:mb-6'>
                        <span className='border-b-2'>QA Tester & Frontend Developer</span>
                    </h3>

                    <p className='text-xl lg:text-2xl mb-6 lg:mb-8'>
                        Detail-oriented QA Tester and Frontend Developer skilled in building responsive user interfaces and ensuring high-quality, bug-free web applications through effective testing and clean frontend development.
                    </p>

                    <div className='flex justify-center lg:justify-start items-center gap-6 my-6'>
                        <a href="https://au.linkedin.com/in/sunil-paudyal18/" target="_blank" rel="noopener noreferrer">
                            <button className='text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300 rounded-full p-3'>
                                <FaLinkedin size={32} />
                            </button>
                        </a>

                        <a href="https://github.com/sunilpaudyal18/" target="_blank" rel="noopener noreferrer">
                            <button className='text-[#333333] hover:bg-[#333333] hover:text-white transition-all duration-300 rounded-full p-3'>
                                <FaGithubSquare size={32} />
                            </button>
                        </a>

                        <a href="https://www.instagram.com/sunil_18_paudyal/" target="_blank" rel="noopener noreferrer">
                            <button className='text-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-all duration-300 rounded-full p-3'>
                                <FaInstagramSquare size={32} />
                            </button>
                        </a>

                        <a href="https://www.facebook.com/sunil.paudyal.12" target="_blank" rel="noopener noreferrer">
                            <button className='text-[#1877f2] hover:bg-[#1877f2] hover:text-white transition-all duration-300 rounded-full p-3'>
                                <FaFacebookSquare size={32} />
                            </button>
                        </a>
                    </div>

                    <button className='bg-[#00df72] px-16 py-4 text-xl text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300'>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className='flex justify-center items-center gap-2'>
                                <SiReaddotcv /> <span>Resume</span>
                            </span>
                        </a>
                    </button>
                </div>

                {/* Profile Image Section */}
                <div className='flex-1 flex justify-center items-center'>
                    <div className='relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 
                                    bg-gradient-to-tr from-[#00df72] to-[#00bfa5] 
                                    shadow-2xl transition-transform transform hover:scale-105'>
                        <img
                            className='w-full h-full rounded-full object-cover border-4 border-white shadow-lg'
                            src={Profile}
                            alt="Sunil Profile"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
