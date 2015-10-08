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




 // function checkLocation(position) {
 //    var latitude = position.coords.latitude;
 //    var longitude = position.coords.longitude;
 //    if (42.325<latitude>42.345 && -83.0<longitude>-83.067) {
 //    	var address = ***reverse geocode converted lat lng to text
 //    	document.getElementById("startingLocation").value = address;
 //    }
 //    else {
 //    	alert("Your starting address is not within our current limits.");
 //    }

 //    alert("Latitude : " + latitude + " Longitude: " + longitude);
 // }


// function showPosition(position) {
// 	var geocoder = new google.maps.Geocoder();
// 	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

// 	// console.log(geocoder.geocode({'location': latlng}));
//     //document.getElementById("startingLocation").value = "test + " + geocoder.geocode({'location': latlng});
// }




var getLoc = document.getElementById("currentLocation");
getLoc.addEventListener("click", getLocation, false);