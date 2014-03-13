(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/sidebar'
		],
		function( Sidebar ) {

			describe('Sidebar Compositeview', function () {

				it('should be an instance of Sidebar Compositeview', function () {
					var sidebar = new Sidebar();
					expect( sidebar ).to.be.an.instanceof( Sidebar );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );