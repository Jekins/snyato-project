define(['jquery', 'helper/bem', 'helper/bg'], function ($, bem, bg) {
	bem.addBlock('panel');

	$(bem.getBlock()).css('backgroundColor', 'blue');
	$(bem.findElem('btn')).css('margin', '20px');
	$(bem.findElem('hint')).css('color', 'white');

	console.log(bem.getBlock());
	console.log(bem.findElem('hint'));
});