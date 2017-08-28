var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;


var Navbar = React.createClass({
  render : function() {
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">weatherForecast</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="navbar-right">
              <a href="javascript:void(0)" id="loginLink"><i className="fa fa-lock" id="loginIcon" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;