import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const AssignmentMarkChart = () => {
    const assignmentMark = [
        {
            name: 'Assignment-1',
            assignmentMarks: 60
        },
        {
            name: 'Assignment-2',
            assignmentMarks: 60
        },
        {
            name: 'Assignment-3',
            assignmentMarks: 60
        },
        {
            name: 'Assignment-4',
            assignmentMarks: 59
        },
        {
            name: 'Assignment-5',
            assignmentMarks: 58
        },
        {
            name: 'Assignment-6',
            assignmentMarks: 24
        },
        {
            name: 'Assignment-7',
            assignmentMarks: 60
        },
        {
            name: 'Assignment-8',
            assignmentMarks: 60
        },
    ]

    return (
        <div className='max-w-screen-xl mx-auto mt-10'>
            <h2 className='text-3xl font-bold text-center mb-10 underline'>Assignment Marks</h2>
            <AreaChart width={1100} height={300} data={assignmentMark}>
                <Area dataKey="assignmentMarks" ></Area>

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                
            </AreaChart>

        </div>
    );
};

export default AssignmentMarkChart;