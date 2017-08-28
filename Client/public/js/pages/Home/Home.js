var React = require('react');
var ReactRouter = require('react-router');
var Reflux = require('reflux');
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var config = require('../../../global-config/global.config');


var Home = React.createClass({
  validate : function() {
    if($('#lat').val() != '-1' && $('#lng').val() != '-1' && $('#location').val().trim() != '') {
      return true;
    }
    return false;
  },
  search : function() {
    var lat = $('#lat').val();
    var lng = $('#lng').val();
    if(this.validate()) {
      console.log('Lat : '+lat);
      console.log('Lng : '+lng);
    } else {
      console.log('No location provided');
    }
  },
  render : function() {
    return (
      <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">
          <div className="main">
          <SearchBar onSearch={this.search} />
          <WeatherRow />
          </div>
        </div>
      </div>
    </div>
    );
  }
});


var SearchBar = React.createClass({
  render : function() {
    return (
      <div className="row">
        <div className="col-md-12 searchBar">
          <div className="wrapper">
            <input type="text" className="wrapper-text" id="location" name="location"/>
            <a className="wrapper-button" href="javascript:locateClient()"><i aria-hidden="true" className="fa fa-crosshairs"></i></a>
            <a className="wrapper-button" onClick={this.props.onSearch}><i aria-hidden="true" className="fa fa-search" id="searchButton"></i></a>
            <input type="hidden" id="lat" name="lat" value="-1" />
            <input type="hidden" id="lng" name="lng" value="-1" />
          </div>
        </div>
      </div>
    );
  }
});

var WeatherCard = React.createClass({
  render : function() {
    return (
      <div className="col-md-4 weatherCard">
        <h2 className="weatherCardHeading">Heading</h2>
        <i className="wi wi-cloud weatherIcon"></i>
        <p className="weatherCardRow">[weather condition]</p>
        <p className="weatherCardRow">[location]</p>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 weatherPanel">
            <div className="row">
               <i className="fa fa-calendar"></i><span className="innerLabel calendarLabel">August 15 2016</span>
            </div>
            <div className="row humidityRow">
              <i className="wi wi-humidity"></i><span className="innerLabel humidLabel">98%</span>
            </div>
          </div>
          <div className="col-md-3 weatherPanel secondPanel">
            <span className="miniIconLabel">35</span><i className="wi wi-celsius miniIcon"></i>
          </div>
        </div>
      </div>
    );
  }  
});

var WeatherRow = React.createClass({
  render : function() {
    return (
      <div>
        <div className="row bodyRow">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
        <div className="row bodyRow">
          <WeatherCard />
          <WeatherCard />
        </div>
      </div>
    );
  }
});
  
module.exports = Home;