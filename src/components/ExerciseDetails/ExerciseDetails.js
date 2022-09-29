import React from 'react';

const ExerciseDetails = ({ listItems, breakTime }) => {
    let totalTime = 0;
    for (const item of listItems) {
        totalTime += item.time;
    }

    return (
        <div className='shadow-lg p-4 pe-3'>
            <h4>Exercise Details</h4>
            <div className='mt-2'>
                Exercise Time:
                <span className='text-secondary'>  {totalTime ? totalTime : '00'} minutes</span>
            </div>
            <div className='mt-2'>
                Break Time:
                <span className='text-secondary'>  {breakTime ? breakTime : '00'} seconds</span>
            </div>
            <button className='btn btn-primary rounded-2 w-100 mt-5'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;