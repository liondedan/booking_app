var React = require('react');
var createReactClass = require('create-react-class');

var AddBooking = createReactClass({
	getInitialState: function() {
	  return {
	  pitch: this.props.addPitch,
		firstName: null,
		email: null,
		arrivalDate: this.props.dayQuery,
		departureDate: null,
	  }
	}, 

	_validateDate: function (arrival, depart) {

	},
	
	_getRefs: function (e) {
		var tempBooking = {
			pitch: this.state.pitch,
			firstName: this.state.firstName,
			email: this.state.email,
			arrivalDate: this.state.arrivalDate,
			departureDate: this.state.departureDate,
		}
		this.props.addBooking(tempBooking);
		e.preventDefault();
	}, 

	_handleInputChange: function (event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		var partialState = {};
		partialState[name] = value;
		this.setState(partialState);
	},

  render: function() { 
		return (

			

			
			<form data-validate>
	    	<div className="form-group row">
	    	  <label className="col-2 col-form-label">Pitch</label>
	    	  <div className="col-10">
	    	    <input defaultValue={this.props.addPitch} onChange={this._handleInputChange} className="form-control" name="pitch" ref="inputPitch" type="number"/>
	    	  </div>
	    	</div>
	      <div className="form-group row">
	        <label  className="col-2 col-form-label">First Name</label>
	        <div className="col-10">
	          <input onChange={this._handleInputChange} className="form-control" ref="firstName" name="firstName" type="text"/>
	        </div>
	      </div>
	      <div className="form-group row">
	        <label htmlFor="email" className="col-2 col-form-label">Email</label>
	        <div className="col-10">
	          <input onChange={this._handleInputChange} className="form-control" ref="inputEmail" type="email" id="email"  name="email"/>
	        </div>
	      </div>
	      
	      <div className="form-group row">
	        <label className="col-2 col-form-label">Arrival Date</label>
	        <div className="col-10">
	          <input defaultValue={this.props.dayQuery} onChange={this._handleInputChange} className="form-control" ref="arrivalDate" name="arrivalDate" type="date"/>
	        </div>
	      </div><div className="form-group row">
	        <label className="col-2 col-form-label">Departure Date</label>
	        <div className="col-10"> 
	          <input onChange={this._handleInputChange} className="form-control" ref="departureDate" name="departureDate" type="date"/>
	        </div>
	      </div>
		    <button onClick={this.props.addDisplay} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
		    <button className="btn btn-primary" onClick={this._getRefs}>Save changes</button>
	  	</form>
		)
	}
})
 
module.exports = AddBooking;    