var React = require('react');
var createReactClass = require('create-react-class');
var ReactDOM = require('react-dom');

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

  componentDidMount: function () {
      $(ReactDOM.findDOMNode(this)).modal('show');
      $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this._handleUpdateClose);
   },

  componentWillReceiveProps: function (newProps) {
    this.setState({
      pitch: newProps.booking.pitch,
      email: newProps.booking.email,
      firstName: newProps.booking.firstName,
      arrivalDate: newProps.booking.arrivalDate,
      departureDate: newProps.booking.departureDate,
    })
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
    $(ReactDOM.findDOMNode(this)).modal('hide');
  },

  _handleDelete: function (e) {
    this.props.deleteBooking();
    e.preventDefault();
    $(ReactDOM.findDOMNode(this)).modal('hide');
  },

  render: function() { 
  	if (this.props.viewFormVisibility) {
			formVisibility = {"display": "block"};  
		} else {
			formVisibility = {"display": "none"};
		}

    return (
      <div className="modal" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Booking</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary" onClick={this._handleUpdateBooking}>Save changes</button>
                <button onClick={this._handleDelete} className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
 
module.exports = ViewBooking;     