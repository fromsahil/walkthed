//function btntest_onclick() 
//{
//    window.location.href = "map.html";
//    console.log("do something");
//}

var userLat= 0;
var userLng= 0;

function openMap() {
	var userTime=getTimefromDropDown();

	// addParam(document.getElementById("startingLocation").value);
    window.open("map.html?latitude="+userLat+"&longitude="+userLng+"&time="+userTime); 
    

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








var submit = document.getElementById("submitForm");
submit.addEventListener("click", checkLocation, false);

var getLoc = document.getElementById("currentLocation");
getLoc.addEventListener("click", getLocation, false);