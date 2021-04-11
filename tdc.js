/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});

	

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Tourism.qvf', config);

	var app1 = qlik.openApp('test app.qvf', config);

	var app2 = qlik.openApp('Overview-2.qvf', config);


	//get objects -- inserted here --
	app2.getObject('QV-81','cHGj');
	app2.getObject('QV-51','cHGj');
	app2.getObject('QV-101','nKngt');
	app2.getObject('QV-91','nKngt');
	app2.getObject('QV-10','KhmP');
	
	
	
	
	app2.getObject('QV-7','KhmP');
	
	
	
	
	app2.getObject('QV-8','KhmP');
	
	
	app2.getObject('QV-9','KhmP');
	app2.getObject('QV-6','7d756d79-54ca-42ff-a0b4-bd3f526b4e73');
	app2.getObject('QV-5','7d756d79-54ca-42ff-a0b4-bd3f526b4e73');
	app2.getObject('QV-17','7d756d79-54ca-42ff-a0b4-bd3f526b4e73');
	app2.getObject('QV-16','7d756d79-54ca-42ff-a0b4-bd3f526b4e73');
	app2.getObject('QV-12','7d756d79-54ca-42ff-a0b4-bd3f526b4e73');
	app2.getObject('QV-11','7d756d79-54ca-42ff-a0b4-bd3f526b4e73');
	
	app2.getObject('QV-4','TEPLnq');
	app2.getObject('QV-3','QAhDGR');
	app2.getObject('QV-2','TEPLnq');
	app2.getObject('QV-1','BHFqp');
	
	
	app1.getObject('QV-34','jKVfuek');
	
	
	app1.getObject('QV-15','cEqNznQ');
	
	app1.getObject('QV-19','cEqNznQ');
	app1.getObject('QV-14','jKVfuek');

	
	
	
	//create cubes and lists -- inserted here --


	if (app) {
		app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
