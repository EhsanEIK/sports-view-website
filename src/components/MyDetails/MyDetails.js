import React from 'react';
import './MyDetails.css';
import profileImage from '../../images/profile-img.png';

const MyDetails = () => {
    return (
        <div className='shadow-lg p-4 pe-2 mb-5'>
            <div className='d-flex justify-content-center mb-2'>
                <img className='w-25' src={profileImage} alt={profileImage} />
            </div>
            <p className='fs-5 fw-semibold'>Md. Ehsanul Islam Khan</p>
            <div>
                <p>Chattogram, Bangladesh</p>
            </div>
            <div className='my-info'>
                <p>B.Sc (Engr.) in CSE</p>
                <p>Jr. Web Developer (Trainee)</p>
                <p>Age: 24</p>
            </div>
        </div>
    );
};

export default MyDetails;