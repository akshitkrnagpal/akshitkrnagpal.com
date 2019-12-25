import React from 'react';

const FullName = ({ name: { firstname, lastname } }) => (
    <div id='full-name' className='row'>
        <h1>
            <span>{firstname} </span>
            <span className='grey'>{lastname}</span>
        </h1>
    </div>
);

export default FullName;
