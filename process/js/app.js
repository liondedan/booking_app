var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var ControlHeader = require('./ControlHeader');
var BookingTable = require('./BookingTable');
var AddBooking = require('./AddBooking');

var MainInterface = createReactClass({
  getInitialState: function() {
    return {
      appTitle: "[Dynamic]",
      today: moment(new Date()).format("YYYY-MM-DD"),
      dayQuery: moment(new Date()).format("YYYY-MM-DD"),
      data: [],
      visibleAddBooking: false,
      view: {showModal: false},
    } 
  }, 
 
  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      this.setState({
        data: result
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, 


  handleHideModal: function (){
      this.setState({view: {showModal: false}})
  },

  handleShowModal: function() {
      this.setState({view: {showModal: true}})
  },
 
  _changeDay: function(date) {
    this.setState({dayQuery: date})
  },

  _addBooking: function(temptBooking) {
    var temptData = this.state.data;
    temptData.push(temptBooking);
    this.setState({
      data: temptData
    });
  },

  _funcType: function (name) {
    this.setState({title:name}); 
  },   
 
  _renderByQuery: function(item, index) {
    if (item.arrivalDate === this.state.dayQuery) {
      var bookingOnDay = [];
      bookingOnDay.push(item); 
      return (
         <BookingTable booking={bookingOnDay} key={index} />
      )
    }
  },
 
  _toggleBookingVisibility: function () {
    var tempVisState = !this.state.visibleAddBooking;
    this.setState({
      visibleAddBooking: tempVisState
    });
  },
 
  render: function() { 
    bookingsObject = this.state.data.map(function(item, index) {
      return this._renderByQuery(item, index);
    }.bind(this));  
  
    return (
        <div>
          <div className="interface">
            <ControlHeader title={ this.state.appTitle } changeDay={this._changeDay} today={this.state.today} dayQuery={this.state.dayQuery}/>
            <ul>
              {bookingsObject} 
            </ul> 
          </div> 
          <div className="row">
              <button className="btn btn-default btn-block" onClick={this.handleShowModal}>Open Modal</button>
              {this.state.view.showModal ? <AddBooking addBooking={this._addBooking} handleHideModal={this.handleHideModal}/> : null}
          </div>
        </div>
      ) 
    }      
});   
   
ReactDOM.render( 
  <MainInterface />,   
  document.getElementById('app')    
);        
