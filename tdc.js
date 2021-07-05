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
		qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

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

	var app16 = qlik.openApp('Entering and Leaving.qvf', config);

	var app17 = qlik.openApp('Initiatives (1).qvf', config);

	var app18 = qlik.openApp('Mobility.qvf', config);

	var app19 = qlik.openApp('Initiatives (1).qvf', config);

	var app20 = qlik.openApp('Initiatives (1).qvf', config);

	var app21 = qlik.openApp('Initiatives (1).qvf', config);

	var app22 = qlik.openApp('Initiatives (1).qvf', config);

	var app23 = qlik.openApp('Initiatives (1).qvf', config);

	var app24 = qlik.openApp('Initiatives (1).qvf', config);

	var app25 = qlik.openApp('Initiatives (1).qvf', config);

	var app26 = qlik.openApp('Initiatives (1).qvf', config);

	var app27 = qlik.openApp('Initiatives (1).qvf', config);

	var app28 = qlik.openApp('Initiatives (1).qvf', config);

	var app29 = qlik.openApp('TDC-13.qvf', config);


	//get objects -- inserted here --
	app29.getObject('QV-51','HuvcPp');
	app29.getObject('QV-48','VqPgqy');
	app29.getObject('QV-47','PbpzVQ');
	app29.getObject('QV-46','psmppj');
	
	
	
	
	

	app18.getObject('QV-79','QKNPGq');
	app18.getObject('QV-84','dKJfVK');
	app18.getObject('QV-80','GQPvuL');
	app18.getObject('QV-77','eTgLqb');
	app18.getObject('QV-76','vUcDnsP');
	app18.getObject('QV-75','YKUrps');
	app18.getObject('QV-87','GdRYkB');
	app18.getObject('QV-86','FLSbVJ');
	app18.getObject('QV-85','mtcmr');
	app14.getObject('QV-40','jLYwjN');
	
	app14.getObject('QV-112','jLYwjN');
	app17.getObject('QV-50','FJxFc');
	
	
	app16.getObject('QV-69','cc4c20da-4b06-4f2d-b7ee-52eb4c0126bb');
	app16.getObject('QV-66','WVjtpH');
	app16.getObject('QV-65','89496a62-eb90-4e26-9fe2-2f46126d3382');
	app15.getObject('QV-100','npNXcq');
	app15.getObject('QV-98','RdpGTP');
	
	
	app14.getObject('QV-14','edJGeg');
	
	
	app14.getObject('QV-12','edJGeg');
	
	
	
	app5.getObject('QV-44','tfCPq');
	
	
	
	
	
	
	
	
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
