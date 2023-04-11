import React from 'react';

const AppliedJobs = () => {
    const getAppliedJobsFromDB = localStorage.getItem('applied-jobs');
    console.log(getAppliedJobsFromDB)
    return (
        <div>
            applied job
        </div>
    );
};

export default AppliedJobs;