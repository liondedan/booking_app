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
	      <h5>Today: {this.props.dayQuery}</h5>
	      
	      <div className="form-group row">
	    	  <div className="col-12 col-sm-5 col-md-4 col-lg-3">
			 			<input className="form-control" value={this.props.dayQuery} id="datePicker" type="date" name="datePicker" onChange={this.handleDatePicker}  />
			 		</div>
          <div className="col-12 col-sm-7 col-md-8 col-lg-6">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button className="btn btn-secondary" onClick={()=>this.handleDateChange(-1)}>Previous Day</button>
              <button className="btn btn-primary" onClick={()=>this.props.changeDay(this.props.today)}>Today</button>
              <button className="btn btn-secondary" onClick={()=>this.handleDateChange(1)}>Next Day</button>
            </div>
          </div>
			 	</div>
	 	</div>
    )
  }
}) 

module.exports = ControlHeader;     