/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'ListContainer',

	render: function(){
		return this.transferPropsTo(
			<ul className='topcoat-list__container'>
			{this.props.children}
			</ul>
		);
	}

});