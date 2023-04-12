import React from 'react';
import { Link } from 'react-router-dom';
import adrressIcon from '../../assets/Icons/Frame-4.png'


const SingleJob = ({ job }) => {
    const { id, companyLogo, companyName, fullOrPartTime, jobTitle, location, remoteOrOnsite,
        salary } = job;

        
    return (
        <div >
            <div className='border max-w-xl mt-8 p-10 rounded'>
            <img className='w-30 h-10' src={companyLogo} alt="" />
            <h2 className='mt-8 text-xl font-bold text-gray-600'>{jobTitle}</h2>
            <p className='mt-2 text-lg text-gray-500 font-semibold'>{companyName}</p>

            <div className='flex gap-3 mt-4'>
                <p className='border border-purple-400 px-4 py-1 rounded text-purple-500 font-semibold'>{remoteOrOnsite}</p>
                <p className='border border-purple-400 px-4 py-1 rounded text-purple-500 font-semibold'>{fullOrPartTime}</p>
            </div>

            <div className='flex mt-4 text-lg gap-4 items-center text-gray-500'>
                <p className='flex gap-2 h-5 items-center'><img src={adrressIcon} alt="" />{location} </p>
                <p><span className='text-xs px-1 border rounded-full border-gray-600'>$</span> Salaray: {salary}</p>
            </div>
            
            <Link to={`/${id}`}>
            <button  className='btn bg-purple-500 px-4 py-3 text-white font-bold mt-6 rounded'>View Details</button>
            </Link>
            </div>

        </div>
    );
};

export default SingleJob;