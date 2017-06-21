var React = require('react');
var createReactClass = require('create-react-class');

var BookingRow = require('./BookingRow');

var BookingTable = createReactClass({
	_handleDelete: function () {
		this.props.deleteItem(this.props.index);
	},

  render: function() {
    return (
    	<table className="table table-hover">
    	  <thead>
    	    <tr>
    	      <th>#</th>
    	      <th>First Name</th>
    	      <th>Last Name</th>
    	      <th>Username</th>
    	      <th></th>
    	    </tr>
    	  </thead>
    	  <tbody>
    	  	<BookingRow booking={this.props.booking} deleteItem={this.props.deleteItem} />
    	  </tbody>
    	</table>
    )
  }
})
 
module.exports = BookingTable;     