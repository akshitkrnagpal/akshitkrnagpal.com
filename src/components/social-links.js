import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SocialIcon } from '../styled';

const SocialLink = ({ link, icon, label }) => (
    <SocialIcon
        aria-label={label}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
    >
        <FontAwesomeIcon icon={['fab', icon]} size='2x' />
    </SocialIcon>
);

const SocialLinks = ({ social }) => (
    <div className='row'>
        {Object.keys(social).map(website => (
            <SocialLink
                key={website}
                link={social[website]}
                label={website}
                icon={website}
            />
        ))}
    </div>
);

export default SocialLinks;
