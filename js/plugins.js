
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
	//var animateMobMenu = ;

	$menuButton.on('click', function(){

		$mobMenu.toggleClass('show-menu');
		$mobMenu.toggleClass('hide-menu');
		
		}
	);
	












});