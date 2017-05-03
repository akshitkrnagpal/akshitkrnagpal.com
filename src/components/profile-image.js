import React from 'react';
import './profile-image.css';

class ProfileImage extends React.Component {
	render() {
		return (
			<div id="profile-image" className="row">
                <img src={this.props.profileImage} alt={this.props.name.firstname+' '+this.props.name.lastname} />
            </div>
		);
	}
}

module.exports = ProfileImage;