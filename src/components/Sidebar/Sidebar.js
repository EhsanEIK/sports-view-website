import React from 'react';
import Break from '../Break/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import MyDetails from '../MyDetails/MyDetails';

const Sidebar = ({ listItems }) => {
    return (
        <div className='position-sticky top-0'>
            <h1>cart</h1>
            <MyDetails></MyDetails>
            <Break></Break>
            <ExerciseDetails listItems={listItems}></ExerciseDetails>
        </div>
    );
};

export default Sidebar;