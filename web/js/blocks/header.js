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

		return false;
	});
	$(document).on('click', function (e) {
		if ($(e.target).parent(nav).length) return;
		obj.closeNav();
		e.stopPropagation();
	});

	return obj;


	// $(bem.getBlock()).css('backgroundColor', 'blue');
	// $(bem.getElem('btn')).css('margin', '20px');
	// $(bem.getElem('hint')).css('color', 'white');

	// console.log(bem.getBlock());
	// console.log(bem.getElem('hint'));
});