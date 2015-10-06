// var grandCircusA = [42.335879, -83.049745];



function customlocation(name, x, y, info) {
	this.name = name;
	this.coordinates = [x, y];
	this.someInfo = info
}

var grandCircus = new customlocation ("Grand Circus", 42.335879, -83.049745, "A programming bootcamp");
var joseTacos = new customlocation ("Jose's Tacos", 42.335608, -83.046593, "Great place for tacos");
var pureDetroitGM = new customlocation ("Pure Detroit GM Renaissance Center", 42.36, -83.039795, "One of 3 Detroit's significant landmarks");
var pureDetroitFisher = new customlocation ("Pure Detroit Fisher Building", 42.369803, -83.077457, "Another one of Pure Detroit's significant landmarks");
var pureDetroit = new customlocation ("Pure Detroit", 42.329545, -83.04614, "Pure Detroit's Guardian Building location");

var allLocationsArray = [grandCircus, joseTacos];


function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var mapOptions = {
	    center: new google.maps.LatLng(grandCircus.coordinates[0], grandCircus.coordinates[1]),
	    scrollwheel: false,
	    zoom: 15
	  }
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"))
  calcRoute(directionsService, directionsDisplay);
}

function calcRoute(directionsService, directionsDisplay) {
	var grandCircusmap = new google.maps.LatLng(grandCircus.coordinates[0], grandCircus.coordinates[1]);
	var joses = new google.maps.LatLng(42.335608, -83.046593);
	directionsService.route({
		origin: grandCircusmap,
		destination: grandCircusmap,
		waypoints: [{location: new google.maps.LatLng(pureDetroitGM.coordinates[0], pureDetroitGM.coordinates[1])},
		{location: new google.maps.LatLng(joseTacos.coordinates[0], joseTacos.coordinates[1])},
		{location: new google.maps.LatLng(pureDetroitFisher.coordinates[0], pureDetroitFisher.coordinates[1])}],
		optimizeWaypoints: true,
		travelMode: google.maps.TravelMode.WALKING
	}, function(response, status) {
		if (status ===google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		} else {
			window.alert("Directions request failed due to" + status);
		}
	});
	}
