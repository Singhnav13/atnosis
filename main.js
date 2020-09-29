

/* Please ❤ this if you like it! */


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch light/dark
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
		}
	});  

	// Collapse Navbar on click

	$('.navbar-collapse a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});

	
  })(jQuery); 

//   MAGNIFIC POPUP

  $(document).ready(function(){
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
	  mainClass: 'mfp-with-zoom', 
	  gallery:{
				enabled:true
			},
	
	  zoom: {
		enabled: true, 
	
		duration: 300, // duration of the effect, in milliseconds
		easing: 'ease-in-out', // CSS transition easing function
	
		opener: function(openerElement) {
	
		  return openerElement.is('img') ? openerElement : openerElement.find('img');
	  }
	}
	
	});
	
	});






