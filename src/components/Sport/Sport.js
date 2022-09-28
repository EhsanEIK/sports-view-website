import React from 'react';

const Sport = ({ sport }) => {
    const { name, image, time, totalPlayer } = sport
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top h-100" alt={image} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        <span><b>Play Time:</b> {time} minutes</span>
                        <br />
                        <span><b>Players:</b> {totalPlayer} player on each side</span>
                    </p>
                </div>
                <div className="card-footer p-0">
                    <button className='btn btn-warning rounded-0 w-100'>
                        <p className='fs-6 fw-semibold mb-0'>Add to List</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sport;