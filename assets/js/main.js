jQuery(document).ready(function ($) {

	if ($('.ds-testimonials-section').length) {
		$('.ds-testimonials-slider').slick({
			infinite: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 4000,
			prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line'></i></button>",
			nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>"
		});
	}



	// Initialize Animate On Scroll
	AOS.init({
		duration: 800,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	});

});