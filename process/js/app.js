var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var ControlHeader = require('./ControlHeader');
var BookingTable = require('./BookingTable');

var MainInterface = createReactClass({
  getInitialState: function() {
    return {
      appTitle: "[Dynamic]",
      dayQuery: "2016-06-20 15:30",
      data: [
        {
          "pitch": 1,
          "firstName": "Buffy",
          "email": "Hassum Harrod",
          "arrivalDate": "2016-06-20 15:30"
        },
        {
          "pitch": 1,
          "firstName": "Spot",
          "email": "Constance Smith",
          "arrivalDate": "2016-06-24 08:30"
        },
        {
          "pitch": 2,
          "firstName": "Troy",
          "email": "Constance Smith",
          "arrivalDate": "2016-06-24 08:30"
        },
        {
          "pitch": 2,
          "firstName": "Goldie",
          "email": "Barot Bellingham",
          "arrivalDate": "2016-06-20 15:30"
        },
        {
          "pitch": 1,
          "firstName": "Rusty",
          "email": "Barot Bellingham",
          "arrivalDate": "2016-06-20 15:30"
        },
        {
          "pitch": 1,
          "firstName": "Mitten",
          "email": "Hillary Goldwyn",
          "arrivalDate": "2016-06-21 9:15"
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

  changeDay: function(date) {
    this.setState({dayQuery: date})
  },

  changeTitle: function(title) {
    this.setState({title});
  },

  _funcType: function (name) {
    this.setState({title:name}); 
  }, 

  renderByQuery: function(item, index) {
    if (item.arrivalDate === this.state.dayQuery) {
      var bookingOnDay = [];
      bookingOnDay.push(item);
      return (
         <BookingTable booking={bookingOnDay} key={index} />
      )
    }
  },

  render: function() {
    var bookingsObject = this.state.data;
    bookingsObject = bookingsObject.map(function(item, index) {
      return this.renderByQuery(item, index);
    }.bind(this));  

    return (
        <div className="interface">
          <ControlHeader title={ this.state.appTitle } changeDay={this.changeDay} />
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