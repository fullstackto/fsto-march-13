(function() {
	'use strict';

	var root = this;

	root.define([
		'models/page'
		],
		function( Page ) {

			describe('Page Model', function () {

				it('should be an instance of Page Model', function () {
					var page = new Page();
					expect( page ).to.be.an.instanceof( Page );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );