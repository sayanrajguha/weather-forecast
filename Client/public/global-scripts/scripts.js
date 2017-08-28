/************************************
Script : Custom script
Author : Sayanraj Guha
Copyright : All rights reserved.
*************************************/


$(document).ready(function() {
    google.maps.event.addDomListener(window, 'load', initializeGooglePlaces);
});

function initializeGooglePlaces() {
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        var lat = place.geometry.location.lat(),
            lng = place.geometry.location.lng();
        console.log('Lat : '+lat+', Lng : '+lng);
        document.getElementById('lat').value=lat;
        document.getElementById('lng').value=lng;
    });
}

function locateClient() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var lat=position.coords.latitude,
            lng=position.coords.longitude;
        console.log(position);
        getPlaceAddress(lat,lng);
        }, function() {
          handleLocationError();
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError();
      }
}
function getPlaceAddress(lat, lng) {

    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      //console.log(results);
        if (results[1]) {
         //formatted address
         console.log('Formatted Address :' + results[0].formatted_address);
         document.getElementById('location').value=results[0].formatted_address;
         document.getElementById('lat').value=lat;
         document.getElementById('lng').value=lng;
        } else {
          alert("No results found");
        }
      } else {
        alert("Geocoder failed due to: " + status);
      }
    });
}
function handleLocationError() {
 console.log('Browser doesnt support geolocation');
}