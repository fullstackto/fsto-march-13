define([
	'backbone',
	'hbs!tmpl/item/sidebarItems_tmpl'
],
function( Backbone, SidebaritemsTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Sidebaritems ItemView");
		},
		
    	template: SidebaritemsTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
