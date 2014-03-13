(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/sidebarItems'
		],
		function( Sidebaritems ) {

			describe('Sidebaritems Itemview', function () {

				it('should be an instance of Sidebaritems Itemview', function () {
					var sidebarItems = new Sidebaritems();
					expect( sidebarItems ).to.be.an.instanceof( Sidebaritems );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );