requirejs.config({
	baseUrl: 'js',
	deps: ['main'],
	paths: {
		jquery: '../lib/jquery/jquery',
		blocks: './blocks',
		helper: './helper'
	},
	shim: {
		jquery: {
			exports: '$'
		}
	}
});