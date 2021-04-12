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

	var app3 = qlik.openApp('Overview-3.qvf', config);

	var app4 = qlik.openApp('Initiatives.qvf', config);


	//get objects -- inserted here --
	
	app4.getObject('QV-39','Rqns');
	app3.getObject('QV-23','mfpJhMV');
	
	app3.getObject('QV-13','NPetkF');
	app3.getObject('QV-11','DhmLK');
	app3.getObject('QV-16','a44db455-c169-47f9-9a69-d6ad85aadf8c');
	app3.getObject('QV-15','92cc4669-e45d-47f0-9b7d-859ecee6e34a');
	app3.getObject('QV-21','7d756d79-54ca-42ff-a0b4-bd3f526b4e73');
	app3.getObject('QV-22','24fb6fe4-acd8-437f-a0ad-0f88ba7c7990');
	app3.getObject('QV-6','zGLYr');
	app3.getObject('QV-5','mFYgHxD');
	app3.getObject('QV-4','PAMzpN');
	app3.getObject('QV-3','TEPLnq');
	app3.getObject('QV-2','TEPLnq');
	app3.getObject('QV-1','BHFqp');
	app3.getObject('QV-14','a834aeab-db64-4cd1-bea6-9ba52e874343');
	app3.getObject('QV-12','99551a4a-7491-4699-9984-fcb482208386');
	app3.getObject('QV-10','83a62706-9715-4fab-bb64-698a8a3c959f');
	app3.getObject('QV-9','a0661c79-9de9-4270-be20-eb32e45a3369');
	app3.getObject('QV-7','f15c5f34-d89d-4582-8c5d-6ab0e7fa5503');
	app3.getObject('QV-8','af73e3e3-f879-444d-bbac-09d093c4f92c');

	

	
	
	
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
