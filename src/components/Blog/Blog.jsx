import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 max-w-screen-lg mx-auto'>
            <div >
                <h2 className='text-xl font-bold my-3'>1. When should you use context API?</h2>
                <p>Context API is used when we need to send data from parent component to child component and from one component to another component. Normally, if you want to send data, you need to send it in the form of props. As a result, if a distant child needs to send data, it is necessary to send data through each component in a nested form, which makes the website heavy. To solve this problem, Context API is used so that data can be sent from one component to another very easily.No need to send to any component in between</p>
            </div>
            <div>
                <h2 className='text-xl font-bold my-3'>2. What is a custom hook?</h2>
                <p>The Hook is a reusable function. Custom code is used when logic needs to be used in multiple components so that the same code is not repeated over and over again. Custom keeps the component simple. Usually custom starts with the word "Use".</p>
            </div>
            <div>
                <h2 className='text-xl font-bold my-3'>3. What is useRef?</h2>
                <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            <div>
                <h2 className='text-xl font-bold my-3'>4. What is useMemo?</h2>
                <p>The React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies updates. This can improve performance. The useMemo Hook can be used to keep expensive, resource-intensive functions from needlessly running.</p>
            </div>
        </div>
    );
};

export default Blog;