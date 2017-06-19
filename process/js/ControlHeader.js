var React = require('react');
var createReactClass = require('create-react-class');

var ControlHeader = createReactClass({
  handleDateChange : function (e) {
    this.props.changeDay("2016-06-24 08:30");
  },

  render: function() {
    return (
		<div>
	      <h1>{this.props.title}</h1>
	      <button onClick={this.handleDateChange}>Change Date</button>
	 	</div>
    )
  }
}) 

module.exports = ControlHeader;   