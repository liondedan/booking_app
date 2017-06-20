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
	      <button className="btn btn-primary" onClick={()=>this.props.changeDay(this.props.today)}>Today</button>
	      <button className="btn btn-secondary" onClick={()=>this.handleDateChange(-1)}>Previous Day</button>
	      <button className="btn btn-secondary" onClick={()=>this.handleDateChange(1)}>Next Day</button>
	      <div className="form-group row">
	    	  <div className="col-10">
			 			<input className="form-control" defaultValue={this.props.dayQuery} id="datePicker" type="date" name="datePicker" onClick={this.handleDatePicker}  />
			 		</div>
			 	</div>
	 	</div>
    )
  }
}) 

module.exports = ControlHeader;     