var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var AddBooking = createReactClass({
    componentDidMount: function () {
        $(ReactDOM.findDOMNode(this)).modal('show');
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
    },

    _handleSubmit: function (e) {
    	var tempBooking = {
    		pitch: this.refs.inputPitch.value,
    	}
    	e.preventDefault();
    	this.props.addBooking(tempBooking);
    },

    render: function (){
        return (
          <div className="modal" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				    <div className="modal-dialog" role="document">
				      <div className="modal-content">
				        <div className="modal-header">
				          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
				          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				            <span aria-hidden="true">&times;</span>
				          </button>
				        </div>
				        <div className="modal-body">
				          <form onSubmit={this._handleSubmit}>
				          	<div className="form-group row">
				          	  <label className="col-2 col-form-label">Pitch</label>
				          	  <div className="col-10">
				          	    <input className="form-control" ref="inputPitch" type="number" id="example-number-input"/>
				          	  </div>
				          	</div>
					          <div className="form-group row">
					            <label  className="col-2 col-form-label">First Name</label>
					            <div className="col-10">
					              <input className="form-control" ref="inputFirstName" type="text" id="example-text-input"/>
					            </div>
					          </div>
					          <div className="form-group row">
					            <label className="col-2 col-form-label">Email</label>
					            <div className="col-10">
					              <input className="form-control" ref="inputEmail" type="email" id="example-email-input"/>
					            </div>
					          </div>
					          
					          <div className="form-group row">
					            <label className="col-2 col-form-label">Date</label>
					            <div className="col-10">
					              <input className="form-control" ref="inputDate" type="date" id="example-date-input"/>
					            </div>
					          </div>
						    	</form>
				        </div>
				        <div className="modal-footer">
				          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				          <button type="button" className="btn btn-primary" onClick={this._handleSubmit}>Save changes</button>
				        </div>
				      </div>
				    </div>
				  </div>
        )
    },
});
      
module.exports = AddBooking;        