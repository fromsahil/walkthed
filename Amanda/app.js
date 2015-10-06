// var grandCircusA = [42.335879, -83.049745];



function customlocation(name, x, y, info) {
	this.name = name;
	this.coordinates = [x, y];
	this.someInfo = info
}

var grandCircus = new customlocation ("Grand Circus", 42.335879, -83.049745, "A programming bootcamp");
var joseTacos = new customlocation ("Jose's Tacos", 42.335608, -83.046593, "Great place for tacos");
var detroitBikes = new customlocation ("Detroit Bikes", 42.33313, -83.048943, "Bicycles manufactured right here in Detroit!");
var easternMarket = new customlocation ("Eastern Market", 42.34556, -83.04306, "Fresh Food!");
var johnVarvatos = new customlocation ("John Varvatos", 42.335133, -83.049261, "Take a gander at Detroit's born an raised fashion designer John Varvatos clothing and accessories");
var nojoKicks = new customlocation ("Nojo Kicks", 42.3341983, -83.0463134, "Detroit's famous sneaker boutique");
var campusMartius = new customlocation ("Campus Martius", 42.3317249, -83.0465006, "Get food and beverages while being entertained by live music and other festivities");
var comericaPark = new customlocation ("Comerica Park", 42.3389984, -83.0485197, "Catch a Tigers game or visit where they play!");
var fordField = new customlocation ("Ford Field", 42.3389984, -83.0485197, "Catch a Lions game or visit where they play!");
var detroitOperaHouse = new customlocation ("Detroit Opera House", 42.3389984, -83.0485197, "Check out the opulent performing arts venue!");
var foxTheater = new customlocation ("Fox Theater", 42.3383254, -83.0526774, "Check out the historical Fox Theater, where many famous performances have occurred");

var allLocationsArray = [grandCircus, joseTacos, detroitBikes, easternMarket, johnVarvatos, nojoKicks,
campusMartius, comericaPark, fordField, detroitOperaHouse, foxTheater];

var selectedLocationsArray= [];

function randomizeLocation() {
	
	var randomNumber2 = Math.floor(Math.random()*8);
	for (i = 0; i<randomNumber2; i++) {
		var randomNumber1 = Math.floor(Math.random()*allLocationsArray.length);
		console.log(allLocationsArray[randomNumber1]);
		selectedLocationsArray.push(allLocationsArray[randomNumber1]);
		//also need to check to make sure it's not already in the array
	}
}

function returnLocations(){
	for (i=0; i<selectedLocationsArray.length; i++) {

	}
}

randomizeLocation();


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
	function makeWaypoints() {
		var waypts=[];
		for (i=0; i<selectedLocationsArray.length; i++) {
			waypts.push({location: new google.maps.LatLng(selectedLocationsArray[i].coordinates[0], 
							selectedLocationsArray[i].coordinates[1])});
		};
		return waypts;
	};
	directionsService.route({
		origin: grandCircusmap,
		destination: grandCircusmap,

		waypoints: 	makeWaypoints(),

		// [{location: new google.maps.LatLng(detroitBikes.coordinates[0], detroitBikes.coordinates[1])},
		// {location: new google.maps.LatLng(joseTacos.coordinates[0], joseTacos.coordinates[1])},
		// {location: new google.maps.LatLng(detroitOperaHouse.coordinates[0], detroitOperaHouse.coordinates[1])}],
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
