import React, { useEffect, useState } from 'react';
import { getStoredJob } from '../../utilities/FakeDB';
import { useLoaderData } from 'react-router-dom';
import AppliedJobList from '../AppliedJobList/AppliedJobList';

const AppliedJobs = () => {
    
    // const [jobs, setJobs] = useState([]);
    // const [dbData,setDbData] = useState(getStoredJob())
    // useEffect(()=>{
        //     const getJobFromDB = getStoredJob();
        
        //     let foundJobs = [];
        //     for(const id in getJobFromDB){
            //         const foundAppliedJobs = jobArray.find(job => job.id == id);
    //         if(foundAppliedJobs){
    //             foundJobs.push(foundAppliedJobs);
    //         }
    //     }
    //     setJobs(foundJobs);
    // },[])
    
    // const handleFilter = (event) => {
        //     if(event.target.value === 'remote'){
            //         const newJobs = jobs.filter(job => job.remoteOrOnsite == event)
            //         jobArray.push[newJobs]
            //     }
            // }
            // console.log(jobArray)
            
            const {jobArray} = useLoaderData()


    return (
        <div className='mt-10 max-w-screen-xl mx-auto'>
            <h2 className='text-2xl text-center font-bold'>{jobArray.length? 'Applied Job' : 'Not Applied Yet'}</h2>
            <div className=' flex gap-2 justify-end mr-20'>
            <button className='border border-purple-400 px-4 py-1 rounded text-purple-500 font-semibold'>Remote</button>
            <button className='border border-purple-400 px-4 py-1 rounded text-purple-500 font-semibold' >On Site</button>
                <select name="" id="" className='bg-gray-100 px-4 py-2'>
                    <option  value="">Filter</option>
                </select>
            </div>
            <div className='mt-10'>
                {
                    jobArray.map(jobList => <AppliedJobList key={jobList.id} jobList={jobList}></AppliedJobList>)
                }
                
            </div>
        </div>
    );
};

export default AppliedJobs;