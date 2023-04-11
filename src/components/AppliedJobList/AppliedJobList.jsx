import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobList = ({ jobList }) => {
    console.log(jobList)
    const { companyLogo, companyName, jobTitle, remoteOrOnsite, fullOrPartTime, location, salary, id } = jobList;
    return (
        <div>
            <div className='flex border max-w-5xl mx-auto items-center gap-10  mt-8 p-5 rounded'>

                <div className='bg-gray-200 h-10  py-20 rounded'>
                    <img className='mx-10 w-20' src={companyLogo} alt="" />
                </div>

                <div className='flex-grow'>
                    <h2 className='mt-5 text-xl font-bold text-gray-600'>{jobTitle}</h2>
                    <p className='mt-1 text-lg text-gray-500 font-semibold'>{companyName}</p>
                    <div className='flex gap-3 mt-4'>
                        <p className='border border-purple-400 px-4 py-1 rounded text-purple-500 font-semibold'>{remoteOrOnsite}</p>
                        <p className='border border-purple-400 px-4 py-1 rounded text-purple-500 font-semibold'>{fullOrPartTime}</p>
                    </div>
                    <div className='flex mt-2 text-lg gap-4 text-gray-500'>
                        <p>{location} </p>
                        <p><span className='text-xs px-1 border rounded-full border-gray-600'>$</span> Salaray: {salary}</p>
                    </div>
                </div>


                <div>
                    <Link to={`/${id}`}>
                    <button className='btn bg-purple-500 px-4 py-3 text-white font-bold mt-6 rounded'>View Details</button>
                   </Link>
            </div>

        </div>
        </div >
    );
};

export default AppliedJobList;