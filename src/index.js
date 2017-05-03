import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ProfileImage from './components/profile-image.js';
import FullName from './components/full-name.js';
import Title from './components/title.js';
import Scholastic from './components/scholastic.js';
import Email from './components/email.js';
import SocialLinks from './components/social-links.js';
import ResumeButton from './components/resume-button.js';

class ProfileContainer extends React.Component {
	render() {
		var profile = this.props.profile;
		return (
			<div>
				<ProfileImage profileImage={profile.profileImage} name={profile.name} />
				<FullName name={profile.name}/>
				<Title titles={profile.titles} />
				<Scholastic scholastic={profile.scholastic} />
				<Email email={profile.email} />
				<SocialLinks socialLinks={profile.socialLinks} />
				<ResumeButton resumeLink={profile.resumeLink} />
			</div>
		);
	}
}

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
  <ProfileContainer profile={profile} />,
  document.getElementById('container')
);