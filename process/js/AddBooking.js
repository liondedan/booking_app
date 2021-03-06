var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var AddBooking = createReactClass({
	_handleSubmit: function (e) {
		var tempBooking = {
			pitch: this.refs.inputPitch.value,
			firstName: this.refs.inputFirstName.value,
			email: this.refs.inputEmail.value,
			arrivalDate: this.refs.inputDate.value,
			depatureDate: this.refs.inputDate.value,
		}
		this.props.addBooking(tempBooking);
		e.preventDefault();
	}, 

	_handleDisplay: function () {
		this.props.addDisplay();
	},

	render: function (){
		if (this.props.addFormVisibility) {
			formVisibility = {"display": "block"};  
		} else {
			formVisibility = {"display": "none"};
		}

	  return (
	  	<div>
	  		{!this.props.addFormVisibility ? <button onClick={this._handleDisplay} className="btn btn-success">Add Booking</button>: null}	  	
		    <form style={formVisibility} onSubmit={this._handleSubmit}>
	    		<h4>Add Booking</h4>
		    	<div className="form-group row">
		    	  <label className="col-2 col-form-label">Pitch</label>
		    	  <div className="col-10">
		    	    <input className="form-control" ref="inputPitch" type="number" id="example-number-input"/>
		    	  </div>
		    	</div>
		      <div className="form-group row">
		        <label  className="col-2 col-form-label">First Name</label>
		        <div className="col-10">
		          <input className="form-control" ref="inputFirstName" type="text" id="example-text-input"/>
		        </div>
		      </div>
		      <div className="form-group row">
		        <label className="col-2 col-form-label">Email</label>
		        <div className="col-10">
		          <input className="form-control" ref="inputEmail" type="email" id="example-email-input"/>
		        </div>
		      </div>
		      <div className="form-group row">
		        <label className="col-2 col-form-label">Arrival Date</label>
		        <div className="col-10">
		          <input className="form-control" ref="arrivalDate" type="date" id="example-date-input"/>
		        </div>
		      </div><div className="form-group row">
		        <label className="col-2 col-form-label">Depature Date</label>
		        <div className="col-10">
		          <input className="form-control" ref="depatureDate" type="date" id="example-date-input"/>
		        </div>
		      </div>
		      <button onClick={this._handleDisplay} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		      <button type="submit" className="btn btn-primary" onClick={this._handleSubmit}>Save changes</button>
		  	</form>
		  </div>
	  )
	},
});
      
module.exports = AddBooking;        