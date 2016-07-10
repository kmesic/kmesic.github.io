var React = require('react'),
	ReactDOM = require('react-dom');

var App = React.createClass({
	render: function() {
		return (
			<div>Kenan Mesic's Personal Site</div>
		);
	}
});

ReactDOM.render(
	<App/>, document.getElementById('app')
);