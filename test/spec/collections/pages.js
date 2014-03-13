(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/pages'
		],
		function( Pages ) {

			describe('Pages Collection', function () {

				it('should be an instance of Pages Collection', function () {
					var pages = new Pages();
					expect( pages ).to.be.an.instanceof( Pages );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );