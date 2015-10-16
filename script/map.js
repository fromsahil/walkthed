// global variables (for now)

var APIresponse;
var directionsService;
var directionsDisplay;
var totalTime = 0;
var userInputMaxTime = getURLdata("time");
var userInputType= getURLdata("type");
var filteredArray= [];
var pinA;
var waypts;
// var waypts=[];





//create object
function customlocation(name, x, y, info, time, type, link, img) {
	this.name = name;
	this.coordinates = [x, y];
	this.someInfo = info;
	this.time = time;
	this.type = type;
	this.link= link;
	this.img= img;

}


var fishbones = new customlocation ("Fishbones", 42.330522, -83.046867, "Cajun Dishes. Spend <span class='bold'>thirty minutes</span> here.", 1800, "restaurant", "http://www.fishbonesusa.com", "img/mapImgs/fishbone.jpg");
var henryTheHatter = new customlocation ("Henry the Hatter", 42.334647, -83.0481404, "Detroit's exclusive hatter since 1893! Spend <span class='bold'>ten minutes</span> here.", 600, "shopping", "http://www.henrythehatterdetroit.com", "img/mapImgs/henry.jpg");
var detroitVape = new customlocation ("Detroit Vape and Hookah shop", 42.335512, -83.0490816, "For all hookah lovers! Spend <span class='bold'>twenty minutes</span> here.", 1200, "shopping", "http://www.yelp.com › shopping › Vape Shops", "img/mapImgs/vape.jpg");
var hazenMonument = new customlocation ("Hazen S. Pingree Monument", 42.3368128, -83.0532194, "The Hazen S. Pingree Monument honors a man who served as Detroit mayor from 1890 to 1897.  He was known as the 'idol of people'. Spend <span class='bold'>ten minutes</span> here.", 600, "landmark", "http://historicdetroit.org/building/hazen-s-pingree-monument", "img/mapImgs/hazen.jpg");
var cotterMonument = new customlocation ("William Cotter Maybury Monument", 42.3370085, -83.0527677, "There’s a mustachioed mayor kicking back in Grand Circus Park. Spend <span class='bold'>ten minutes</span> here.", 600, "landmark", "http://www.historicdetroit.org/building/william-cotter-maybury-monument", "img/mapImgs/hazen.jpg");
var russelFountain = new customlocation ("Russell A. Alger Memorial Fountain", 42.336863, -83.0521217, "The monument features a bronze statue of a woman about 7 feet tall wearing a headdress and a flowing gown and carrying a sword and a shield that bears the state seal. Spend <span class='bold'>ten minutes</span> here.", 600, "landmark", "https://www.linkedin.com/pub/dir/Russell/Fountain", "img/mapImgs/russell.jpg");
var edisonFountain = new customlocation ("Edison Memorial Fountain", 42.3363073, -83.0534703, "Created to honor Thomas Alva Edison and his achievements. Spend <span class='bold'>thirty minutes</span> here.", 600, "landmark", "http://www.historicdetroit.org/building/edison-memorial-fountain/", "img/mapImgs/edison,jpg");
var grandCircus = new customlocation ("Grand Circus", 42.335879, -83.049745, "A programming bootcamp. Spend <span class='bold'>five minutes</span> here.", 300, "landmark", "http://grandcircus.co", "img/mapImgs/grand_circus.png");
var joseTacos = new customlocation ("Jose's Tacos", 42.335608, -83.046593, "Great place for tacos, and best chicken tacos ever. Spend <span class='bold'>eight minutes</span> here." , 500, "restaurant",
    "img/mapImgs/josetacos.jpg");
var detroitBikes = new customlocation ("Detroit Bikes", 42.33313, -83.048943, "Bicycles manufactured right here in Detroit! Check out the variety of bikes and assortment of colors. Spend <span class='bold'>", 300, "shopping",
"http://detroitbikes.com/", "img/mapImgs/detroitbikes.png");
var johnVarvatos = new customlocation ("John Varvatos", 42.335133, -83.049261, "Take a gander at Detroit's born an raised fashion designer John Varvatos clothing and accessories. Spend <span class='bold'>five minutes</span> here.", 300, "shopping",
    "http://www.johnvarvatos.com/on/demandware.store/Sites-johnvarvatos-Site/default?gclid=CJ3k3fLWtcgCFZWMaQoda-QM2g","img/mapImgs/johnv.jpeg");
