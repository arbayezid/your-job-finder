// Add to DB
import { toast } from 'react-toastify';
const addToDB = (id) =>{
    let jobs = {};

    const previousAppliedJobs = localStorage.getItem('applied-jobs');
    if(previousAppliedJobs){
        jobs = JSON.parse(previousAppliedJobs)
    }

    const quantity = jobs[id];
    if(quantity){
       toast('You already Applied to this job!!!!!!')
    }
    else{
        jobs[id] = 1;
        toast('Thank you for applying to this job.')
    }

    localStorage.setItem('applied-jobs', JSON.stringify(jobs));
}



// Get Stored Cart
const getStoredJob = () =>{
    let jobs = {};

    const previousAppliedJobs = localStorage.getItem('applied-jobs');
    if(previousAppliedJobs){
        jobs = JSON.parse(previousAppliedJobs)
    }
    return jobs;

}

export {addToDB, getStoredJob}