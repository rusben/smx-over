/* --- Clase que agregaremos cuando el usuario haga scroll --- */
$(document).ready(function(){
	var altura = $('.menu-scroll').offset().top;

	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu-scroll').addClass('clase-agregada');
		} else {
			$('.menu-scroll').removeClass('clase-agregada');
		}
	});

});


/* --- Clase que agregaremos cuando el usuario haga scroll --- */
