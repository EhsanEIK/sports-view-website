import React from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';

const Sidebar = ({ listItems }) => {
    return (
        <div className='position-sticky top-0'>
            <h1>cart</h1>
            <ExerciseDetails
                listItems={listItems}></ExerciseDetails>
        </div>
    );
};

export default Sidebar;