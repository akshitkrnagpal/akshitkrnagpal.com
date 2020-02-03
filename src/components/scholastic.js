import React from 'react';

import { ExternalLink, Text } from '../styled';

const Scholastic = ({ scholastic: { title, link, place } }) => (
    <div className='row'>
        <Text as='h4' size='sm'>
            {title} at{' '}
            <ExternalLink
                className='grey'
                href={link}
                aria-label={place}
                target='_blank'
                rel='noopener noreferrer'
            >
                {place}
            </ExternalLink>
        </Text>
    </div>
);

export default Scholastic;
