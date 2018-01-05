import React from 'react';
import './profile-image.css';

export default class ProfileImage extends React.Component {
	render() {
		return (
			<div id="profile-image" className="row">
                <img src={this.props.profileImage} alt={this.props.name.firstname+' '+this.props.name.lastname} />
            </div>
		);
	}
}