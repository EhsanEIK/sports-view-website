import React from 'react';
import './MyDetails.css';
import profileImage from '../../images/profile-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const MyDetails = () => {
    return (
        <div className='shadow-lg p-4 pe-3 mb-5'>
            <div className='d-flex justify-content-center mb-2'>
                <img className='w-25' src={profileImage} alt={profileImage} />
            </div>
            <div className='text-center'>
                <p className='fs-5 fw-semibold mb-1'>Md. Ehsanul Islam Khan</p>
                <p className='mt-0'>
                    <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                    Chattogram, Bangladesh</p>
            </div>
            <div className='my-info mt-4'>
                <p>B.Sc (Engr.) in CSE</p>
                <p>Jr. Web Developer (Trainee)</p>
                <p>Age: 24</p>
            </div>
        </div>
    );
};

export default MyDetails;