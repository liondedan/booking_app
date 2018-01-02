var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

var AddBooking = createReactClass({
	getInitialState: function() {
	  return {
		  pitch: this.props.addPitch,
			firstName: null,
			email: null,
			arrivalDate: this.props.dayQuery,
			departureDate: this.props.dayQuery
	  }
	}, 

	componentDidMount: function () {
      $(ReactDOM.findDOMNode(this)).modal('show');
      $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.addDisplay);
   },

	_getRefs: function (e) {

		var tempBooking = {
			pitch: this.state.pitch,
			firstName: this.state.firstName,
			email: this.state.email,
			arrivalDate: this.state.arrivalDate,
			departureDate: this.state.departureDate,
		}

		/* Fix It */
		let formError = false;
		for (var key in tempBooking) {
	    if(tempBooking[key] == null) {
				console.log([key] + " is null")
				formError = true;
			}
		}

		if (formError) {
			console.log("form error is true");
			e.preventDefault();
		} else {
			this.props.addBooking(tempBooking);
			e.preventDefault();
			$(ReactDOM.findDOMNode(this)).modal('hide');
		}
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
			<div className="modal" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div className="modal-dialog" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Add Booking</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body">
	        		<form id="add-booking-form">
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
	                  <input defaultValue={this.props.dayQuery} onChange={this._handleInputChange} className="form-control" ref="departureDate" name="departureDate" type="date"/>
	                </div>
	              </div>
	          	</form>
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary" onClick={this._getRefs} >Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
})
 
module.exports = AddBooking;    