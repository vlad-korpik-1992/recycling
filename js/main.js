$(document).ready(function() {
	$('.questions__box__items__content').click(function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		$('.questions__content').removeClass('questions__content--active');
		jQuery("#"+id).addClass('questions__content--active');
		let idElem = elem.getAttribute('id');
	});

	// Menu mobile

	$('.menu__btn').on('click', function (e) {
        e.preventDefault();
        $('.menu__list').toggleClass('menu__list--active');
    });

	/* scrollto */

	$('.scrollto a').on('click', function scroll(e) {
		e.preventDefault();
		let href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top - 95
		}, {
			duration: 370,
			easing: "linear"
		});
		$('.menu__list').removeClass('menu__list--active');
		return false;
	});
});

/* Header fixed */
$(function() {
	let header = $('.header');
	let hederHeight = header.height();
	$(window).scroll(function() {
	  let height = $(window).scrollTop();
	  if($(this).scrollTop() > 1) {
	  	header.addClass('header--fixed');
	    $('body').css({
		  'paddingTop': hederHeight+'px'
	   	});
	  	} else {
	   		header.removeClass('header--fixed');
	   		$('body').css({
				'paddingTop': 0
	   		})
	  	}
	});
});