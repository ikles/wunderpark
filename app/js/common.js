$(function() {
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$('.about button').click(function () {

		if (!($('.about-text').hasClass('ha'))) {
			$('.about-text').addClass('ha');
			$(this).text('скрыть');			
		}
		else {
			$('.about-text').removeClass('ha');	
			$(this).text('читать далее...');
		}
	});

}); //ready