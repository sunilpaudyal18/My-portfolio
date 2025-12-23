import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='max-w-[1600px] mx-auto p-4 lg:px-[10px] min-h-screen'>

                <div className='flex flex-col justify-center items-center gap-20 mt-20 w-full'>

                    <h1 className='font-bold text-7xl lg:text-9xl text-red-500'>4{"</>"}4</h1>

                    <div className='font-normal text-lg md:text-4xl lg:text-5xl'>
                        <span className='text-sky-400'>Error404</span>
                        <span>(){"{"}</span>
                        <br />

                        <span className='text-red-500'>&nbsp;&nbsp; message</span>
                        = "<span className='text-[#00df72]'>Page Not Found !</span>";
                        <br />
                        <span>{"}"};</span>

                        <br />
                        <br />

                        <p className='font-normal text-lg md:text-4xl lg:text-5xl'><Link className='text-[#00df72] hover:border-b-2 hover:border-[#333333] cursor-pointer' to="/">VisitHomePage<span className='text-[#333333]'>();</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;