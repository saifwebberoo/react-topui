/** @jsx React.DOM */
var React = require('react/addons');
module.exports = React.createClass({
	
	displayName: 'List',

	render: function(){
		return this.transferPropsTo(
			React.DOM.div( {className:"topcoat-list"}, 
			this.props.children
			)
		);
	}

});