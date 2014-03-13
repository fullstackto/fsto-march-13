define([
	'backbone',
	'communicator',
	'collections/pages',
	'hbs!tmpl/welcome',
	'views/composite/sidebar'
],

function( Backbone, Communicator, Pages, Welcome_tmpl, sidebarView ) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	App.pages = new Pages([
		{ id: 1, name: "Nurun", link: "http://www.nurun.com" },
		{ id: 2, name: "Hogtown", link: "http://hogtownbrewers.ca/" },
		{ id: 3, name: "Github", link: "http://www.github.com" }
	]);

	/* Add application regions here */
	App.addRegions({
		sidebar: "#sidebar"
	});

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
	});

	App.on('initialize:after', function(){
		var sidebar = new sidebarView({collection: App.pages});
		App.sidebar.show(sidebar);
	});

	return App;
});
