//function btntest_onclick() 
//{
//    window.location.href = "map.html";
//    console.log("do something");
//}
function myFunction() {
    window.open("map.html"); 
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
		console.log(address);

		geocoder.geocode({'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				console.log(results);
				var userLat= results[0].geometry.location.J;
				var userLng= results[0].geometry.location.M;
				if ((userLat<42.3225 || userLat>42.345) || (userLng<-83.067 || userLng>-83.0)) {
					alert("Your starting address is not within our current limits.");
					return false;
				} else {
        		myFunction();
        			}
        	}
		});
	});
  
 }




var submit = document.getElementById("submitForm");
submit.addEventListener("click", checkLocation, false);

var getLoc = document.getElementById("currentLocation");
getLoc.addEventListener("click", getLocation, false);