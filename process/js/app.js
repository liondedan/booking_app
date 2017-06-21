var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var ControlHeader = require('./ControlHeader');
var BookingTable = require('./BookingTable/BookingTable');
var AddBooking = require('./AddBooking');

var MainInterface = createReactClass({
  getInitialState: function() {
    return {
      today: moment(new Date()).format("YYYY-MM-DD"),
      dayQuery: moment(new Date()).format("YYYY-MM-DD"),
      data: [],
      addFormVisibility: false,
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
 
  _changeDay: function(date) {
    this.setState({dayQuery: date})
  }, 

  _addBooking: function(temptBooking) {
    var temptData = this.state.data;
    temptData.push(temptBooking);
    this.setState({
      data: temptData, 
      addFormVisibility: false, 
    });
  },

  _deleteBooking: function (item) {
    var dataArray = this.state.data;
    dataArray.splice(item, 1);
    this.setState({
      data: dataArray,
    });
  },
 
  _addDisplay: function () {
    var currentState = !this.state.addFormVisibility;
    this.setState({
      addFormVisibility: currentState
    })
  },
   
  render: function() { 
    return (
          <div className="row">
            <ControlHeader 
              title={ this.state.appTitle } 
              changeDay={this._changeDay} 
              today={this.state.today} 
              dayQuery={this.state.dayQuery}
            />
            <BookingTable 
              deleteBooking={this._deleteBooking} 
              bookingData={this.state.data} 
              dayQuery={this.state.dayQuery}
            />
            <AddBooking 
              addBooking={this._addBooking} 
              addDisplay={this._addDisplay} 
              addFormVisibility={this.state.addFormVisibility}
            />
        </div> 
      ) 
    }      
});   
   
ReactDOM.render( 
  <MainInterface />,   
  document.getElementById('app')    
);        
