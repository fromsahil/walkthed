// global variables (for now)

var APIresponse;
var directionsService;
var directionsDisplay;
var totalTime = 0;
var userInputMaxTime = getURLdata("time");
var userInputType= getURLdata("type");
var filteredArray= [];
// var waypts=[];





//create object
function customlocation(name, x, y, info, time, type) {
	this.name = name;
	this.coordinates = [x, y];
	this.someInfo = info;
	this.time = time;
	this.type = type;

}




//create a few objects using the above constructor

var grandCircus = new customlocation ("Grand Circus", 42.335879, -83.049745, "A programming bootcamp", 300, "landmark");
var joseTacos = new customlocation ("Jose's Tacos", 42.335608, -83.046593, "Great place for tacos", 500, "Restaurant");
var detroitBikes = new customlocation ("Detroit Bikes", 42.33313, -83.048943, "Bicycles manufactured right here in Detroit!", 300, "shopping");
var easternMarket = new customlocation ("Eastern Market", 42.34556, -83.04306, "Fresh Food!", 500, "landmark");
var johnVarvatos = new customlocation ("John Varvatos", 42.335133, -83.049261, "Take a gander at Detroit's born an raised fashion designer John Varvatos clothing and accessories", 300, "shopping");
var nojoKicks = new customlocation ("Nojo Kicks", 42.3341983, -83.0463134, "Detroit's famous sneaker boutique", 300, "shopping");
var campusMartius = new customlocation ("Campus Martius", 42.3317249, -83.0465006, "Get food and beverages while being entertained by live music and other festivities", 600, "landmark");
var comericaPark = new customlocation ("Comerica Park", 42.3389984, -83.0485197, "Catch a Tigers game or visit where they play!", 400, "landmark");
var fordField = new customlocation ("Ford Field", 42.3389984, -83.0485197, "Catch a Lions game or visit where they play!", 400, "landmark");
var detroitOperaHouse = new customlocation ("Detroit Opera House", 42.3389984, -83.0485197, "Check out the opulent performing arts venue!", 500, "landmark");
var foxTheater = new customlocation ("Fox Theater", 42.3383254, -83.0526774, "Check out the historical Fox Theater, where many famous performances have occurred", 500, "landmark");
var sweetWaterTavern = new customlocation ("Sweet Water Tavern", 42.330522, -83.046867, "A great wing destination!", 1800, "Restaurant");
var harborHouse = new customlocation ("Harbor House", 42.330522, -83.046867, "Historic Sea Food Restaurant in the city!", 1800, "Restaurant");
var sportsMania = new customlocation ("Sports Mania", 42.330522, -83.046867, "Famous Detroit Sports Shop", 600, "shopping");
var towerBarber = new customlocation ("Tower Barber", 42.330522, -83.046867, "Get a haircut at Detroit's famous barber shop!", 1200, "shopping");
var detroitTattoo = new customlocation ("Detroit Tattoo Shop", 42.330522, -83.046867, "Pay a visit to Detroit's famous tattoo parlor ", 600, "shopping");
var gardellaFurniture = new customlocation ("Gardella Furniture", 42.3519252, -83.0320371, "Opened in 1939 by Louis Gardella Sr. This store targets mid to high furniture buyers with antiquated taste", 600, "shopping");
var spectacles = new customlocation ("Spectacles", 42.3358422, -83.0464188, "Trendy unisex clothing store", 600, "shopping");
var moosejaw = new customlocation ("Moosejaw", 42.3338298, -83.0489466, "More trendy unisex clothing!", 600, "shopping");
var detroitVsEverybody = new customlocation ("Detroit Vs Everybody", 42.334167, -83.0432783, "Detroit's famous clothing and accessories store", 1200, "shopping");
var detroitWaterIce = new customlocation ("Detroit Water Ice", 42.3324303, -83.0473459, "Mitch Albom's new Detroit Dessert place", 600, "shopping");
var slices = new customlocation ("Slices", 42.3325434, -83.0477701, "Get amazing pizza at a great price!", 600, "shopping");
var capitolPark = new customlocation ("Capitol Park", 42.3329106, -83.0494783, "Come see Detroit's famous landmark of liberty!", 600, "landmark");
var spiritOfDetroit = new customlocation ("Spirit of Detroit", 42.3293023, -83.0445377, "Pay a visit to the Spirit of Detroit statue, built in 1958, which represents the city of Detroit", 600, "landmark");
var joeLouisMonument = new customlocation ("Joe Louis Monument", 42.3286701, -83.0445116, "This represents one of the greatest boxers of all time, also known as 'The Fist' ", 600, "landmark");
var hartPlaza = new customlocation ("Hart Plaza", 42.327307, -83.0442621, "The area where Hart Plaza stands today is believed to be where Antoine Laumet de La Mothe, sieur de Cadillac landed in 1701", 600, "landmark");
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
	if (userInputType==="anything") {
		var randomNumber2 = Math.floor(Math.random()*8);
		for (i = 0; i<randomNumber2; i++) {
			var randomNumber1 = Math.floor(Math.random()*allLocationsArray.length);
			//check to make sure it's not already in the array
			if (selectedLocationsArray.indexOf(allLocationsArray[randomNumber1])===-1) {
				selectedLocationsArray.push(allLocationsArray[randomNumber1]);
			}
		}
	} else {
		makeFilteredArray();
		var randomNumber3 = Math.floor(Math.random()*8);

		for (i = 0; i<randomNumber3; i++) {
			var randomNumber4 = Math.floor(Math.random()* filteredArray.length);
			//check to make sure it's not already in the array
			if (selectedLocationsArray.indexOf(filteredArray[randomNumber4])===-1) {
				selectedLocationsArray.push(filteredArray[randomNumber4]);
			}
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
	    zoom: 15,
	    styles: [
  {
    "featureType": "landscape",
    "stylers": [
      { "color": "#F3FFE2" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "color": "#225378" },
      { "saturation": -19 },
      { "lightness": 62 },
      { "gamma": 2.38 }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#225378" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#EB7F00" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "labels"  }
]
	   
	  }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById("directionsPanel"))
  calcRoute(directionsService, directionsDisplay);


  
}

function makeFilteredArray() {
	for (i=0; i<allLocationsArray.length; i++) {
		console.log(allLocationsArray[i].type+","+userInputType)
		if (allLocationsArray[i].type===userInputType) {
			filteredArray.push(allLocationsArray[i]);
		}
		console.log(filteredArray);
	}
}


//this generates random waypoints
function makeWaypoints() {
	var waypts=[];
	randomizeLocation();

	if (userInputType==="anything") {
		for (i=0; i<selectedLocationsArray.length; i++) {
			waypts.push({location: new google.maps.LatLng(selectedLocationsArray[i].coordinates[0], 
							selectedLocationsArray[i].coordinates[1])});
		};
	} else {
		for (i=0; i<selectedLocationsArray.length; i++) {
			waypts.push({location: new google.maps.LatLng(selectedLocationsArray[i].coordinates[0], 
			selectedLocationsArray[i].coordinates[1])});
		};
	}
	console.log(i);
	return waypts;
};


//this function calculates routes. it creates waypoints from the random locations generated above.
//the waypoint order is optimized.
function calcRoute(directionsService, directionsDisplay) {
	//var grandCircusmap = new google.maps.LatLng(grandCircus.coordinates[0], grandCircus.coordinates[1]);
		var userLat= getURLdata("latitude");
		var userLong= getURLdata("longitude");
	directionsService.route({
		// origin: grandCircusmap,
		// destination: grandCircusmap,

		origin: new google.maps.LatLng(userLat, userLong),
		destination: new google.maps.LatLng(userLat, userLong),
		waypoints: 	makeWaypoints(), 
		optimizeWaypoints: true,
		travelMode: google.maps.TravelMode.WALKING
	}, function(response, status) {
		if (status ===google.maps.DirectionsStatus.OK) {
			APIresponse = response.routes[0];
			var isRightLength = checkRouteisRightLength(timeOfRoutes());
			if (isRightLength) {
				// response.routes[0].legs[1].start_address = "hi mom";
				makeMarkers(APIresponse);
				directionsDisplay.setDirections(response);
				document.getElementById("map").className="unhidden";
				
				
				console.log(APIresponse);
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
		response.legs[i+1].start_address = '<h3 class="infoHeader">'+selectedLocationsArray[response.waypoint_order[i]].name +
			"</h3>"+"<p class='infoBody'>"+selectedLocationsArray[response.waypoint_order[i]].someInfo + "</p>";
		response.legs[i].end_address += " : " + selectedLocationsArray[response.waypoint_order[i]].name + ". Spend " +
			Math.floor(makeMinutes(selectedLocationsArray[response.waypoint_order[i]].time)) + " minutes here!";
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
	for (i=0; i<APIresponse.legs.length; i++) {
		totalTime += APIresponse.legs[i].duration.value;
	}
	for (i=0; i<selectedLocationsArray.length; i++) {
		totalTime += selectedLocationsArray[i].time;
	}
	console.log('total time : '+totalTime);
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
		filteredArray= [];
		totalTime=0;
	}
	return rightTime
}

//[latitude=42.331427,longitude=-83.0457538]
function getURLdata(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
           var pair = vars[i].split("=");
           if(pair[0] === variable){
           	return pair[1];
           	
           };
       } 
       console.log("this returned false");
       return(false);
       
   
}


function makeMinutes(seconds){
	var minutes = seconds/60;
	return minutes;
}

function reloadPage() {
	window.location.reload();
}


var reroute = document.getElementById("reroute");
reroute.addEventListener("click", reloadPage, false);


google.maps.event.addDomListener(window, 'load', initMap);


