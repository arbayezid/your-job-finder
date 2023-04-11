import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import salaryIcon from '../../assets/Icons/Frame.png'
import titleIcon from '../../assets/Icons/Frame-1.png'
import phoneIcon from '../../assets/Icons/Frame-2.png'
import emailIcon from '../../assets/Icons/Frame-3.png'
import adrressIcon from '../../assets/Icons/Frame-4.png'
import { addToDB } from '../../utilities/FakeDB';


const JobDetails = () => {
    const [details, setDetails] = useState({})

    const dynamic = useParams();
    const dynamicId = dynamic.id;

    const data = useLoaderData();

    useEffect(() => {
        if (data) {
            const detailsData = data.find(dt => dt.id == dynamicId);
            setDetails(detailsData)
        }
    }, [])

// Apply Job
    const handleApplyJob = id =>{
        addToDB(id);
    }


    const { salary, jobDescription, jobResponsibility, educationalRequirement, experiences, jobTitle, phone, email, address, id } = details;
    return (
        <div className='flex max-w-screen-lg mx-auto mt-20 gap-10'>
            <div className='max-w-screen-sm'>
                <p className='text-lg text-gray-500 leading-8'><span className='text-black font-bold'>Job Description:</span> {jobDescription}</p>
                <p className='text-lg text-gray-500 leading-8 mt-6'><span className='text-black font-bold'>Job Responsibility:</span> {jobResponsibility}</p>
                <p className='text-lg text-gray-500 leading-8 mt-6'><span className='text-black font-bold'>Educational Requirement</span>: <br />{educationalRequirement}</p>
                <p className='text-lg text-gray-500 leading-8 mt-6'><span className='text-black font-bold'>Experiences:</span><br /> {experiences}</p>
            </div>

            <div className='w-xl'>
                <div className='bg-purple-50 p-7 rounded'>
                    <div>
                        <h2 className='text-lg font-bold mb-5'>Job Details</h2>
                        <div className='text-gray-400'><hr /></div>

                        <div className='flex items-center gap-2'>
                            <img className='h-6 w-6' src={salaryIcon} alt="" />
                        <p className='text-sm text-gray-500 my-2'><span className='text-gray-700 text-lg font-bold'>Salary</span> : {salary} (Per Month)</p>
                        </div>

                        <div className='flex items-center gap-2'>
                        <img className='h-6 w-6' src={titleIcon} alt="" />
                        <p className='text-lg text-gray-500 my-2'><span className='text-gray-700 text-lg font-bold'>Job Title</span> : {jobTitle}</p>
                        </div>

                    </div>

                    <div>
                        <h2 className='text-lg font-bold my-3'>Contact Information</h2>
                        <hr />
                        
                        <div className='flex items-center gap-2'>
                        <img className='h-6 w-6' src={phoneIcon} alt="" />
                        <p className='text-sm text-gray-500 my-2'><span className='text-gray-700 text-lg font-bold'>Phone</span> : {phone}</p>
                        </div>

                        <div className='flex items-center gap-2'>
                        <img className='h-6 w-6' src={emailIcon} alt="" />
                        <p className='text-sm text-gray-500 my-2'><span className='text-gray-700 text-lg font-bold'>Email</span> : {email}</p>
                        </div>

                        <div className='flex items-center gap-2'>
                        <img className='h-6 w-6' src={adrressIcon} alt="" />
                        <p className='text-sm text-gray-500 my-2'><span className='text-gray-700 text-lg font-bold'>Address</span> : {address}</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleApplyJob(id)} className='btn bg-purple-500 py-3 text-white font-bold w-full mt-4 rounded'>Apply Now</button>
            </div>


        </div>
    );
};

export default JobDetails;