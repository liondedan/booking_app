var React = require('react');
var createReactClass = require('create-react-class');

var BookingRow = require('./BookingRow');

var BookingTable = createReactClass({
  _handleDelete: function (position) {
    this.props.deleteBooking(position);
  },

  _handleView: function (id, index, realIndex) {
    this.props.viewBooking(id, index, realIndex);
  },

  _renderByQuery: function(item, index) {
    if (item.arrivalDate) {
      if (item.departureDate > this.props.dayQuery && item.arrivalDate <= this.props.dayQuery) {
        var bookingOnDay = [];
        bookingOnDay.push(item); 
        return (
           <BookingRow prettyDate={this.props.prettyDate}  viewBooking={this._handleView} booking={bookingOnDay} key={index} index={index} />
        ) 
      } 
    } else {
      var bookingOnDay = []; 
      bookingOnDay.push(item); 
      return (
           <BookingRow prettyDate={this.props.prettyDate}  viewBooking={this._handleView} booking={bookingOnDay} key={index} index={index} />
        )
    }
  }, 

  render: function() {
    var bookingData = this.props.bookingData;
    var tableArray = []; 

    // loop to 20
    for (var i = 1; i < 21; i++) {
      var isBookedForDay = false;
      // loop bookings
      for (var j = 0; j < this.props.bookingData.length; j++) {
        // if booking is on dayQuery
        if (this.props.bookingData[j].departureDate > this.props.dayQuery && this.props.bookingData[j].arrivalDate <= this.props.dayQuery) {
          // if booking matches loop index add to array 
          if (i == this.props.bookingData[j].pitch) {
            isBookedForDay = true
            break;
          }
        } 
      }

      // if booking matches loop index add to array 
      if (isBookedForDay) {
        this.props.bookingData[j].realIndex = (j);
        tableArray.push(this.props.bookingData[j]);
      } else {
        // otherwise add empty item
        tableArray.push({pitch: i});
      }
    }

    var rowItems = tableArray.map(function(item, index) {
      return <BookingRow prettyDate={this.props.prettyDate}  viewBooking={this._handleView} booking={item} key={index} index={index} />
     }.bind(this)); 

    return ( 
      <table className="table table-bordered table-hover table-sm">
        <thead className="thead-default">
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
          {rowItems}
        </tbody>
      </table>
    )
  }
})
 
module.exports = BookingTable;     