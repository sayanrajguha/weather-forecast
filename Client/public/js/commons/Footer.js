var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;

var Footer = React.createClass({
  render : function() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="copyright">2016 &copy; sayanrajguha@gmail.com</p>
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
