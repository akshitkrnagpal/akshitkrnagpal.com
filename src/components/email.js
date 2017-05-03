import React from 'react';
import './email.css';

class Email extends React.Component {
	render() {
		return (
			<div id="email" className="row">
                <h4><a href={"mailto:" + this.props.email} className="grey">{this.props.email}</a></h4>
            </div>
		);
	}
}

module.exports = Email;