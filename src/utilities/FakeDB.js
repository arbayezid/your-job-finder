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
       toast('Already Applied to this job')
    }
    else{
        jobs[id] = 1;
    }

    localStorage.setItem('applied-jobs', JSON.stringify(jobs));
}



// Get Stored Cart
// const getStoredCart = () =>{
//     let shoppingCart = {};

//     const storedCart = localStorage.getItem('shoppingCart');
//     if(storedCart){
//         shoppingCart = JSON.parse(storedCart);
//     }
//     return shoppingCart;

// }

export {addToDB}