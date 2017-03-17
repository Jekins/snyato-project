define(['jquery', 'helper/bem', 'helper/bg'], function ($, bem, bg) {
	var
		b = 'panel',
		btn = 'btn',
		modBlock = 'mod-block',
		modElem = 'mod-elem';

	$(bem(b)).each(function () {
		var
			$btn = $(this).find(bem(b, btn));

		$btn.on('click', function () {
			function color() {
				bg($(this), '#f0f0f0');
			}

			return color();
		});

		console.log(bem(b));
		console.log(bem(b, false, modBlock));
		console.log(bem(b, btn));
		console.log(bem(b, btn, modElem));
	});
});