import React, { useEffect, useState } from 'react';

const Jobcategory = () => {
    const [lists,setLists] = useState([]);

    useEffect(() => {
        fetch('categoryList.json')
        .then(res => res.json())
        .then(data => setLists(data))
    },[])
    return (
        <div className='mt-20'>

            <div className='text-center'>
            <h2 className='text-3xl font-bold'>Job Category List</h2>
            <p className='text-sm text-gray-500 mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='flex justify-center mx-auto gap-5 mt-8'>
            {
                lists.map(list =>
                 <div className='bg-gray-100 py-10 ps-7 pr-20 rounded'>
                    <div className='bg-gray-200 w-16 rounded'>
                    <img className='py-2 px-3' src={list.categoryLogo} alt="" />
                    </div>
                    <p className='font-bold text-xl mt-6 text-gray-700'>{list.categoryName}</p>
                    <p className='text-sm text-gray-400 mt-2'>{list.jobAvailable}</p>
                 </div>)
            }
            </div>
            


        </div>
    );
};

export default Jobcategory;