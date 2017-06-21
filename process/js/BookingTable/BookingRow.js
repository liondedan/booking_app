var React = require('react');
var createReactClass = require('create-react-class');


function BookingRow (props) {
	return (
		  <tr>
				<th scope="row">{props.booking[0].pitch}</th>
				<td>{props.booking[0].firstName}</td>
				<td>{props.booking[0].email}</td>
				<td>{props.booking[0].arrivalDate}</td>
				<td>
				<button onClick={props.deleteItem} className="btn btn-danger">Delete Booking</button></td>
			</tr>
	)
}
 
module.exports = BookingRow;   