define(['jquery', 'helper/bem'], function ($, bem) {
	bem.addBlock('header');

	var
		bars = bem.getElem('bars'),
		nav = bem.getElem('nav'),
		navActiveClass = bem.getModClass('active'),
		obj = {
			openNav: function () {
				$(nav).addClass(navActiveClass);
			},
			closeNav: function () {
				$(nav).removeClass(navActiveClass);
			}
		};

	$(document).on('click', bars, function () {
		obj.openNav();
	});
	$(document).click(function (e) {
		if ($(nav).hasClass(navActiveClass)) {
			console.log($(navActiveClass));
			if ($(e.target).closest(nav).length) return;
			obj.closeNav();
			e.stopPropagation();
		}
	});

	return obj;


	// $(bem.getBlock()).css('backgroundColor', 'blue');
	// $(bem.getElem('btn')).css('margin', '20px');
	// $(bem.getElem('hint')).css('color', 'white');

	// console.log(bem.getBlock());
	// console.log(bem.getElem('hint'));
});