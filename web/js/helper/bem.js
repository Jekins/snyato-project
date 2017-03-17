define(function () {
	return function (b, e, m) {
		if (e) {
			if (m) {
				return '[data-mod="' + b + '__' + e + '_' + m +'"]';
			} else {
				return '[data-elem="' + b + '__' + e + '"]';
			}
		} else if (m) {
			return '[data-mod="' + b + '_' + m + '"]';
		} else {
			return '[data-block="' + b + '"]';
		}
	};
});