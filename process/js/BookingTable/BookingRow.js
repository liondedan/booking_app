var React = require('react');

function BookingRow (props) {
	return (
		  <tr>
				<th scope="row">{props.booking[0].pitch}</th>
				<td>{props.booking[0].firstName}</td>
				<td>{props.booking[0].email}</td>
				<td>{props.booking[0].arrivalDate}</td>
				<td>
					<button onClick={() => props.viewBooking(props.index)} className="btn btn-secondary">View</button>
				</td>
			</tr>
	)
}
 
module.exports = BookingRow;    