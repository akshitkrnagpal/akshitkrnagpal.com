import React from 'react';
import Img from 'gatsby-image';

const ProfileImage = ({ profileImage, name: { firstname, lastname } }) => (
    <div id='profile-image' className='row'>
        <Img
            className='profile-image'
            fixed={profileImage}
            alt={`${firstname} ${lastname}`}
        />
    </div>
);

export default ProfileImage;
