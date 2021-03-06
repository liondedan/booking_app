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

  handleAddDisplay : function () {
    this.props.addDisplay();
  },

  render: function() {

    var todayPretty = this.props.prettyDate(this.props.dayQuery);
    return (
		<div>
        <div className="row">
          <div className="col-12">
            <h5 className="pull-left">{todayPretty}</h5>
            <button onClick={this.handleAddDisplay} className="btn btn-sm pull-right btn-success"><i className="fa fa-plus pr-1" aria-hidden="true"></i>Add Booking</button>
          </div>
	      </div>
        <div className="form-group row">
          <div className="col-4">        
            <div className="btn-group" role="group" aria-label="Basic example">
              <button className="btn btn-secondary btn-sm" onClick={()=>this.handleDateChange(-1)}>
                <i className="fa fa-backward" aria-hidden="true"></i>
              </button>
              <button className="btn btn-primary btn-sm" onClick={()=>this.props.changeDay(this.props.today)}>
                <i className="fa fa-circle" aria-hidden="true"></i>
              </button>
              <button className="btn btn-secondary btn-sm" onClick={()=>this.handleDateChange(1)}>
                <i className="fa fa-forward" aria-hidden="true"></i>
              </button>
            </div>
          </div>
	    	  <div className="col-8">
			 			<input className="form-control form-control-sm global_date_picker pull-right" value={this.props.dayQuery} id="datePicker" type="date" name="datePicker" onChange={this.handleDatePicker}  />
			 		</div>
			 	</div>
	 	</div>
    )
  }
}) 

module.exports = ControlHeader;     