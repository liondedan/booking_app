var React = require('react');
var createReactClass = require('create-react-class');

var ViewBooking = createReactClass({

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
  	        <label className="col-2 col-form-label">Date</label>
  	        <div className="col-10">
  	          <input className="form-control" ref="inputDate" type="date" id="example-date-input"/>
  	        </div>
  	      </div>
  	  	</form>
  	  </div>
    )
  }
})
 
module.exports = ViewBooking;     