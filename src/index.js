import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProfileCard from './components/profile-card.js';

var profile = {
	profileImage : 'images/profile-image.png',
	name : {
		firstname : 'Akshit',
		lastname  : 'Kr Nagpal'
	},
	titles : [
		'Programmer',
		'Coder',
		'Developer'
	],
	socialLinks : [
		{
			link : 'https://www.facebook.com/akshitkrnagpal' ,
			icon : 'images/social-icons/facebook.png',
			alt  : 'facebook'
		},
		{
			link : 'https://github.com/AkshitKrNagpal' ,
			icon : 'images/social-icons/github.png',
			alt  : 'github'
		},
		{
			link : 'https://www.linkedin.com/in/akshit-kr-nagpal-40187110a' ,
			icon : 'images/social-icons/linkedin.png',
			alt  : 'linkedin'
		}
	],
	scholastic : {
		title : 'Research Scholar',
		place : 'Cluster Innovation Centre',
		link  : 'https://ducic.ac.in/'
	},
	email : 'akshitkrnagpal@gmail.com',
	resumeLink : 'resume.pdf'

}

ReactDOM.render(
  <ProfileCard profile={profile} />,
  document.getElementById('container')
);