var React = require('react');
var createReactClass = require('create-react-class');

var BookingRow = require('./BookingRow');

var BookingTable = createReactClass({
	_handleDelete: function () {
		this.props.deleteBooking(this.props.index);
	},

  _handleView: function () {
    this.props.viewBooking(this.props.index);
    console.log(this.props.index);
  },

  _renderByQuery: function(item, index) {
    if (item.arrivalDate === this.props.dayQuery) {
      var bookingOnDay = [];
      bookingOnDay.push(item); 
      return (
         <BookingRow deleteBooking={this.props.deleteBooking} viewBooking={this.props.viewBooking} booking={bookingOnDay} key={index} index={index} />
      )
    }
  },

  render: function() {
    var bookingItems = this.props.bookingData.map(function(item, index) {
      return this._renderByQuery(item, index);
    }.bind(this));  

    return (
    	<table className="table table-hover">
    	  <thead>
    	    <tr>
    	      <th>#</th>
    	      <th>First Name</th>
    	      <th>Last Name</th>
    	      <th>Username</th>
    	      <th></th>
            <th></th>
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