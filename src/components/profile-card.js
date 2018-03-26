import React from 'react';

import ProfileImage from './profile-image.js';
import FullName from './full-name.js';
import Title from './title.js';
import Scholastic from './scholastic.js';
import Email from './email.js';
import SocialLinks from './social-links.js';
import ResumeButton from './resume-button.js';

import './profile-card.css';

export default class ProfileCard extends React.Component {
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