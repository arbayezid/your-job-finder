import { getStoredJob } from "../utilities/FakeDB";

export const getAllJobs = async() =>{
    const jobsData = await fetch('/featureList.json')
    const jobs = await jobsData.json()

    const savedJob = getStoredJob();
    
    let jobArray = []
    for (const id in savedJob){
        const foundJob = jobs.find(job => job.id == id);
        if(foundJob){
            jobArray.push(foundJob)
        }
    }
    return {jobArray}
}