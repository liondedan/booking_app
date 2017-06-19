var React = require('react');
var createReactClass = require('create-react-class');

var BookingTable = createReactClass({

  render: function() {
    return (
    	<li>
    		Pitch: {this.props.booking[0].pitch}
    	</li>
    )
  }
})
 
module.exports = BookingTable;    