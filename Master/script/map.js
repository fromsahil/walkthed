// global variables (for now)

var APIresponse;
var directionsService;
var directionsDisplay;
var totalTime = 0;
var userInputMaxTime = 3000;
var waypts=[];


// delay loading of API until the submit button is clicked
// function loadAPI()
// {
//     var script = document.createElement("script");
//     script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyB045PY_LEotlWJNFA5rL29A7fth6vfgYw&signed_in=true&region=ES&callback=initMap";
//     script.type = "text/javascript";
//     document.getElementsByTagName("head")[0].appendChild(script);
// }


//create object
function customlocation(name, x, y, info, time, type) {
	this.name = name;
	this.coordinates = [x, y];
	this.someInfo = info;
	this.time = time;
	this.type = type;

}


//create a few objects using the above constructor

var grandCircus = new customlocation ("Grand Circus", 42.335879, -83.049745, "A programming bootcamp", 300, "Landmark");
var joseTacos = new customlocation ("Jose's Tacos", 42.335608, -83.046593, "Great place for tacos", 500, "Restaurant");
var detroitBikes = new customlocation ("Detroit Bikes", 42.33313, -83.048943, "Bicycles manufactured right here in Detroit!", 300, "Shopping");
var easternMarket = new customlocation ("Eastern Market", 42.34556, -83.04306, "Fresh Food!", 500, "Landmark");
var johnVarvatos = new customlocation ("John Varvatos", 42.335133, -83.049261, "Take a gander at Detroit's born an raised fashion designer John Varvatos clothing and accessories", 300, "Shopping");
var nojoKicks = new customlocation ("Nojo Kicks", 42.3341983, -83.0463134, "Detroit's famous sneaker boutique", 300, "Shopping");
var campusMartius = new customlocation ("Campus Martius", 42.3317249, -83.0465006, "Get food and beverages while being entertained by live music and other festivities", 600, "Landmark");
var comericaPark = new customlocation ("Comerica Park", 42.3389984, -83.0485197, "Catch a Tigers game or visit where they play!", 400, "Landmark");
var fordField = new customlocation ("Ford Field", 42.3389984, -83.0485197, "Catch a Lions game or visit where they play!", 400, "Landmark");
var detroitOperaHouse = new customlocation ("Detroit Opera House", 42.3389984, -83.0485197, "Check out the opulent performing arts venue!", 500, "Landmark");
var foxTheater = new customlocation ("Fox Theater", 42.3383254, -83.0526774, "Check out the historical Fox Theater, where many famous performances have occurred", 500, "Landmark");
var sweetWaterTavern = new customlocation ("Sweet Water Tavern", 42.330522, -83.046867, "A great wing destination!", 1800, "Restaurant");
var harborHouse = new customlocation ("Harbor House", 42.330522, -83.046867, "Historic Sea Food Restaurant in the city!", 1800, "Restaurant");
var sportsMania = new customlocation ("Sports Mania", 42.330522, -83.046867, "Famous Detroit Sports Shop", 600, "Shopping");
var towerBarber = new customlocation ("Tower Barber", 42.330522, -83.046867, "Get a haircut at Detroit's famous barber shop!", 1200, "Shopping");
var detroitTattoo = new customlocation ("Detroit Tattoo Shop", 42.330522, -83.046867, "Pay a visit to Detroit's famous tattoo parlor ", 600, "Shopping");
var gardellaFurniture = new customlocation ("Gardella Furniture", 42.3519252, -83.0320371, "Opened in 1939 by Louis Gardella Sr. This store targets mid to high furniture buyers with antiquated taste", 600, "Shopping");
var spectacles = new customlocation ("Spectacles", 42.3358422, -83.0464188, "Trendy unisex clothing store", 600, "Shopping");
var moosejaw = new customlocation ("Moosejaw", 42.3338298, -83.0489466, "More trendy unisex clothing!", 600, "Shopping");
var detroitVsEverybody = new customlocation ("Detroit Vs Everybody", 42.334167, -83.0432783, "Detroit's famous clothing and accessories store", 1200, "Shopping");
var detroitWaterIce = new customlocation ("Detroit Water Ice", 42.3324303, -83.0473459, "Mitch Albom's new Detroit Dessert place", 600, "Shopping");
var slices = new customlocation ("Slices", 42.3325434, -83.0477701, "Get amazing pizza at a great price!", 600, "Shopping");
var capitolPark = new customlocation ("Capitol Park", 42.3329106, -83.0494783, "Come see Detroit's famous landmark of liberty!", 600, "Landmark");
var spiritOfDetroit = new customlocation ("Spirit of Detroit", 42.3293023, -83.0445377, "Pay a visit to the Spirit of Detroit statue, built in 1958, which represents the city of Detroit", 600, "Landmark");
var joeLouisMonument = new customlocation ("Joe Louis Monument", 42.3286701, -83.0445116, "This represents one of the greatest boxers of all time, also known as 'The Fist' ", 600, "Landmark");
var hartPlaza = new customlocation ("Hart Plaza", 42.327307, -83.0442621, "The area where Hart Plaza stands today is believed to be where Antoine Laumet de La Mothe, sieur de Cadillac landed in 1701", 600, "Landmark");
var vicentes = new customlocation ("Vicente's Cuban Cuisine", 42.330522, -83.046867, "A great place to indulge in a Cuban lunch ", 1800, "Restaurant");
var texasDeBrazil = new customlocation ("Texas De Brazil", 42.330522, -83.046867, "All you can eat steak house!", 1800, "Restaurant");
var lafayetteConey = new customlocation ("Lafayette Coney Island", 42.330522, -83.046867, "Famous family owned and operated, since 1917", 1800, "Restaurant");
var roast = new customlocation ("Roast", 42.330522, -83.046867, "Upscale Steakhouse", 1800, "Restaurant");
var bucharest = new customlocation ("Bucharest Grill", 42.330522, -83.046867, "Get your middle eastern bites here!", 1800, "Restaurant");
var fishbones = new customlocation ("Fishbones", 42.330522, -83.046867, "Cajun Dishes", 1800, "Restaurant");


