var React = require('react');
var createReactClass = require('create-react-class');

var AptList = createReactClass({
  // handleChange : function (e) {
  //   var title = e.target.value;
  //   this.props.changeTitle(title);
  // },

  render: function() {
    return (
      <li>
        <span>Name: </span>
        <span>Issudde: </span>
        <input onChange={this.handleChange} />
      </li>
    )
  }
})

module.exports = AptList;
