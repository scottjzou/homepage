// Init.js


jQuery(document).ready(function($) {

	// have header padding-top = nav.height
	var navHeight = $('nav').height();
	$('.title').css({'margin-top': navHeight, 'height': $(window).height() - navHeight});

});