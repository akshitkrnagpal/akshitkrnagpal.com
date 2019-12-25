import React from 'react';
import './profile-image.css';

const ProfileImage = ({ profileImage, name: { firstname, lastname } }) => (
    <div id='profile-image' className='row'>
        <img src={profileImage} alt={`${firstname} ${lastname}`} />
    </div>
);

export default ProfileImage;
