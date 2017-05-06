import React from 'react';
import './title.css';

class Title extends React.Component {
	render() {
		var titlesHtml = []
		var titles = this.props.titles
		titlesHtml.push(titles[0])
		for( var i=1 ; i < titles.length ; i++) {
			titlesHtml.push(' ')
			titlesHtml.push(<span key={i} className="grey">&#9679;</span>)
			titlesHtml.push(' ')
			titlesHtml.push(titles[i])
		}
		return (
			<div id="title" className="row">
                <h3>{titlesHtml}</h3>
            </div>
		);
	}
}

module.exports = Title;