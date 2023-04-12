import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 max-w-screen-2xl mx-auto rounded mt-10'>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-20 lg:gap-5 mt-20  text-white  p-20 '>
            <div className='text-sm text-gray-400'>
                <h2 className='text-white font-bold text-2xl mb-4'>Your Job Finder</h2>
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <p></p>
            </div>
            <div className='text-sm text-gray-400'>
                <h2 className='text-white font-bold text-lg mb-4'>Company</h2>
                <p>About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>
            </div>
            <div className='text-sm text-gray-400'>
                <h2 className='text-white font-bold text-lg mb-4'>Product</h2>
                <p>Prototype</p>
                <p>Plans & Pricing</p>
                <p>Customers</p>
                <p>Integrations</p>
            </div>
            <div className='text-sm text-gray-400'>
                <h2 className='text-white font-bold text-lg mb-4'>Support</h2>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a Partner</p>
                <p>Developers</p>
            </div>
            <div className='text-sm text-gray-400'>
                <h2 className='text-white font-bold text-lg mb-4'>Contact</h2>
                <p>524 Broadway , NYC</p>
                <p>+1 777 - 978 - 5570</p>
            </div>
        </div>
        <div className='max-w-screen-lg mx-auto mb-4'>
        <hr />
        </div>
        <div className='flex justify-between max-w-5xl mx-auto text-gray-400 pb-5'>
            <p>@2023 Your Job Finder. All Rights Reserved</p>
            <p>Powered by Your Job Finder</p>
        </div>
        </div>
    );
};

export default Footer;