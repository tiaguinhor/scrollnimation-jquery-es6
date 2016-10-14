/**
 *
 * ==============================================
 * SCROLLNIMATION V1.0.0
 *
 * @author TIAGO RODRIGO CALÓGERO
 * Senior Full Stack Developer and Software Engineer
 * http://curriculo.ogaiti.com.br
 * ==============================================
 *
 * require any library of animation like http://www.justinaguilar.com/animations/css/animations.css
 * require https://code.jquery.com/jquery-2.2.4.min.js
 * usage <div class="scrollnimation" data-animation="slideRight">Element Animated</div>
 *
 */

'use strict';

const scrollnimation = $('.scrollnimation');

if(scrollnimation.length){
	scrollnimation.css('visibility', 'hidden');

	let animation = (scrollTop) =>{
		let newScrollTop = scrollTop;

		scrollnimation.each((key, el) =>{
			let _newAnimation = $(el).data('animation');

			if(newScrollTop >= ($(el).offset().top - $(window).height() + 200))
				$(el).addClass(_newAnimation);
		});
	};

	//checks 100 100px
	let nextScroll = 0;
	$(window).on('scroll load', () =>{
		if($(this).scrollTop() >= nextScroll){
			nextScroll = Math.ceil($(this).scrollTop() / 100) * 100;
			animation($(this).scrollTop());
		}
	});
}