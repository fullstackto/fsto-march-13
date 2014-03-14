define([
	'backbone',
	'views/item/sidebarItems',
	'hbs!tmpl/composite/sidebar_tmpl'
],
function( Backbone, Sidebaritems, SidebarTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Sidebar CompositeView");
		},
		
    	itemView: Sidebaritems,
    	
    	template: SidebarTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "",

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {
			$("#menu").click(function(e){
				e.preventDefault();
				$("#sidebar").toggleClass("open");
				$("#container").toggleClass("open");
			});
		}
	});

});
