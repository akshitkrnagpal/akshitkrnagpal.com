import React from 'react';

import ProfileImage from './profile-image';
import FullName from './full-name';
import Title from './title';
import Scholastic from './scholastic';
import Email from './email';
import SocialLinks from './social-links';

const ProfileCard = ({
  profile: { profileImage, name, titles, scholastic, email, social },
}) => (
  <div className='profile-card' role='main'>
    <ProfileImage profileImage={profileImage} name={name} />
    <FullName name={name} />
    <Title titles={titles} />
    <Scholastic scholastic={scholastic} />
    <Email email={email} />
    <SocialLinks social={social} />
  </div>
);

export default ProfileCard;
