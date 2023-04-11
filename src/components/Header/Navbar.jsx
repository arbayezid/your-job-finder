import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div onClick={() => setOpen(!open)} className='lg:hidden bg-gray-100'>
                <span>{open === true ? <XMarkIcon className="h-6 w-6 text-blue-500" /> : <Bars3Icon className="h-6 w-6 text-blue-500" />}</span>
            </div>
            <nav className={`lg:flex  justify-around py-10 mx-auto lg:max-w-screen-xl items-center bg-gray-100 absolute lg:static ${open ? 'top-6' : '-left-56'}`}>
                <div>
                    <h2 className='text-2xl font-bold'>CareerHub</h2>
                </div>
                <div className='lg:flex gap-10'>
                    <Link to='/'>Home</Link><br></br>
                    <Link to='/statistics'><span className='text-purple-600 font-semibold'>Statistics</span></Link><br></br>
                    <Link to='/applied-jobs'><span className='text-gray-500'>Applied Jobs</span></Link><br></br>
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