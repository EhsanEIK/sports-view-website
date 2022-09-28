import React from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import MyDetails from '../MyDetails/MyDetails';

const Sidebar = ({ listItems }) => {
    return (
        <div className='position-sticky top-0'>
            <h1>cart</h1>
            <MyDetails></MyDetails>
            <ExerciseDetails listItems={listItems}></ExerciseDetails>
        </div>
    );
};

export default Sidebar;