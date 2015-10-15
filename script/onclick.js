//function btntest_onclick() 
//{
//    window.location.href = "map.html";
//    console.log("do something");
//}

var userLat= 0;
var userLng= 0;

// var defaultBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(42.3225, -83.067),
//   new google.maps.LatLng(42.345, -83.0));

function openMap() {

	var userTime=getTimefromDropDown();
	var userFilter=getTypefromDropDown();

	// addParam(document.getElementById("startingLocation").value);
    window.open("map.html?latitude="+userLat+"&longitude="+userLng+"&time="+userTime+"&type="+userFilter, "_self"); 
    

}



//if user clicks Use Current Location, populates the form with their current address
function getLocation() {
	navigator.geolocation.getCurrentPosition(function(pos) {
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
		geocoder.geocode({'latLng': latlng}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
        	document.getElementById("startingLocation").value = results[0].formatted_address;
        	}
		});
	});
};



//when user clicks submit, it checks whether the location is within bounds
 function checkLocation(position) {
 	spinner();
 	navigator.geolocation.getCurrentPosition(function(pos) {
		geocoder = new google.maps.Geocoder();
		var address = document.getElementById("startingLocation").value;
		

		geocoder.geocode({'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				console.log(results);
				console.log(results[0].geometry.location);
				userLat= results[0].geometry.location.lat();
				userLng= results[0].geometry.location.lng();
				console.log(userLat);
				if ((userLat<42.3225 || userLat>42.345) || (userLng<-83.067 || userLng>-83.0)) {
					alert("Your starting address is not within our current limits.");
					return false;
				} else {
        		openMap();
        			}
        	}
		});
	});
 }


function getTimefromDropDown() {
	var timeSelector= document.getElementById("time");
	var selectedTime= timeSelector.options[timeSelector.selectedIndex].value;
	return selectedTime;

}

function getTypefromDropDown() {
	var typeSelector= document.getElementById("type");
	var selectedType= typeSelector.options[typeSelector.selectedIndex].value;
	return selectedType;

}


 // var autocomplete = new google.maps.places.Autocomplete(input);
 //  autocomplete.bindTo('startingLocation');


var opts = {
  lines: 13 // The number of lines to draw
, length: 28 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var target = document.getElementById('spinner')
// var spinner = new Spinner(opts).spin(target);

function spinner() {
	var spinner = new Spinner().spin();
	target.appendChild(spinner.el);
}





var submit = document.getElementById("submitForm");
submit.addEventListener("click", checkLocation, false);

var getLoc = document.getElementById("currentLocation");
getLoc.addEventListener("click", getLocation, false);