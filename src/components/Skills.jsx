import React from 'react';

const Skills = ({ ref }) => {
    return (
        <div className='my-24 px-2 lg:px-16'>

            <h1
                ref={ref}
                id="skills"
                className='scroll-mt-32 text-5xl text-center mb-12 font-bold'
            >
                Skills
            </h1>

            {/* First Row */}
            <div className='mb-6 flex flex-wrap justify-center items-center'>
                <img className='skill-img mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://i.ibb.co/RTYr3R8K/html.png" alt="HTML" />
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://i.ibb.co/zVLbx2vd/css.png" alt="CSS" />
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://i.ibb.co/s9mr5SrN/tailwindcss.png" alt="Tailwind CSS" />
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://i.ibb.co/B5bBssz7/javacsript.png" alt="JavaScript" />
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://i.ibb.co/VYycSH4m/react.png" alt="React" />
            </div>

            {/* Second Row */}
            <div className='mb-6 flex flex-wrap justify-center items-center'>
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://i.ibb.co/mFqQR63X/git.png" alt="Git" />
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
                <img className='skill-img  mx-2 my-2 p-2 w-[64px] md:w-[96px] lg:w-[112px] hover:scale-110 transition duration-300' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
            </div>

        </div>
    );
};

export default Skills;
