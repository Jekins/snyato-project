define(function () {
	return {
		addBlock: function (b) {
			var
				$block = $('[data-' + b + ']'),
				i;

			this.block[b] = '';
			this.block['elem'] = [];

			for (i = 0; i < $block.length; i++) {
				var
					d = $($block[i]).data(b);

				if (d.indexOf('__') >= 0) {
					var
						repD = d.replace('__', '');


					if (repD.indexOf('_') >= 0) {
						var
							splitD = d.split(' '),
							iMod;

						for (iMod = 0; iMod < splitD.length; iMod++) {
							var
								repDMod = splitD[iMod].replace('__', '');

							if (repDMod.indexOf('_') >= 0) {
							} else {
								var
									len = this.block.elem.length;

								this.block.elem.push({});
								this.block.elem[len][splitD[iMod].replace('__','')] = splitD[iMod];
								this.block.elem[len]['mod'] = [];
							}
						}
					} else {
						var
							splitD = d.split(' '),
							iElem;

						for (iElem = 0; iElem < splitD.length; iElem++) {
							var
								len = this.block.elem.length;

							this.block.elem.push({});
							this.block.elem[len][splitD[iElem].replace('__','')] = splitD[iElem];
							this.block.elem[len]['mod'] = [];
						}
					}
				} else {
					if (d == 'on') {
						this.block[b] = d;
					}
				}
			}
		},
		getBlock: function () {
			var
				b = Object.keys(this.block)[0];

			return '[data-' + b + '="' + this.block[b] + '"]';
		},
		getElem: function (e) {
			var
				en = '__' + e,
				i;

			for (i = 0; i < this.block.elem.length; i++) {
				if (this.block.elem[i][e] == en) {
					var
						b = Object.keys(this.block)[0];

					return '[data-' + b + '~="' + this.block.elem[i][e] + '"]';
				}
			}
		},
		block: {}
	}
});