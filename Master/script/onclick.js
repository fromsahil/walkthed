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
	var userFilter=getTypefromDropDown()

	// addParam(document.getElementById("startingLocation").value);
    window.open("map.html?latitude="+userLat+"&longitude="+userLng+"&time="+userTime+"&type="+userFilter); 
    

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
 	navigator.geolocation.getCurrentPosition(function(pos) {
		geocoder = new google.maps.Geocoder();
		var address = document.getElementById("startingLocation").value;
		

		geocoder.geocode({'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				
				userLat= results[0].geometry.location.J;
				userLng= results[0].geometry.location.M;
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





var submit = document.getElementById("submitForm");
submit.addEventListener("click", checkLocation, false);

var getLoc = document.getElementById("currentLocation");
getLoc.addEventListener("click", getLocation, false);