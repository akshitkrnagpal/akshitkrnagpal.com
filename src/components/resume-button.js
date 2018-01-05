import React from 'react';
import './resume-button.css';

export default class ResumeButton extends React.Component {
	render() {
		return (
			<div id="resume-link" className="row">
                <span className="btn"><a className="grey no-decor" href={this.props.resumeLink}>See Resume</a></span>
            </div>

		);
	}
}