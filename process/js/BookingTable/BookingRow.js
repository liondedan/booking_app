var React = require('react');

function BookingRow (props) {
		if (props.booking.arrivalDate !== undefined) {
			var firstName = props.booking.firstName;
			var email = props.booking.email;
			var rowStatus = _hasPaid(props);
			var arrival = props.prettyDate(props.booking.arrivalDate);
			var depart = props.prettyDate(props.booking.departureDate);
			var rowStatus = _hasPaid(props);
			// <span class="badge badge-default">Default</span>
			var button = <i onClick={() => props.viewBooking(props.booking.id, props.index, props.booking.realIndex)} className="fa fa-bars" aria-hidden="true"></i>;

		} else {
			var arrival = "";
			var depart = "";
			var button = <i onClick={() => props.addDisplay(props.booking.pitch)} className="fa fa-plus" aria-hidden="true"></i>;
		}  

	function _hasPaid(rowData) {
		if (rowData.booking.paid === "yes") {
			return "table-success";
		} else {
			return "";
		} 
	} 

	var textCenter = {textAlign: "center"};

	return (
		  <tr className={rowStatus}>
				<th  scope="row">{props.booking.pitch}</th>
				<td>{firstName}</td>
				<td>{email}</td>
				<td>{arrival}</td>
				<td>{depart}</td>
				<td style={textCenter}>
					{button}
				</td>
			</tr>
	)
} 
 
module.exports = BookingRow;    