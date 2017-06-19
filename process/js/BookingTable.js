var React = require('react');
var createReactClass = require('create-react-class');

var BookingTable = createReactClass({

  render: function() {
  	console.log(this.props.booking[0].pitch);
    return (
    	<li>
    		Pitch: {this.props.booking[0].pitch}
    	</li>
    )
  }
})
 
module.exports = BookingTable;    