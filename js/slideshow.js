



$(document).ready(function(){
	$.backstretch(
		[

		"img/img1.jpg",
		"img/img2.jpg",
		"img/img3.jpg",
		"img/img4.jpg",
		"img/img5.jpg"
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








