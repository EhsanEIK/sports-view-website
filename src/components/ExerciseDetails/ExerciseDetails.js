import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ExerciseDetails = ({ listItems, breakTime }) => {

    // counted total exercise time and set the final value on totalTime variable
    let totalTime = 0;
    for (const item of listItems) {
        item.time ? totalTime += item.time : totalTime = item;
    }

    // toastify message
    const notify = () => toast.success("Congratzzz! Activity Completed")

    return (
        <div className='shadow-lg p-4 pe-3'>
            <h4>Practice Details</h4>
            <div className='mt-4'>
                Play Time :
                <span className='text-secondary ms-2'> {totalTime ? totalTime : '00'} minutes</span>
            </div>
            <div className='mt-2'>
                Break Time :
                <span className='text-secondary ms-2'> {breakTime ? breakTime : '00'} seconds</span>
            </div>
            <button onClick={notify} className='btn btn-primary rounded-2 w-100 mt-5'>Activity Completed</button>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default ExerciseDetails;