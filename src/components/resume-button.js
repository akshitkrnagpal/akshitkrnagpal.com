import React from 'react';

import { Button } from '../styled';

const ResumeButton = ({ resume }) => (
    <div className='row'>
        <Button as='a' href={resume}>
            See Resume
        </Button>
    </div>
);

export default ResumeButton;
