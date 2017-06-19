var React = require('react');
var createReactClass = require('create-react-class');

var ControlHeader = createReactClass({
  handleDateChange : function (val) {
  	var dayQuery = (this.props.dayQuery);
  	var addDays = moment(dayQuery).add(val, 'days');
  	var parseAddition = moment(addDays).format("YYYY-MM-DD");
  	console.log(parseAddition);
  	this.props.changeDay(parseAddition);
  },

  handleDatePicker : function (event) {
  	this.props.changeDay(event.target.value);
  },

  render: function() {
    return (
		<div>
	      <h2>{this.props.title}</h2>
	      <h5>Today: {this.props.dayQuery}</h5>
	      <button className="btn btn-default" onClick={()=>this.props.changeDay(this.props.today)}>Today</button>
	      <button className="btn btn-default" onClick={()=>this.handleDateChange(-1)}>Previous Day</button>
	      <button className="btn btn-default" onClick={()=>this.handleDateChange(1)}>Next Day</button>
	      <input defaultValue={this.props.dayQuery} id="datePicker" type="date" name="datePicker" onClick={this.handleDatePicker} />
	 	</div>
    )
  }
}) 

module.exports = ControlHeader;     