//an array of all of the location objects
var allLocationsArray = [joseTacos, detroitBikes, easternMarket, johnVarvatos, nojoKicks,
campusMartius, comericaPark, fordField, detroitOperaHouse, foxTheater, sweetWaterTavern,
harborHouse, sportsMania, towerBarber, detroitTattoo, gardellaFurniture, spectacles, moosejaw,
detroitVsEverybody, detroitWaterIce, slices, capitolPark, spiritOfDetroit, joeLouisMonument,
hartPlaza, vicentes, texasDeBrazil, lafayetteConey, roast, bucharest, fishbones];

var justRestaurants= [];

//an empty array to hold random objects found
var selectedLocationsArray= [];

//this function chooses up to 8 random items from the locations array and pushes them to selected array
function randomizeLocation() {
	var randomNumber2 = Math.floor(Math.random()*8);
	for (i = 0; i<randomNumber2; i++) {
		var randomNumber1 = Math.floor(Math.random()*allLocationsArray.length);
		//check to make sure it's not already in the array
		if (selectedLocationsArray.indexOf(allLocationsArray[randomNumber1])===-1) {
			selectedLocationsArray.push(allLocationsArray[randomNumber1]);
		}
	}
}




//initialize google maps. for now it is centered at grandcircus. it also
//displays the written directions in a separate div
function initMap() {
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: false
	});
	// var DirectionsRoute = new google.maps.DirectionsRoute;
	var mapOptions = {
	    center: new google.maps.LatLng(grandCircus.coordinates[0], grandCircus.coordinates[1]),
	    scrollwheel: false,
	    zoom: 15
	   
	  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  console.log(directionsDisplay)
  directionsDisplay.setPanel(document.getElementById("directionsPanel"))
  calcRoute(directionsService, directionsDisplay);


  
}

//this generates random waypoints
function makeWaypoints() {
	var waypts=[];
	randomizeLocation();
	
	for (i=0; i<selectedLocationsArray.length; i++) {
		waypts.push({location: new google.maps.LatLng(selectedLocationsArray[i].coordinates[0], 
						selectedLocationsArray[i].coordinates[1])});
	};
	return waypts;
};


