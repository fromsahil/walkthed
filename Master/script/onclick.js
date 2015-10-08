//function btntest_onclick() 
//{
//    window.location.href = "map.html";
//    console.log("do something");
//}
function myFunction() {
    window.open("map.html"); 
}




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
				}
        		

        	}
		});
	});
    // if (42.325<latitude>42.345 && -83.0<longitude>-83.067) {
    // 	var address = ***reverse geocode converted lat lng to text
    // 	document.getElementById("startingLocation").value = address;
    // }
    // else {
    // 	alert("Your starting address is not within our current limits.");
    // }

    // alert("Latitude : " + latitude + " Longitude: " + longitude);
 }




var submit = document.getElementById("submitForm");
submit.addEventListener("click", checkLocation, false);

var getLoc = document.getElementById("currentLocation");
getLoc.addEventListener("click", getLocation, false);