var React = require('react');

function BookingRow (props) {

	function _hasPaid(rowData) {
		if (rowData.booking[0].paid === "yes") {
			return "table-success";
		} else {
			return "";
		}
	}
	var textCenter = {textAlign: "center"};
	var rowStatus = _hasPaid(props);
	var arrival = props.prettyDate(props.booking[0].arrivalDate);
	var depart = props.prettyDate(props.booking[0].departureDate);

	return (
		  <tr className={rowStatus}>
				<th  scope="row">{props.booking[0].pitch}</th>
				<td>{props.booking[0].firstName}</td>
				<td>{props.booking[0].email}</td>
				<td>{arrival}</td>
				<td>{depart}</td>
				<td style={textCenter}>
					<i onClick={() => props.viewBooking(props.index)} className="fa fa-bars" aria-hidden="true"></i>
				</td>
			</tr>
	)
} 
 
module.exports = BookingRow;    