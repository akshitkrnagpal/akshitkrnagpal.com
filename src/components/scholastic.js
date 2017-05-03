import React from 'react';
import './scholastic.css';

class Scholastic extends React.Component {
	render() {
		return (
			<div id="scholastic" className="row">
                <h4>{this.props.scholastic.title} at <a href={this.props.scholastic.link} className="grey">{this.props.scholastic.place}</a></h4>
            </div>
		);
	}
}

module.exports = Scholastic;