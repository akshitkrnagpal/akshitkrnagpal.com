import React from 'react';

const Email = ({ email }) => (
    <div id='email' className='row'>
        <h4>
            <a href={`mailto:${email}`} className='grey'>
                {email}
            </a>
        </h4>
    </div>
);

export default Email;
