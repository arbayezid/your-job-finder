import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const FeatureList = () => {
    const [dataSlice, setDataSlice] = useState(false);
    const featuredJobs = useLoaderData();
 
    return (
        <div className='mt-20'>

            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Featured Jobs</h2>
                <p className='text-sm text-gray-500 mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid lg:grid-cols-2 gap-5 mx-auto max-w-screen-lg'>
                {
                    
                 featuredJobs.slice(0, dataSlice ? dataSlice.length : 4).map(job => <SingleJob
                    key={job.id}
                    job={job}
                    ></SingleJob>)
                }
                
            </div>
    <div className='text-center mt-10' onClick={() => setDataSlice(true)}>
    <button className='btn bg-purple-500 px-8 py-2 text-white font-bold rounded '>See All</button>
            </div>
        </div>
    );
};

export default FeatureList;