var nojoKicks = new customlocation ("Nojo Kicks", 42.3341983,-83.0485021, "Detroit's famous sneaker boutique. Add some glide to your stride. Spend <span class='bold'>eight minutes</span> here.", 500,
    "http://www.nojokicks.com", "img/mapImgs/nojo.jpg");
var campusMartius = new customlocation ("Campus Martius", 42.3317249, -83.0465006, "Get food and beverages while being entertained by live music and a variety of festivities. Spend <span class= 'bold'>ten minutes</span> here.", 600, "landmark",
    "http://campusmartiuspark.org/", "img/mapImgs/campus.jpg");
var comericaPark = new customlocation ("Comerica Park", 42.3390023,-83.0507137, "Catch a Tigers game or visit where they play! One of the best looking structures in the confines of Detroit. Spend <span class='bold'>six minutes</span> here.", 400, "landmark",
     "http://detroit.tigers.mlb.com/det/ballpark/","img/mapImgs/comericapark.jpg");
var fordField = new customlocation ("Ford Field", 42.3400103,-83.047797, "Catch a Lions game or visit where they lose! Spend <span class='bold'>eight minutes</span> here.", 400, "landmark",
    "http://detroitlions.com/ford-field/","img/mapImgs/fordfield.JPG");
var detroitOperaHouse = new customlocation ("Detroit Opera House", 42.3389984, -83.0485197, "Check out the opulent performing arts venue! A place with style and class. Spend <span class='bold'>eight minutes</span> here.", 500, "landmark",
    "http://www.michiganopera.org/","img/mapImgs/opera.jpg");
var foxTheater = new customlocation ("Fox Theater", 42.3383254, -83.0526774, "Check out the historical Fox Theater, where many famous performances have occurred. Motown acts as well as recent acts have perform here. Spend <span class='bold'>eight minutes</span> here.", 500, "landmark",
    "http://www.olympiaentertainment.com/","img/mapImgs/foxtheatre.jpg");
var sweetWaterTavern = new customlocation ("Sweet Water Tavern", 42.330522, -83.046867, "A great wing destination! Awesome food and spirits for your enjoyment. Spend <span class='bold'>five minutes</span> here.", 1800, "restaurant",
    "http://www.sweetwatertavern.net","img/mapImgs/sweetwater.jpg");
var harborHouse = new customlocation ("Harbor House", 42.3359678,-83.0458952, "Historic Sea Food Restaurant in our beloved Detroit city! Spend <span class='bold'>thirty minutes</span> here.", 1800, "restaurant",
    "http://harborhousemi.com","img/mapImgs/harbor.jpg");
var sportsMania = new customlocation ("Sports Mania", 42.3344119,-83.045068, "Famous Detroit Sports Shop. Lions, Tigers, and Wings on the scene. Spend <span class='bold'> ten minutes</span> here.", 600, "shopping", 
    "http://sportsmaniausa.com", "img/mapImgs/sports.jpg");
var towerBarber = new customlocation ("Tower Barber", 42.3314736,-83.0470218, "Get a haircut at Detroit's famous barber shop! Spend <span class='bold'> twenty minutes</span> here.", 1200, "shopping",
    "http://www.facebook.com/standardbarberco","img/mapImgs/barber.jpg");
var detroitTattoo = new customlocation ("Detroit Tattoo Shop", 42.3309331,-83.1265796, "Pay a visit to Detroit's famous tattoo parlor. Some of the best artist are here. Spend <span class='bold'>ten minutes</span> here.", 600, "shopping",
    "", "img/mapImgs/tattoo.jpg");
var gardellaFurniture = new customlocation ("Gardella Furniture", 42.3519252, -83.0320371, "Opened in 1939 by Louis Gardella Sr. This store targets mid to high furniture buyers with antiquated taste. Spend <span class='bold'>ten minutes</span> here.", 600, "shopping",
    "http://www.gardellafurniture.com", "img/mapImgs/gardella.jpg");
var spectacles = new customlocation ("Spectacles", 42.3358422, -83.0464188, "Trendy unisex clothing store Spend <span class='bold'>ten minutes</span> here.", 600, "shopping",
    "img/mapImg/spectacles.jpg");
var moosejaw = new customlocation ("Moosejaw", 42.3338298, -83.0489466, "More trendy unisex clothing!  Spend <span class='bold'>ten minutes</span> here.", 600, "shopping",
    "http://www.moosejaw.com","img/mapImgs/moosejaw.jpg");
