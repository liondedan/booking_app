var React = require('react');

function BookingRow (props) {

		// console.log(props.booking[0]);


		if (props.booking[0].arrivalDate !== undefined) {
			var firstName = props.booking[0].firstName;
			var email = props.booking[0].email;
			var rowStatus = _hasPaid(props);
			var arrival = props.prettyDate(props.booking[0].arrivalDate);
			var depart = props.prettyDate(props.booking[0].departureDate);
			var rowStatus = _hasPaid(props);
			console.log(rowStatus);

		} else {
			var arrival = "";
			var depart = "";
		}  

	function _hasPaid(rowData) {
		if (rowData.booking[0].paid === "yes") {
			return "table-success";
		} else {
			return "";
		} 
	} 

	var textCenter = {textAlign: "center"};
	

	return (
		  <tr className={rowStatus}>
				<th  scope="row">{props.booking[0].pitch}</th>
				<td>{firstName}</td>
				<td>{email}</td>
				<td>{props.booking[0].arrivalDate}</td>
				<td>{depart}</td>
				<td style={textCenter}>
					<i onClick={() => props.viewBooking(props.index)} className="fa fa-bars" aria-hidden="true"></i>
				</td>
			</tr>
	)
} 
 
module.exports = BookingRow;    