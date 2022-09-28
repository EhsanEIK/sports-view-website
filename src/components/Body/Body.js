import React, { useEffect, useState } from 'react';
import Sports from '../Sports/Sports';

const Body = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSports(data));
    }, []);

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-lg-9 col-md-7 col-12">
                    <Sports sports={sports}></Sports>
                </div>
                <div className="col-lg-3 col-md-5 col-12">
                    <h1>cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Body;