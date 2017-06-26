var React = require('react');
var createReactClass = require('create-react-class');

var ViewBooking = createReactClass({
  getInitialState: function() {
    console.log(this.props);
    return {
      pitch: this.props.booking.pitch,
      email: this.props.booking.email,
      firstName: this.props.booking.firstName,
      arrivalDate: this.props.booking.arrivalDate,
      departureDate: this.props.booking.departureDate,
    }
  }, 

  componentWillReceiveProps: function (newProps) {
    this.setState({
      pitch: newProps.booking.pitch,
      email: newProps.booking.email,
      firstName: newProps.booking.firstName,
      arrivalDate: newProps.booking.arrivalDate,
      departureDate: newProps.booking.departureDate,
    }),

    console.log('previous value', this.props);    //print the previous values
    console.log('new values', newProps);   
  },
 
  _handleInputChange: function(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    var partialState = {};
    partialState[name] = value;
    console.log(partialState);
    this.setState(partialState);
  },

  _handleUpdateClose: function(e) {
    this.props.updateClose();
    e.preventDefault();
  },

  _handleUpdateBooking: function (e) {
    var tempBooking = {
      pitch: this.state.pitch,
      email: this.state.email,
      firstName: this.state.firstName,
      arrivalDate: this.state.arrivalDate,
      departureDate: this.state.departureDate,
    }
    this.props.updateBooking(tempBooking);
    e.preventDefault();
  },

  _handleDelete: function (e) {
    this.props.deleteBooking();
    e.preventDefault();
  },

  render: function() { 
  	if (this.props.viewFormVisibility) {
			formVisibility = {"display": "block"};  
		} else {
			formVisibility = {"display": "none"};
		}



    return (
    	<div>
  	    <form style={formVisibility}>
  	    	<h4>View Booking</h4>
  	    	<div className="form-group row">
  	    	  <label className="col-2 col-form-label">Pitch</label>
  	    	  <div className="col-10">
  	    	    <input value={this.state.pitch} onChange={this._handleInputChange} className="form-control" name="pitch" ref="inputPitch" type="number" id="example-number-input"/>
  	    	  </div>
  	    	</div>
  	      <div className="form-group row">
  	        <label  className="col-2 col-form-label">First Name</label>
  	        <div className="col-10">
  	          <input value={this.state.firstName} onChange={this._handleInputChange} className="form-control" ref="firstName" name="firstName" type="text" id="example-text-input"/>
  	        </div>
  	      </div>
  	      <div className="form-group row">
  	        <label className="col-2 col-form-label">Email</label>
  	        <div className="col-10">
  	          <input value={this.state.email} onChange={this._handleInputChange} className="form-control" ref="inputEmail" type="email"  name="email" id="example-email-input"/>
  	        </div>
  	      </div>
  	      <div className="form-group row">
  	        <label className="col-2 col-form-label">Arrival Date</label>
  	        <div className="col-10">
  	          <input value={this.state.arrivalDate} onChange={this._handleInputChange} className="form-control" ref="arrivalDate" name="arrivalDate" type="date" id="example-date-input"/>
  	        </div>
  	      </div>
          <div className="form-group row">
            <label className="col-2 col-form-label">Departure Date</label>
            <div className="col-10">
              <input value={this.state.departureDate} onChange={this._handleInputChange} className="form-control" ref="departureDate" name="departureDate" type="date" id="example-date-input"/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this._handleUpdateBooking}>Save changes</button>
          <button className="btn btn-danger" onClick={this._handleUpdateClose}>Close</button>
          <button onClick={this._handleDelete} className="btn btn-danger">Delete</button>
  	  	</form>
  	  </div>
    )
  }
})
 
module.exports = ViewBooking;     