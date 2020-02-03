import React from 'react';

const FullName = ({ name: { firstname, lastname } }) => (
    <div className='row'>
        <h1>
            <span>{firstname} </span>
            <span className='grey'>{lastname}</span>
        </h1>
    </div>
);

export default FullName;
