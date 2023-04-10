import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav className='lg:flex justify-around py-10 mx-auto lg:max-w-screen-xl items-center bg-gray-100'>
                <div>
                    <h2 className='text-2xl font-bold'>CareerHub</h2>
                </div>
                <div className='lg:flex gap-10'>
                    <Link to='/statistics'><span className='text-purple-600 font-semibold'>Statistics</span></Link>
                    <Link to='/applied-jobs'><span className='text-gray-500'>Applied Jobs</span></Link>
                    <Link to='/blog'><span className='text-gray-500'>Blog</span></Link>
                </div>
                <div>
                    <button className='btn text-white bg-purple-500 py-4 px-6 font-bold rounded'>Start Applying</button>
                </div>
            </nav>

            
        </div>
    );
};

export default Navbar;