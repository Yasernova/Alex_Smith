
$(function(){
	
 var $win = $(window);

//=============================================
/* menu positioning */
(function(){
	$win.on('scroll', header);
	var $header = $('header');
		$win.ready(header);

	function header() {
		if ($win.scrollTop() > 20) {
			$header.addClass('fixed-nav');
		} else {
			$header.removeClass('fixed-nav');
		}
	}
}());
//===============================================
/* menu show/hide switching */
(function(){
	var $mobMenu = $('.mob-nav ul'),
					$main = $('main'),
					$menuButton = $('.mob-nav i');

	$menuButton.on('click', function () {
		$mobMenu.toggleClass('show-menu');
		$mobMenu.toggleClass('hide-menu');
	}
	);
}());

//==============================================
	/* switching menu items styles*/
	(function(){
		var $liNav = $('[data-id]'),
						$largeScrMenu = $('nav li'),
						$mobScrMenu = $('.mob-nav li');


		$largeScrMenu.on('click', function () {
			$(this).addClass('active', 500).siblings().removeClass('active', 500);
		});
		$mobScrMenu.on('click', function () {
			$(this).addClass('active-mob-li', 500).siblings().removeClass('active-mob-li', 500);
			$mobMenu.toggleClass('show-menu');
			$mobMenu.toggleClass('hide-menu');
		});

		$liNav.on('click', function () {
			var $thisID = $(this).attr('data-id');
			$('#' + $thisID).addClass('animate-card', 500).siblings().removeClass('animate-card', 500);
		});
	}());
//==============================================
/* navigating testimonials */
	(function(){
			var $testimonial = $('.testimonials'),
				$rightArrow = $('.fa-arrow-right'),
				$leftArrow = $('.fa-arrow-left');

			$rightArrow.on('click', function () {
				$testimonial.animate({ marginLeft: '-50%' }, 500);
			});
			$leftArrow.on('click', function () {
				$testimonial.animate({ marginLeft: '0%' }, 500);
			})
	}());
	
//=================================================	
/* choosing what kind to show*/
	(function (){
		var $navPortItem = $('.btns button'),
			$portItem = $('.port-item');

		$navPortItem.on('click', function () {
			
			var itemCat = $('.port-item#' + $(this).attr('id')),
				notItemCat = $('div.port-item').not(itemCat);
			if ($(this).attr('id') == 'all') {
				$portItem.css({ transform: 'scale(1)' }).show(500);
			} else {
				itemCat.css({ transform: 'scale(1)'}).show(500);
				notItemCat.css({ transform: 'scale(0)'}).hide(500);
			}

		});
	}());

	//==================================================

		var $contactInput = $('#contact input, textarea'),
						$inputLabel = $('#contact label'),
						$inputAfter = $('.input-feild:after');
						console.log($inputAfter);

		$contactInput.on({
			'focus': function() {
				$(this).siblings('label').css({ 
					'font-size': '1rem',
					'top': '0.3rem'
					});
				$(this).closest('.input-feild').addClass('spread-after',500);
			},

			'blur': function () {
				if(!$(this).val()){
				$(this).siblings('label').css({ 
					'font-size': '2rem',
					'top': '1rem'
					})
			}
				$(this).closest('.input-feild').removeClass('spread-after',500);
		}
	})










});