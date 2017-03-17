define(['jquery'], function ($) {
	return function (e, color) {
		console.log(e);
		e.css('backgroundColor', color);
	};
});