jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 AntragSet in the list
// * All 3 AntragSet have at least one AntragToSystems

sap.ui.require([
	"sap/ui/test/Opa5",
	"realtime/identifier/benutzerantrag/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"realtime/identifier/benutzerantrag/test/integration/pages/App",
	"realtime/identifier/benutzerantrag/test/integration/pages/Browser",
	"realtime/identifier/benutzerantrag/test/integration/pages/Master",
	"realtime/identifier/benutzerantrag/test/integration/pages/Detail",
	"realtime/identifier/benutzerantrag/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "realtime.identifier.benutzerantrag.view."
	});

	sap.ui.require([
		"realtime/identifier/benutzerantrag/test/integration/MasterJourney",
		"realtime/identifier/benutzerantrag/test/integration/NavigationJourney",
		"realtime/identifier/benutzerantrag/test/integration/NotFoundJourney",
		"realtime/identifier/benutzerantrag/test/integration/BusyJourney",
		"realtime/identifier/benutzerantrag/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});