import React from 'react';

const Break = ({ handleAddToBreak }) => {
    return (
        <div className='shadow-lg p-4 pe-2 mb-5'>
            <h4 className='mb-4'>Add a Break</h4>
            <div className='d-flex justify-content-center gap-3'>
                <button onClick={() => handleAddToBreak('10')} className='bg-secondary text-white border-0 rounded-circle pe-auto p-1'>10<span>s</span></button>
                <button onClick={() => handleAddToBreak('20')} className='bg-secondary text-white border-0 rounded-circle pe-auto p-1'>20<span>s</span></button>
                <button onClick={() => handleAddToBreak('30')} className='bg-secondary text-white border-0 rounded-circle pe-auto p-1'>30<span>s</span></button>
                <button onClick={() => handleAddToBreak('40')} className='bg-secondary text-white border-0 rounded-circle pe-auto p-1'>40<span>s</span></button>
                <button onClick={() => handleAddToBreak('50')} className='bg-secondary text-white border-0 rounded-circle pe-auto p-1'>50<span>s</span></button>
            </div>
        </div>
    );
};

export default Break;