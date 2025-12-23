import React from 'react';

const AboutMe = ({ ref }) => {
    return (
        <div className='my-12 px-2 lg:px-16'>
            
            <h1 ref={ref} id="about" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>
                About Me
            </h1>

            <p className='text-xl text-justify'>
                I am a dedicated QA Tester and Frontend Developer with a strong focus on delivering high-quality, reliable, and user-friendly web applications. I combine testing expertise with frontend development skills to ensure applications are both visually appealing and functionally robust.
            </p>
            <br />

            <p className='text-xl text-justify'>
                As a Frontend Developer, I am skilled in HTML, CSS, JavaScript, and React.js, with hands-on experience using Tailwind CSS to build responsive and modern user interfaces. I also have a solid programming foundation in C and C++, which helps me write logical, efficient, and maintainable code.
            </p>
            <br />

            <p className='text-xl text-justify'>
                In my role as a QA Tester, I am experienced in manual testing, test case creation, bug reporting, regression testing, and ensuring software quality across different devices and browsers. I pay close attention to detail, enjoy finding edge cases, and work closely with developers to deliver smooth and error-free user experiences.
            </p>

        </div>
    );
};

export default AboutMe;
