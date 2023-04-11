import React from 'react';
import { getStoredJob } from '../../utilities/FakeDB';
import { useLoaderData } from 'react-router-dom';
import AppliedJobList from '../AppliedJobList/AppliedJobList';

const AppliedJobs = () => {
    const {jobArray} = useLoaderData()

    return (
        <div className='mt-10'>
            <h2 className='text-2xl text-center font-bold'>{jobArray.length? 'Applied Job' : 'Not Applied Yet'}</h2>
            <div className='mt-10'>
                {
                    jobArray.map(jobList => <AppliedJobList key={jobList.id} jobList={jobList}></AppliedJobList>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;