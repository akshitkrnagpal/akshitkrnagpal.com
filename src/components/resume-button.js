import React from 'react';

const ResumeButton = ({ resume }) => (
    <div id='resume-link' className='row'>
        <span className='btn'>
            <a className='grey no-decor' href={resume}>
                See Resume
            </a>
        </span>
    </div>
);

export default ResumeButton;
