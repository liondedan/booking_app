var React = require('react');
var createReactClass = require('create-react-class');

var BookingRow = require('./BookingRow');

var BookingTable = createReactClass({
	_handleDelete: function (position) {
		this.props.deleteBooking(position);
	},

  _handleView: function (position) {
    this.props.viewBooking(position);
  },

  _renderByQuery: function(item, index) {
    if (item.departureDate > this.props.dayQuery && item.arrivalDate <= this.props.dayQuery) {
      var bookingOnDay = [];
      bookingOnDay.push(item); 
      return (
         <BookingRow prettyDate={this.props.prettyDate}  viewBooking={this._handleView} booking={bookingOnDay} key={index} index={index} />
      )
    }
  }, 

  render: function() {
    var bookingItems = this.props.bookingData.map(function(item, index) {
      return this._renderByQuery(item, index);
    }.bind(this));  

    return ( 
    	<table className="table table-bordered table-hover table-sm">
    	  <thead>
    	    <tr>
    	      <th>#</th>
    	      <th>Name</th>
    	      <th>Email</th>
            <th>Arrival</th>
            <th>Departure</th>
            <th>Edit</th>
    	    </tr>
    	  </thead> 
    	  <tbody>
    	  	{bookingItems}
    	  </tbody>
    	</table>
    )
  }
})
 
module.exports = BookingTable;     