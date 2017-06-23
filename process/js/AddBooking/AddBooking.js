var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var AddBookingForm = require('./AddBookingForm');

var AddBooking = createReactClass({
	_handleSubmit: function (data) {
		this.props.addBooking(data);
		console.log(data);
	}, 

	_handleDisplay: function () {
		this.props.addDisplay();
	}, 

	render: function (){
		if (this.props.addFormVisibility) {
			formVisibility = 
				<AddBookingForm 
					handleSubmit={this._handleSubmit}
					handleDisplay={this._handleDisplay}
				/>;  
		} else {
			formVisibility = null;
		}

	  return (
	  	<div>
	  		{!this.props.addFormVisibility ? <button onClick={this._handleDisplay} className="btn btn-success">Add Booking</button>: null}	  	
		    {formVisibility}
		  </div>
	  )
	},
});
      
module.exports = AddBooking;        