var detroitVsEverybody = new customlocation ("Detroit Vs Everybody", 42.334167, -83.0432783, "Detroit's famous clothing and accessories store. Spend <span class='bold'>twenty minutes</span> here.", 1200, "shopping",
    "http://detroitvseverybody.com","img/mapImgs/detroitVS.jpg");
var detroitWaterIce = new customlocation ("Detroit Water Ice", 42.3324303, -83.0473459, "Mitch Albom's new Detroit Dessert place. Spend <span class='bold'>ten minutes</span> here.", 600, "shopping",
    "http://detroitwaterice.com","img/mapImgs/waterice.jpeg");
var slices = new customlocation ("Slices", 42.3325434, -83.0477701, "Get amazing pizza at a great price! Spend <span class='bold'>ten minutes</span> here.", 600, "shopping", 
    "http://www.slicespizzadetroit.com", "img/mapImgs/slices.jpg");
var capitolPark = new customlocation ("Capitol Park", 42.3329106, -83.0494783, "Come see Detroit's famous landmark of liberty! Spend <span class='bold'>ten minutes</span> here.", 600, "landmark", "http://boyguv.com", "img/mapImgs/capitalpark.jpg");
var spiritOfDetroit = new customlocation ("Spirit of Detroit", 42.3293023, -83.0445377, "Pay a visit to the Spirit of Detroit statue, built in 1958, which represents the city of Detroit. Spend <span class='bold'>ten minutes</span> here.", 600, "landmark", "http://www.detroitmi.gov", "img/mapImgs/spirit.jpg");
var hartPlaza = new customlocation ("Hart Plaza", 42.327307, -83.0442621, "The area where Hart Plaza stands today is believed to be where Antoine Laumet de La Mothe, sieur de Cadillac landed in 1701. Spend <span class='bold'>ten minutes</span> here.", 600, "landmark", "http://www.detroitmi.gov", "img/mapImgs/hartplaza.jpg");
var vicentes = new customlocation ("Vicente's Cuban Cuisine", 42.330522, -83.046867, "A great place to indulge in a Cuban lunch. Spend <span class='bold'>thirty minutes</span> here.", 1800, "restaurant", "http://www.vicente.us", "img/mapImgs/vice.jpg");
var texasDeBrazil = new customlocation ("Texas De Brazil", 42.3325726,-83.049359, "All you can eat steak house! Spend <span class='bold'>thirty minutes</span> here.", 1800, "restaurant", "http://www.texasdebrazil.com", 
    "img/mapImgs/texas.JPG");
var lafayetteConey = new customlocation ("Lafayette Coney Island", 42.3314549,-83.0508622, "Famous family owned and operated, since 1917. Spend <span class='bold'>thirty minutes</span> here.", 1800, "restaurant", "http://www.americanconeyisland.com", 
    "img/mapImgs/coney.jpg");
var roast = new customlocation ("Roast", 42.3321731,-83.0527437, "Upscale Steakhouse. Spend <span class='bold'>thirty minutes</span> here.", 1800, "restaurant", "http://www.roastdetroit.com", "img/mapImgs/roast.jpg");
var bucharest = new customlocation ("Bucharest Grill", 42.3311869,-83.0709574, "Get your middle eastern bites here! Spend <span class='bold'>thirty minutes</span> here.", 1800, "restaurant", "http://www.bucharestgrill.com", "img/mapImgs/grill.jpg");

var allLocationsArray = [joseTacos, detroitBikes, johnVarvatos, nojoKicks,
campusMartius, comericaPark, fordField, detroitOperaHouse, foxTheater, sweetWaterTavern,
harborHouse, sportsMania, towerBarber, detroitTattoo, gardellaFurniture, spectacles, moosejaw,
detroitVsEverybody, detroitWaterIce, slices, capitolPark, spiritOfDetroit,
hartPlaza, vicentes, texasDeBrazil, lafayetteConey, roast, bucharest, fishbones, henryTheHatter,
detroitVape, hazenMonument, cotterMonument, russelFountain, edisonFountain];

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



var map;

