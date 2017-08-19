
$(function(){

 	var $win = $(window);

	var $header = $('header'),
		$mobMenu = $('.mob-nav ul'),
		$main = $('main'),
		$menuButton = $('.mob-nav i');

	$win.on('scroll', header);

	$win.ready(header);
	
	function header() {
		if ($win.scrollTop() > 20) {
			$header.addClass('fixed-nav');
		}else{ 
			$header.removeClass('fixed-nav');
		}	
	}

	$menuButton.on('click', function(){

		$mobMenu.toggleClass('show-menu');
		$mobMenu.toggleClass('hide-menu');
		
		}
	);
	var $liNav = $('[data-id]'),
					$largeScrMenu = $('nav li'),
					$mobScrMenu = $('.mob-nav li');


	$largeScrMenu.on('click', function(){
		$(this).addClass('active', 500).siblings().removeClass('active', 500);
	});
	$mobScrMenu.on('click', function(){
		$(this).addClass('active-mob-li', 500).siblings().removeClass('active-mob-li', 500);
		$mobMenu.toggleClass('show-menu');
		$mobMenu.toggleClass('hide-menu');
	});

	$liNav.on('click', function(){
		var $thisID = $(this).attr('data-id');
		$('#' + $thisID ).addClass('animate-card', 500).siblings().removeClass('animate-card', 500);
	});

	var $testimonial = $('.testimonials'),
					$rightArrow = $('.fa-arrow-right'),
					$leftArrow = $('.fa-arrow-left');
		
	$rightArrow.on('click', function(){
		$testimonial.animate({marginLeft: '-50%'}, 500);
	});
	$leftArrow.on('click', function () {
		$testimonial.animate({ marginLeft: '0%' }, 500);
	})

	












});