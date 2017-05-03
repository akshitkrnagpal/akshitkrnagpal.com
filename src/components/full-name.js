import React from 'react';

class FullName extends React.Component {
	render() {
		return (
			<div id="full-name" className="row">
                <h1>{this.props.name.firstname} <span className="grey">{this.props.name.lastname}</span></h1>
            </div>
		);
	}
}

module.exports = FullName;