//initialize google maps. for now it is centered at grandcircus. it also
//displays the written directions in a separate div
function initialize() {
	directionsService = new google.maps.DirectionsService;
	directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true
	});
	// var DirectionsRoute = new google.maps.DirectionsRoute;
	var mapOptions = {
	    center: new google.maps.LatLng(grandCircus.coordinates[0], grandCircus.coordinates[1]),
	    scrollwheel: false,
	    zoom: 15,
	    styles: [
				  {
				    "featureType": "administrative",
				    "elementType": "labels.text.fill",
				    "stylers": [
				      { "hue": "#ff9100" },
				      { "saturation": 100 },
				      { "lightness": -30 }
				    ]
				  },{
				    "featureType": "road",
				    "elementType": "geometry",
				    "stylers": [
				      { "hue": "#0011ff" },
				      { "saturation": -100 },
				      { "lightness": 55 }
				    ]
				  },{
				    "featureType": "landscape.man_made",
				    "stylers": [
				      { "hue": "#0091ff" }
				    ]
				  },{
				    "featureType": "poi",
				    "elementType": "geometry",
				    "stylers": [
				      { "hue": "#002bff" },
				      { "saturation": -84 }
				    ]
				  },{
				  }
				]
	   
	  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
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
	waypts=[];
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
		// units: imperial,
		travelMode: google.maps.TravelMode.WALKING
	}, function(response, status) {
		if (status ===google.maps.DirectionsStatus.OK) {
			APIresponse = response.routes[0];
			var isRightLength = checkRouteisRightLength(timeOfRoutes());
			if (isRightLength) {
				makeMarkers(APIresponse);
				directionsDisplay.setDirections(response);
				document.getElementById("totaltime").innerHTML = Math.floor(makeMinutes(totalTime));
				// document.getElementById("map").className="unhidden";
				// console.log(APIresponse);
				customMarkers(response);
				var beachMarker = new google.maps.Marker({
				    position: new google.maps.LatLng(userLat, userLong),
				    map: map,
				    icon: '/markerimgs/LocationMarkerHere.png'
				  });
		
			} else {
				initialize();
			}
		} else {
			window.alert("Directions request failed due to" + status);
		}
	});
	}


// edit content in Google's default markers
function makeMarkers(response) {
	for (i=0; i<response.legs.length-1; i++) {
		// response.legs[i+1].start_address = '<h3 class="infoHeader">'+selectedLocationsArray[response.waypoint_order[i]].name +
		// 	"</h3>"+"<div class='infoBody'><p>"+selectedLocationsArray[response.waypoint_order[i]].someInfo + "</p>" + 
		// 	"<p><a target='_blank' href='"+selectedLocationsArray[response.waypoint_order[i]].link +"'>Website</a></p></div>" +
		// 	"<div class='infoImg'><img src= '" + selectedLocationsArray[response.waypoint_order[i]].img + "'</></div>" ;
		response.legs[i].end_address += " : " + selectedLocationsArray[response.waypoint_order[i]].name + ". Spend " +
			Math.floor(makeMinutes(selectedLocationsArray[response.waypoint_order[i]].time)) + " minutes here!";
	}	
}




//custom markers more editable
function customMarkers(response) {
	var markerImgs = ['markerimgs/LocationMarkerA-new.png', 'markerimgs/LocationMarkerB.png', 'markerimgs/LocationMarkerC.png', 'LocationMarkerD.png',
'markerimgs/LocationMarkerE.png', 'markerimgs/LocationMarkerF.png', 'markerimgs/LocationMarkerG.png', 'markerimgs/LocationMarkerH.png']

	var markers =[];
	
	for (i=0; i<waypts.length; i++) {
		(function(){
			var infowindow = new google.maps.InfoWindow({
    			content: '<h3 class="infoHeader">'+selectedLocationsArray[response.routes[0].waypoint_order[i]].name +
				"</h3>"+"<div class='infoBody'><p>"+selectedLocationsArray[response.routes[0].waypoint_order[i]].someInfo + "</p>" + 
				"<p><a target='_blank' href='"+selectedLocationsArray[response.routes[0].waypoint_order[i]].link +"'>Website</a></p></div>" +
				"<div class='infoImg'><img src= '" + selectedLocationsArray[response.routes[0].waypoint_order[i]].img + "'</></div>" 
  			});

			console.log(infowindow);
			var newMarker = new google.maps.Marker({
					position: new google.maps.LatLng(selectedLocationsArray[response.routes[0].waypoint_order[i]].coordinates[0], selectedLocationsArray[response.routes[0].waypoint_order[i]].coordinates[1]),
					map: map,
					flat: true,
					icon: markerImgs[i],
					animation: google.maps.Animation.DROP
				});
			newMarker.addListener('click', function() {
	    		infowindow.open(map, newMarker);
	    	});
		//***use seperate function to loop through markers array and add event listeners?
			markers.push(newMarker);
		})();
	}
	// console.log(markers);
	return markers;
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

//get info from URL params
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


google.maps.event.addDomListener(window, 'load', initialize);


