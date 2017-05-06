import React from 'react';
import './social-links.css';

class SocialLink extends React.Component {
	render() {
		return (
			<li>
		        <a href={this.props.link} target="_blank">
		        	<div className="img-container">
		                <img src={this.props.icon} alt={this.props.alt}/>
		            </div>
		        </a>
		    </li>
		);

	}
}

class SocialLinks extends React.Component {
	render() {
		var socialLinksHtml = [];
		var i = 0; 
		this.props.socialLinks.forEach( function(socialLink) {
			socialLinksHtml.push(<SocialLink key={i++} link={socialLink.link} icon={socialLink.icon} alt={socialLink.alt} />)
        })
		return (
			<div id="social-links" className="row">
                <ul>
                	{socialLinksHtml}
                </ul>
            </div>
		);
	}
}

module.exports = SocialLinks;