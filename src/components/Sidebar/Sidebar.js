import React, { useState } from 'react';
import { addToDB } from '../../utilities/addDB';
import Break from '../Break/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import MyDetails from '../MyDetails/MyDetails';

const Sidebar = ({ listItems }) => {
    const [breakTime, setBreakTime] = useState(0);
    const addToBreak = (time) => {
        setBreakTime(time);
        addToDB('break-time', time);
    }

    return (
        <div className='position-sticky top-0 mt-5 mb-3'>
            <MyDetails></MyDetails>
            <Break handleAddToBreak={addToBreak}></Break>
            <ExerciseDetails
                listItems={listItems}
                breakTime={breakTime}></ExerciseDetails>
        </div>
    );
};

export default Sidebar;