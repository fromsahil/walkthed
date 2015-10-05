var mapOptions = {
	center: new google.maps.latLng(37.7831, -122.4039), 
	zoom: 12,
	mapTypeId: google.maps.mapTypeId.ROADMAP
};

new google.maps.Map(document.getElementById('map'), mapOptions);

var markerOptions = {
	position: new google.maps.latLng(37.7831, -122.4039)
};

var marker = new google.maps.

