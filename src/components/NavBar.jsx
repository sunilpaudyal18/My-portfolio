import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";
const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="sticky top-0 z-1000 bg-gray-500 py-4 border-b border-gray-300">
            <div className='flex flex-row justify-between items-center gap-4 px-2 lg:px-16'>
                <div className='flex items-center justify-center gap-2'>

                    <Link to="/home">
                        <h1 className='text-3xl font-semibold'>Sunil</h1>
                    </Link>
                </div>

                <div className='hidden lg:flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-8'>
                    <NavLink className={`text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] ${location.hash === '#Home' ? "border-b-2 border-[#00df72]" : " "}`} to="/home#Home">Home</NavLink>

                    <NavLink className={`text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] ${location.hash === '#about' ? "border-b-2 border-[#00df72]" : " "}`} to="/home#about">About</NavLink>

                    <NavLink className={`text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] ${location.hash === '#skills' ? "border-b-2 border-[#00df72]" : " "}`} to="/home#skills">Skills</NavLink>

                    <NavLink className={`text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] ${location.hash === '#contacts' ? "border-b-2 border-[#00df72]" : " "}`} to="/home#contacts">Contact</NavLink>
                </div>


                <div className='flex flex-col lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                    {
                        openMenu ? <RiCloseLargeFill className='text-3xl lg:hidden' /> : <HiMenu className='text-3xl lg:hidden' />
                    }

                    <div className={`lg:hidden absolute flex flex-col justify-end duration-800 gap-2 bg-[#fbf7f4] rounded-md p-2 border border-gray-300 ${openMenu ? 'top-14 right-0' : '-top-80 right-0'}`}>
                        <NavLink className="text-xl cursor-pointer" to="/home#hero">
                            <span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#hero' ? "border-b-2 border-[#00df72]" : " "}`}>Home</span>
                        </NavLink>

                        <NavLink className="text-xl cursor-pointer" to="/home#about"><span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#about' ? "border-b-2 border-[#00df72]" : " "} `}>About</span></NavLink>

                        <NavLink className="text-xl cursor-pointer" to="/home#skills">
                            <span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#skills' ? "border-b-2 border-[#00df72]" : " "}`}>Skills</span></NavLink>


                        <NavLink className="text-xl cursor-pointer" to="/home#contacts"><span className={`hover:border-b-2 hover:border-[#00df72] ${location.hash === '#contacts' ? "border-b-2 border-[#00df72]" : " "}`}>Contact</span></NavLink>

                        <a className='bg-[#00df72] px-4 py-1 text-xl rounded-md text-center' href="https://drive.google.com/file/d/1Akn8rnxokdBk3rDEGUZLcF7b0kQy3Rab/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;