//this function calculates routes. it creates waypoints from the random locations generated above.
//the waypoint order is optimized.
function calcRoute(directionsService, directionsDisplay) {
	var grandCircusmap = new google.maps.LatLng(grandCircus.coordinates[0], grandCircus.coordinates[1]);

	directionsService.route({
		origin: grandCircusmap,
		destination: grandCircusmap,
		// origin: document.getElementById("startingLocation").value,
		// destination: document.getElementById("startingLocation").value,
		waypoints: 	makeWaypoints(),
		optimizeWaypoints: true,
		travelMode: google.maps.TravelMode.WALKING
	}, function(response, status) {
		if (status ===google.maps.DirectionsStatus.OK) {
			console.log(response);
			APIresponse = response.routes[0];
			var isRightLength = checkRouteisRightLength(timeOfRoutes());
			if (isRightLength) {
				// response.routes[0].legs[1].start_address = "hi mom";
				makeMarkers(APIresponse);
				directionsDisplay.setDirections(response);
				document.getElementById("map").className="unhidden";
				
				
				// console.log(APIresponse);
				// console.log(response.routes[0].legs[0].duration.value);
				// console.log(APIresponse.length);
			} else {
				initMap();
			}
		} else {
			window.alert("Directions request failed due to" + status);
		}
	});
	}


//make markers
function makeMarkers(response) {
	for (i=0; i<response.legs.length-1; i++) {
		response.legs[i+1].start_address = selectedLocationsArray[response.waypoint_order[i]].name + " : " + selectedLocationsArray[response.waypoint_order[i]].someInfo;
		response.legs[i].end_address += " : " + selectedLocationsArray[response.waypoint_order[i]].name;
		// console.log(selectedLocationsArray[j]);
		// console.log(selectedLocationsArray[j].someInfo);
	}
		// var marker = new google.maps.Marker({
		// 	position: {lat: selectedLocationsArray[i].coordinates[0], lng: selectedLocationsArray[i].coordinates[1]},
		// 	map: map,
		// 	title: 'test'
		// });
		// marker.setMap(map);

	// console.log(response);


	
}

// find the total time for all of the route legs


function timeOfRoutes() {
	for (i=0; i<APIresponse.length; i++) {
		totalTime += APIresponse.legs[i].duration.value;
	}
	for (i=0; i<selectedLocationsArray.length; i++) {
		totalTime += selectedLocationsArray[i].time;
	}
	return totalTime;
}



//only return route if total route time is less than user entered time
//**eventually need to have it check that route isn't too short either

//if route is NOT the right length, want to re-run init map, 
//if it's the right length, continue


function checkRouteisRightLength(time) {
	var rightTime = (0 !== time && time <= userInputMaxTime);
	if (!rightTime) {
		selectedLocationsArray= [];
		totalTime=0;
	}
	return rightTime
}



google.maps.event.addDomListener(window, 'load', initMap);




		
 // function checkLocation(position) {
 //    var latitude = position.coords.latitude;
 //    var longitude = position.coords.longitude;
 //    //if (42.325<latitude>42.345 && -83.0<longitude>-83.067) {
 //    	//var address = ***reverse geocode converted lat lng to text
 //    	//document.getElementById("startingLocation").value = address;
 //    //}
 //    //else {
 //    // 	alert("That's not in our currently available box.");
 //    // }

 //    alert("Latitude : " + latitude + " Longitude: " + longitude);
 // }

 // function errorHandler(err) {
 //    if(err.code == 1) {
 //       alert("Sorry, access denied. Maybe you need to host on a local server!");
 //    }
    
 //    else if( err.code == 2) {
 //       alert("Error: Position is unavailable!");
 //    }
 // }
	
 // function getLocation(){

 //    if(navigator.geolocation){
 //       // timeout at 60000 milliseconds (60 seconds)
 //       var options = {timeout:60000};
 //       navigator.geolocation.getCurrentPosition(checkLocation, errorHandler, options);
 //    } else{
 //       alert("Sorry, browser does not support geolocation!");
 //    }
 // };

 // function convertToLL() {
 // // 	//take given address and return lat long
 // // 	//if (42.325<latitude>42.345 && -83.0<longitude>-83.067) {
 // //    	//var address = ***reverse geocode converted lat lng to text
 // //    	//document.getElementById("startingLocation").value = address;
 // //    	//loadAPI();
 // //    //} else {
 // //    	//alert("that's not in our little detroit box!")
 // //    //}
 // };


//event listeners
// var submit = document.getElementById("submitForm");
// submit.addEventListener("click", loadAPI, false);

// //click get current location, finds current location
// var getLoc = document.getElementById("currentLocation");
// getLoc.addEventListener("click", getLocation, false);