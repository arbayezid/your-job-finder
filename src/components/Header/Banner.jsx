import React from 'react';
import logo from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div>
            <div className='lg:flex lg:max-w-screen-xl mx-auto items-center bg-gray-100'>
                <div className='max-w-lg ms-32'>
                    <h1 className='text-5xl font-bold leading-tight'>One Step<br/> Closer To Your<br/> <span className='text-purple-500'>Dream Job</span></h1>
                    <p className='mt-6 text-lg text-gray-500'>Explore thousands of job opportunities with all the <br/> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='mt-6 btn text-white bg-purple-500 py-4 px-6 font-bold rounded'>Get Started</button>
                </div>
                <div className='max-w-xl'>
                    <img src={logo} alt="header image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;