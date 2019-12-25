import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProfileCard from './components/profile-card.js';

import profile from './profile.json';

ReactDOM.render(
    <ProfileCard profile={profile} />,
    document.getElementById('container'),
);
