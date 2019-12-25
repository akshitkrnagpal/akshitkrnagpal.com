import React from 'react';
import './social-links.css';

const SocialLink = ({ link, icon, alt }) => (
    <li>
        <a href={link} target='_blank'>
            <div className='img-container'>
                <img src={icon} alt={alt} />
            </div>
        </a>
    </li>
);

const SocialLinks = ({ socialLinks }) => (
    <div id='social-links' className='row'>
        <ul>
            {socialLinks.map(socialLink => (
                <SocialLink key={socialLink.link} {...socialLink} />
            ))}
        </ul>
    </div>
);

export default SocialLinks;
