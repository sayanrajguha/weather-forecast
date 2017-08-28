var React = require('react');
var Navbar = require('./Navbar');
var Footer = require('./Footer');

var App = React.createClass( {
  render : function() {
    return (
      <div>
      <Navbar />
      {this.props.children}
      <Footer />
      </div>
    )
  }
});
module.exports = App;
