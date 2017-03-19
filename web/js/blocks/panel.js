define(['jquery', 'helper/bem', 'helper/bg'], function ($, bem) {
	bem.addBlock('panel');

	$(bem.getBlock()).css('backgroundColor', 'blue');
	$(bem.getElem('btn')).css('margin', '20px');
	$(bem.getElem('hint')).css('color', 'white');

	console.log(bem.getBlock());
	console.log(bem.getElem('hint'));
});