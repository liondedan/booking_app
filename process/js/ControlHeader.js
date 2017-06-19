var React = require('react');
var createReactClass = require('create-react-class');

var ControlHeader = createReactClass({
  handleDateChange : function (val) {
  	var dayQuery = (this.props.dayQuery);
  	var addDays = moment(dayQuery).add(1, 'days');
  	var parseAddition = moment(addDays).format("YYYY-MM-DD");
  	console.log(parseAddition);
  	this.props.changeDay(parseAddition);
  },

  render: function() {
    return (
		<div>
	      <h2>{this.props.title}</h2>
	      <h5>Today: {this.props.dayQuery}</h5>
	      <button onClick={this.handleDateChange}>Change Date</button>
	 	</div>
    )
  }
}) 

module.exports = ControlHeader;     