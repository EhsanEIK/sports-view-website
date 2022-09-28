import React from 'react';

const ExerciseDetails = ({ listItems }) => {
    let totalTime = 0;
    for (const item of listItems) {
        totalTime += item.time;
    }
    return (
        <div>
            <h4>Exercise Details</h4>
            <div>
                Exercise Time:
                <span className='text-secondary'>  {totalTime ? totalTime : '00'} minutes</span>
            </div>
        </div>
    );
};

export default ExerciseDetails;