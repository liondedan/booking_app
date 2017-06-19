var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var ControlHeader = require('./ControlHeader');
var BookingTable = require('./BookingTable');


var MainInterface = createReactClass({
  getInitialState: function() {
    return {
      appTitle: "[Dynamic]",
      today: moment(new Date()).format("YYYY-MM-DD"),
      dayQuery: moment(new Date()).format("YYYY-MM-DD"),
      data: [
        {
          "pitch": 1,
          "firstName": "Buffy",
          "email": "Hassum Harrod",
          "arrivalDate": "2017-06-19"
        },
        {
          "pitch": 1,
          "firstName": "Spot",
          "email": "Constance Smith",
          "arrivalDate": "2017-06-19"
        },
        {
          "pitch": 2,
          "firstName": "Troy",
          "email": "Constance Smith",
          "arrivalDate": "2017-06-19"
        },
        {
          "pitch": 2,
          "firstName": "Goldie",
          "email": "Barot Bellingham",
          "arrivalDate": "2017-06-19"
        },
        {
          "pitch": 1,
          "firstName": "Rusty",
          "email": "Barot Bellingham",
          "arrivalDate": "2017-06-20"
        },
        {
          "pitch": 2,
          "firstName": "Mitten",
          "email": "Hillary Goldwyn",
          "arrivalDate": "2017-06-20"
        } 
      ],
    } 
  },
 
  // componentDidMount: function() {
  //   this.serverRequest = $.get('./js/data.json', function(result) {
  //     this.setState({
  //       myAppointments: result
  //     });
  //   }.bind(this));
  // },

  // componentWillUnmount: function() {
  //   this.serverRequest.abort();
  // }, 

  _changeDay: function(date) {
    this.setState({dayQuery: date})
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

  render: function() {
    bookingsObject = this.state.data.map(function(item, index) {
      return this._renderByQuery(item, index);
    }.bind(this));  
 
    return (
        <div className="interface">
          <ControlHeader title={ this.state.appTitle } changeDay={this._changeDay} today={this.state.today} dayQuery={this.state.dayQuery}/>
          <ul>
            {bookingsObject} 
          </ul>
        </div>
      ) 
    }  
});  
  
ReactDOM.render(
  <MainInterface />, 
  document.getElementById('app')  
);   