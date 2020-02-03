import React from 'react';

import { ExternalLink } from '../styled';

const Email = ({ email }) => (
    <div id='email' className='row'>
        <ExternalLink
            aria-label={email}
            href={`mailto:${email}`}
            target='_blank'
            rel='noopener noreferrer'
        >
            {email}
        </ExternalLink>
    </div>
);

export default Email;
