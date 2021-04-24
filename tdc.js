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

	var app5 = qlik.openApp('TDC.qvf', config);

	var app6 = qlik.openApp('Initiatives (1).qvf', config);

	var app7 = qlik.openApp('Initiatives (1).qvf', config);

	var app8 = qlik.openApp('Initiatives (1).qvf', config);

	var app9 = qlik.openApp('Initiatives (1).qvf', config);

	var app10 = qlik.openApp('Initiatives (1).qvf', config);

	var app11 = qlik.openApp('Initiatives (1).qvf', config);

	var app12 = qlik.openApp('Initiatives (1).qvf', config);

	var app13 = qlik.openApp('Initiatives (1).qvf', config);

	var app14 = qlik.openApp('Overview-5.qvf', config);

	var app15 = qlik.openApp('Visitor_Hubs_Updated.qvf', config);


	//get objects -- inserted here --
	app15.getObject('QV-100','npNXcq');
	app15.getObject('QV-98','RdpGTP');
	app14.getObject('QV32','kPpmtw');
	
	app14.getObject('QV-14','edJGeg');
	
	
	app14.getObject('QV-12','edJGeg');
	
	
	
	app5.getObject('QV-44','tfCPq');
	
	
	app11.getObject('QV-48','7e17563c-5ed4-4395-a46a-32e1367cbf01');
	app10.getObject('QV-47','e6300e64-f81c-4d82-89c4-7600b3129010');
	app9.getObject('QV-46','434027dc-73bc-48d6-8073-ccd74ca0d702');
	app8.getObject('QV-51','Rqns');
	
	app5.getObject('QV34','6c204984-92aa-4c68-86ec-ee526ce25325');
	app5.getObject('QV35','1693f7d4-86bd-496c-9ff0-fdaf911729e8');
	app5.getObject('QV33','1693f7d4-86bd-496c-9ff0-fdaf911729e8');
	app5.getObject('QV-31','1693f7d4-86bd-496c-9ff0-fdaf911729e8');
	app5.getObject('QV-43','9e5fa270-8101-463b-adc4-19c0875ec578');
	app5.getObject('QV-42','1693f7d4-86bd-496c-9ff0-fdaf911729e8');
	app5.getObject('QV-41','1693f7d4-86bd-496c-9ff0-fdaf911729e8');
	
	app5.getObject('QV-39','mYbnjP');
	
	app7.getObject('QV-49','fnPbLf');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	app3.getObject('QV-2','TEPLnq');
	app3.getObject('QV-1','BHFqp');
	
	
	
	
	
	

	

	
	
	
	//create cubes and lists -- inserted here --


	if (app) {
		app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		$(".btn-round").click(function() {
			qlik.resize();
		});
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
