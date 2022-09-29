import React, { useEffect, useState } from 'react';
import { addToDB, getDataFromDB } from '../../utilities/addDB';
import Sidebar from '../Sidebar/Sidebar';
import Sports from '../Sports/Sports';

const Body = () => {
    const [sports, setSports] = useState([]);
    const [listItems, setListItems] = useState([]);

    // loaded data from data.json file and set them on sports array using setSports()
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSports(data));
    }, []);

    // added sport in sports array and saved total exercise time to local storage
    const addToList = (sport) => {
        const newList = [...listItems, sport];
        setListItems(newList);
        let totalTime = getDataFromDB('exercise-time');
        totalTime += sport.time;
        addToDB('exercise-time', totalTime);
    }

    // retrieved exercise time from local storage and set the data on UI
    useEffect(() => {
        let exerciseTime = getDataFromDB('exercise-time');
        if (exerciseTime) {
            exerciseTime = [exerciseTime]
            setListItems(exerciseTime);
        }
    }, []);

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-lg-9 col-md-7 col-12">
                    <Sports
                        sports={sports}
                        handleAddToList={addToList}></Sports>
                </div>
                <div className="col-lg-3 col-md-5 col-12 bg-light">
                    <Sidebar
                        listItems={listItems}></Sidebar>
                </div>
            </div>
        </div>
    );
};

export default Body;