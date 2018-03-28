$(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 70;
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('sticky');
			 }
			 else {
				 $('nav').removeClass('sticky');
			 }
		});
	});