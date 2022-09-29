import React from 'react';

const ExerciseDetails = ({ listItems, breakTime }) => {

    // counted total exercise time and set the final value on totalTime variable
    let totalTime = 0;
    for (const item of listItems) {
        item.time ? totalTime += item.time : totalTime = item;
    }

    return (
        <div className='shadow-lg p-4 pe-3'>
            <h4>Exercise Details</h4>
            <div className='mt-4'>
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