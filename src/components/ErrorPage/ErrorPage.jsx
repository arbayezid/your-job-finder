import React from 'react';
import { Link } from 'react-router-dom';
import errorLogo from '../../assets/Icons/error.png'

const ErrorPage = () => {  
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img src={errorLogo} alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
            <span className='sr-only'>Error</span> 404
          </h2>
          <p className='text-2xl font-semibold md:text-3xl mb-8'>
            Error
          </p>
          <Link
            to='/'
            className='px-8 py-3 font-semibold rounded bg-gray-300 hover:bg-gray-400 text-gray-900'
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ErrorPage;