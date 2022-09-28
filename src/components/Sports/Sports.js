import React from 'react';
import Sport from '../Sport/Sport';

const Sports = ({ sports, handleAddToList }) => {
    return (
        <>
            <h1>All Sports Details</h1>
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4 mt-3">
                {
                    sports.map(sport => <Sport
                        key={sport.id}
                        sport={sport}
                        handleAddToList={handleAddToList}></Sport>)
                }
            </div>
        </>
    );
};

export default Sports;