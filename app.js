



function customlocation(name, x, y, info) {
	this.name = name;
	this.coordinates = [x, y],
	this.info = info
}

var grandCircus = new customlocation ("Grand Circus", 42.335879, -83.049745, "This is a coding bootcamp");
var joseTacos = new customlocation ("Jose's Tacos", 42.335608, -83.046593, "A great place for tacos");

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
		destination: joses,
		travelMode: google.maps.TravelMode.WALKING
	}, function(response, status) {
		if (status ===google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(response);
		} else {
			window.alert("Directions request failed due to" + status);
		}
	});
	}

