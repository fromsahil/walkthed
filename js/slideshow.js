



$(document).ready(function(){
	$.backstretch(
		[

		"img/The_Sweep.jpg",
		"img/chrysler-house-exterior-452x452.jpg",
		"img/tumblr_meb2l8WLyx1rkc1w2o1_1280.jpg",
		"img/Best-Spring-Activities-in-Detroit-Peruse-Farmers-Markets.jpg",
		"img/joelouis.jpg"
		], 
		{
			fade: 2500,
			duration: 8000
		});
	

	$('.backstretch').addClass("dim");
	$('#homepage').show();
	$('#mapInfo').hide(); 
	$('#startDtour').click(function(){
		$ ('#homepage').fadeOut('slow'); 
		$ ('#mapInfo').fadeIn('slow'); 
		return false;
	}); 
});








