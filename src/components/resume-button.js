import React from 'react';

const ResumeButton = ({ resumeLink }) => (
    <div id='resume-link' className='row'>
        <span className='btn'>
            <a className='grey no-decor' href={resumeLink}>
                See Resume
            </a>
        </span>
    </div>
);

export default ResumeButton;
