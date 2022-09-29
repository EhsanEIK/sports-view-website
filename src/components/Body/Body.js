import React, { useEffect, useState } from 'react';
import { addToDB, getDataFromDB } from '../../utilities/addDB';
import Sidebar from '../Sidebar/Sidebar';
import Sports from '../Sports/Sports';

const Body = () => {
    const [sports, setSports] = useState([]);
    const [listItems, setListItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSports(data));
    }, []);

    const addToList = (sport) => {
        // console.log(sport);
        const newList = [...listItems, sport];
        setListItems(newList);
        let totalTime = getDataFromDB('exercise-time');
        totalTime += sport.time;
        addToDB('exercise-time', totalTime);
    }
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