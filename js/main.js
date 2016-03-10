;(function($){
	$(document).ready(function(){


	var menuToggle = document.querySelectorAll(".ba-menu-toggle"),
	body = document.getElementsByTagName("body")[0],
	overlay = document.querySelectorAll(".ba-overlay");

	menuToggle[0].onclick = function(){
		if (body.className === "ba-menu-open"){
			body.className = "";
		}
		else{
		body.className = "ba-menu-open";
		};
		// console.log(body.className);
	overlay[0].onclick = function(){
			body.className = "";
	}
};


		var $slider = $('.ba-team-slider'),
		$prev = $('.slick-prev', $slider),
		$next = $('.slick-next', $slider);

		var $testimonails = $('.testimonails-slider'),
		$prev1 = $('.slick-prev1', $testimonails),
		$next2 = $('.slick-next2', $testimonails);

		//slider init
		$slider.slick({
			dots: false,
			prevArrow:$prev,
			nextArrow:$next,
			slidesToShow: 1,
			slide: '.slider'
		});

		//testimonails init
		$testimonails.slick({
			dots: true,
			prevArrow:$prev1,
			nextArrow:$next2,
			slidesToShow: 2,
			slidesToScroll: 2,
			slide: '.testi-slider',
			responsive: [
			{
				breakpoint: 900,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '1px',
					slidesToShow: 1
				}
			}
			]
		});


	});
})(jQuery);
