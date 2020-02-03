import React from 'react';

import ProfileImage from './profile-image.js';
import FullName from './full-name.js';
import Title from './title.js';
import Scholastic from './scholastic.js';
import Email from './email.js';
import SocialLinks from './social-links.js';
import ResumeButton from './resume-button.js';

const ProfileCard = ({
    profile: { profileImage, name, titles, scholastic, email, social, resume },
}) => (
    <div className='container'>
        <div className='profile-card' role='main'>
            <ProfileImage profileImage={profileImage} name={name} />
            <FullName name={name} />
            <Title titles={titles} />
            <Scholastic scholastic={scholastic} />
            <Email email={email} />
            <SocialLinks social={social} />
            <ResumeButton resume={resume} />
        </div>
    </div>
);

export default ProfileCard;
